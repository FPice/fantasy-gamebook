"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AuthMode = "signIn" | "signUp" | "resetPassword";

export default function AuthPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<AuthMode>("signIn");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // Campi comuni
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Campi solo sign-up
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [nicknameBattaglia, setNicknameBattaglia] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);

  const it = locale === "it";

  function switchMode(next: AuthMode) {
    setMode(next);
    setError(null);
    setMessage(null);
  }

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push(`/${locale}/game`);
      router.refresh();
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : it
          ? "Credenziali non valide. Riprova."
          : "Invalid credentials. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!gdprConsent) {
      setError(
        it
          ? "Il consenso al trattamento dei dati personali è obbligatorio."
          : "Consent to personal data processing is required."
      );
      return;
    }
    if (password.length < 8) {
      setError(
        it
          ? "La password deve avere almeno 8 caratteri."
          : "Password must be at least 8 characters."
      );
      return;
    }
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nome,
            cognome,
            nickname_battaglia: nicknameBattaglia,
            consenso_gdpr: true,
            marketing_opt_in: marketingOptIn,
          },
        },
      });
      if (error) throw error;
      setMessage(
        it
          ? "Email di conferma inviata. Controlla la tua casella."
          : "Confirmation email sent. Check your inbox."
      );
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : it
          ? "Errore durante la registrazione. Riprova."
          : "Registration error. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleResetPassword(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/${locale}/auth`,
      });
      if (error) throw error;
      setMessage(
        it
          ? "Email di reimpostazione password inviata. Controlla la tua casella."
          : "Password reset email sent. Check your inbox."
      );
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : it
          ? "Errore nell'invio dell'email. Riprova."
          : "Error sending email. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  const titles: Record<AuthMode, string> = {
    signIn: it ? "Accedi" : "Sign In",
    signUp: it ? "Registrati" : "Sign Up",
    resetPassword: it ? "Reimposta password" : "Reset Password",
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
      <div className="w-full max-w-md border border-abyss-800 rounded-lg p-8 bg-card">
        <h1 className="text-2xl font-bold mb-6 text-center text-gradient-abyss">
          {titles[mode as AuthMode]}
        </h1>

        {/* ── Accedi ───────────────────────────────────────────────── */}
        {mode === "signIn" && (
          <form onSubmit={handleSignIn} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">{it ? "Email" : "Email"}</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password">{it ? "Password" : "Password"}</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-abyss-500"
                />
                {it ? "Ricordami" : "Remember me"}
              </label>
              <button
                type="button"
                className="text-abyss-300 hover:underline"
                onClick={() => switchMode("resetPassword")}
              >
                {it ? "Password dimenticata?" : "Forgot password?"}
              </button>
            </div>

            <Feedback error={error} message={message} />

            <Button
              type="submit"
              disabled={isLoading}
              className="bg-abyss-600 hover:bg-abyss-500"
            >
              {isLoading ? "..." : it ? "Accedi" : "Sign In"}
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              {it ? "Non hai un account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                className="text-abyss-300 hover:underline"
                onClick={() => switchMode("signUp")}
              >
                {it ? "Registrati" : "Sign Up"}
              </button>
            </p>
          </form>
        )}

        {/* ── Registrati ───────────────────────────────────────────── */}
        {mode === "signUp" && (
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="nome">{it ? "Nome" : "First name"}</Label>
                <Input
                  id="nome"
                  autoComplete="given-name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="cognome">{it ? "Cognome" : "Last name"}</Label>
                <Input
                  id="cognome"
                  autoComplete="family-name"
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="nickname">
                {it ? "Nickname di battaglia" : "Battle nickname"}
              </Label>
              <Input
                id="nickname"
                placeholder={it ? "es. AldricoIlMediocre" : "e.g. AldricTheMediocre"}
                value={nicknameBattaglia}
                onChange={(e) => setNicknameBattaglia(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email-su">{it ? "Email" : "Email"}</Label>
              <Input
                id="email-su"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password-su">{it ? "Password" : "Password"}</Label>
              <Input
                id="password-su"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
              <p className="text-xs text-muted-foreground">
                {it ? "Minimo 8 caratteri" : "Minimum 8 characters"}
              </p>
            </div>

            {/* Consenso GDPR — obbligatorio */}
            <div className="rounded-md border border-abyss-700 p-3 flex flex-col gap-3">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  className="mt-0.5 accent-abyss-500 shrink-0"
                  required
                />
                <span className="text-sm">
                  {it ? (
                    <>
                      Ho letto e accetto la{" "}
                      <Link
                        href={`/${locale}/privacy-policy`}
                        target="_blank"
                        className="text-abyss-300 hover:underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      e i{" "}
                      <Link
                        href={`/${locale}/terms`}
                        target="_blank"
                        className="text-abyss-300 hover:underline"
                      >
                        Termini di Servizio
                      </Link>
                      . Acconsento al trattamento dei miei dati personali ai
                      sensi dell&apos;Art.&nbsp;6 GDPR.{" "}
                      <span className="text-destructive">*</span>
                    </>
                  ) : (
                    <>
                      I have read and agree to the{" "}
                      <Link
                        href={`/${locale}/privacy-policy`}
                        target="_blank"
                        className="text-abyss-300 hover:underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        href={`/${locale}/terms`}
                        target="_blank"
                        className="text-abyss-300 hover:underline"
                      >
                        Terms of Service
                      </Link>
                      . I consent to the processing of my personal data under
                      Art.&nbsp;6 GDPR.{" "}
                      <span className="text-destructive">*</span>
                    </>
                  )}
                </span>
              </label>

              {/* Opt-in marketing — facoltativo */}
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketingOptIn}
                  onChange={(e) => setMarketingOptIn(e.target.checked)}
                  className="mt-0.5 accent-abyss-500 shrink-0"
                />
                <span className="text-sm text-muted-foreground">
                  {it
                    ? "Desidero ricevere newsletter, aggiornamenti e comunicazioni promozionali (facoltativo)."
                    : "I would like to receive newsletters, updates and promotional communications (optional)."}
                </span>
              </label>
            </div>

            <Feedback error={error} message={message} />

            <Button
              type="submit"
              disabled={isLoading}
              className="bg-abyss-600 hover:bg-abyss-500"
            >
              {isLoading ? "..." : it ? "Crea account" : "Create account"}
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              {it ? "Hai già un account?" : "Already have an account?"}{" "}
              <button
                type="button"
                className="text-abyss-300 hover:underline"
                onClick={() => switchMode("signIn")}
              >
                {it ? "Accedi" : "Sign In"}
              </button>
            </p>
          </form>
        )}

        {/* ── Reset password ───────────────────────────────────────── */}
        {mode === "resetPassword" && (
          <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              {it
                ? "Inserisci la tua email per ricevere un link di reimpostazione della password."
                : "Enter your email to receive a password reset link."}
            </p>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email-rp">{it ? "Email" : "Email"}</Label>
              <Input
                id="email-rp"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Feedback error={error} message={message} />

            <Button
              type="submit"
              disabled={isLoading}
              className="bg-abyss-600 hover:bg-abyss-500"
            >
              {isLoading
                ? "..."
                : it
                ? "Invia link di reimpostazione"
                : "Send reset link"}
            </Button>

            <button
              type="button"
              className="text-sm text-abyss-300 hover:underline text-center"
              onClick={() => switchMode("signIn")}
            >
              {it ? "← Torna al login" : "← Back to sign in"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Feedback({
  error,
  message,
}: {
  error: string | null;
  message: string | null;
}) {
  if (error)
    return <p className="text-sm text-destructive text-center">{error}</p>;
  if (message)
    return <p className="text-sm text-green-400 text-center">{message}</p>;
  return null;
}
