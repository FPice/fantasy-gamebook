"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Database } from "@/lib/supabase";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type Character = Database["public"]["Tables"]["characters"]["Row"];

interface Props {
  locale: string;
  email: string;
  profile: Profile | null;
  characters: Character[];
}

export function ProfileClient({ locale, email, profile, characters }: Props) {
  const router = useRouter();
  const supabase = createClient();
  const it = locale === "it";

  // Stato nickname editing
  const [editingNickname, setEditingNickname] = useState(false);
  const [nickname, setNickname] = useState(profile?.nickname_battaglia ?? "");
  const [nicknameSaving, setNicknameSaving] = useState(false);
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [nicknameSuccess, setNicknameSuccess] = useState(false);

  // Stato marketing opt-in
  const [marketingOptIn, setMarketingOptIn] = useState(
    profile?.marketing_opt_in ?? false
  );
  const [marketingSaving, setMarketingSaving] = useState(false);

  // Stato eliminazione account
  const [deleteStep, setDeleteStep] = useState<0 | 1 | 2>(0);
  const [deleteConfirmInput, setDeleteConfirmInput] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const CONFIRM_WORD = it ? "ELIMINA" : "DELETE";

  async function saveNickname() {
    if (!nickname.trim()) return;
    setNicknameSaving(true);
    setNicknameError(null);
    setNicknameSuccess(false);
    const { error } = await supabase
      .from("profiles")
      .update({ nickname_battaglia: nickname.trim(), username: nickname.trim() })
      .eq("id", profile!.id);
    if (error) {
      setNicknameError(
        error.message.includes("unique")
          ? it
            ? "Nickname già in uso. Scegliene un altro."
            : "Nickname already taken. Choose another."
          : error.message
      );
    } else {
      setNicknameSuccess(true);
      setEditingNickname(false);
    }
    setNicknameSaving(false);
  }

  async function toggleMarketing(value: boolean) {
    setMarketingSaving(true);
    await supabase
      .from("profiles")
      .update({
        marketing_opt_in: value,
        marketing_opt_in_at: value ? new Date().toISOString() : null,
      })
      .eq("id", profile!.id);
    setMarketingOptIn(value);
    setMarketingSaving(false);
  }

  async function deleteAccount() {
    if (deleteConfirmInput !== CONFIRM_WORD) return;
    setDeleteLoading(true);
    setDeleteError(null);
    const res = await fetch("/api/auth/delete", { method: "POST" });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setDeleteError(body.error ?? (it ? "Errore durante l'eliminazione." : "Deletion error."));
      setDeleteLoading(false);
      return;
    }
    await supabase.auth.signOut();
    router.push(`/${locale}`);
    router.refresh();
  }

  const character = characters[0] ?? null;

  return (
    <div className="container max-w-2xl py-12 px-4 flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gradient-abyss">
        {it ? "Profilo" : "Profile"}
      </h1>

      {/* ── Dati identità ─────────────────────────────────────────── */}
      <Section title={it ? "Identità" : "Identity"}>
        <Row label={it ? "Nome" : "First name"} value={profile?.nome || "—"} />
        <Row label={it ? "Cognome" : "Last name"} value={profile?.cognome || "—"} />
        <Row label="Email" value={email} />

        <div className="flex items-center justify-between py-2 border-b border-abyss-800/40">
          <div>
            <p className="text-sm text-muted-foreground">
              {it ? "Nickname di battaglia" : "Battle nickname"}
            </p>
            {editingNickname ? (
              <div className="flex items-center gap-2 mt-1">
                <Input
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="h-8 w-48 text-sm"
                  autoFocus
                />
                <Button
                  size="sm"
                  disabled={nicknameSaving}
                  className="bg-abyss-600 hover:bg-abyss-500 h-8 text-xs"
                  onClick={saveNickname}
                >
                  {nicknameSaving ? "..." : it ? "Salva" : "Save"}
                </Button>
                <button
                  className="text-xs text-muted-foreground hover:underline"
                  onClick={() => {
                    setEditingNickname(false);
                    setNickname(profile?.nickname_battaglia ?? "");
                    setNicknameError(null);
                  }}
                >
                  {it ? "Annulla" : "Cancel"}
                </button>
              </div>
            ) : (
              <p className="font-medium">{profile?.nickname_battaglia || "—"}</p>
            )}
            {nicknameError && (
              <p className="text-xs text-destructive mt-1">{nicknameError}</p>
            )}
            {nicknameSuccess && !editingNickname && (
              <p className="text-xs text-green-400 mt-1">
                {it ? "Nickname aggiornato" : "Nickname updated"}
              </p>
            )}
          </div>
          {!editingNickname && (
            <button
              className="text-xs text-abyss-300 hover:underline"
              onClick={() => setEditingNickname(true)}
            >
              {it ? "Modifica" : "Edit"}
            </button>
          )}
        </div>

        <Row
          label={it ? "Membro dal" : "Member since"}
          value={
            profile?.created_at
              ? new Date(profile.created_at).toLocaleDateString(
                  it ? "it-IT" : "en-GB"
                )
              : "—"
          }
        />
      </Section>

      {/* ── Statistiche personaggio ───────────────────────────────── */}
      <Section title={it ? "Personaggio" : "Character"}>
        {character ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label={it ? "Attacco" : "Attack"} value={character.attacco} />
            <Stat label={it ? "Difesa" : "Defense"} value={character.difesa} />
            <Stat
              label={it ? "Punti Vita" : "Hit Points"}
              value={`${character.punti_vita_correnti}/${character.punti_vita_max}`}
            />
            <Stat label={it ? "Oro" : "Gold"} value={character.oro} />
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            {it ? "Nessun personaggio creato." : "No character created."}
          </p>
        )}
      </Section>

      {/* ── Consensi ─────────────────────────────────────────────── */}
      <Section title={it ? "Consensi" : "Consents"}>
        {/* GDPR — read-only */}
        <div className="flex items-start justify-between py-2 border-b border-abyss-800/40">
          <div>
            <p className="text-sm font-medium">
              {it ? "Trattamento dati personali (Art. 6 GDPR)" : "Personal data processing (Art. 6 GDPR)"}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {profile?.consenso_gdpr_at
                ? (it ? "Concesso il " : "Granted on ") +
                  new Date(profile.consenso_gdpr_at).toLocaleDateString(
                    it ? "it-IT" : "en-GB"
                  )
                : it
                ? "Non fornito"
                : "Not provided"}
            </p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-green-900/40 text-green-400">
            {it ? "Attivo" : "Active"}
          </span>
        </div>

        {/* Marketing — togglable */}
        <div className="flex items-start justify-between py-2">
          <div>
            <p className="text-sm font-medium">
              {it ? "Newsletter e comunicazioni promozionali" : "Newsletter and promotional communications"}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {it ? "Facoltativo — puoi modificarlo in qualsiasi momento." : "Optional — you can change this at any time."}
            </p>
          </div>
          <button
            disabled={marketingSaving}
            onClick={() => toggleMarketing(!marketingOptIn)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              marketingOptIn
                ? "border-abyss-500 bg-abyss-900/60 text-abyss-300"
                : "border-abyss-800 text-muted-foreground hover:border-abyss-600"
            }`}
          >
            {marketingSaving
              ? "..."
              : marketingOptIn
              ? it
                ? "Attivo — disattiva"
                : "Active — disable"
              : it
              ? "Non attivo — attiva"
              : "Inactive — enable"}
          </button>
        </div>
      </Section>

      {/* ── Elimina account ───────────────────────────────────────── */}
      <Section title={it ? "Zona pericolo" : "Danger zone"} danger>
        {deleteStep === 0 && (
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-destructive">
                {it ? "Cancella account" : "Delete account"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {it
                  ? "Tutti i tuoi dati verranno eliminati permanentemente."
                  : "All your data will be permanently deleted."}
              </p>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setDeleteStep(1)}
            >
              {it ? "Cancella" : "Delete"}
            </Button>
          </div>
        )}

        {deleteStep === 1 && (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-destructive font-medium">
              {it
                ? "Sei sicuro? Questa azione è irreversibile."
                : "Are you sure? This action is irreversible."}
            </p>
            <div className="flex gap-2">
              <Button variant="destructive" size="sm" onClick={() => setDeleteStep(2)}>
                {it ? "Sì, continua" : "Yes, continue"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDeleteStep(0)}
              >
                {it ? "Annulla" : "Cancel"}
              </Button>
            </div>
          </div>
        )}

        {deleteStep === 2 && (
          <div className="flex flex-col gap-3">
            <p className="text-sm">
              {it
                ? `Per confermare, scrivi ${CONFIRM_WORD} nel campo sottostante.`
                : `To confirm, type ${CONFIRM_WORD} in the field below.`}
            </p>
            <Input
              value={deleteConfirmInput}
              onChange={(e) => setDeleteConfirmInput(e.target.value)}
              placeholder={CONFIRM_WORD}
              className="border-destructive/50 max-w-[200px]"
            />
            {deleteError && (
              <p className="text-xs text-destructive">{deleteError}</p>
            )}
            <div className="flex gap-2">
              <Button
                variant="destructive"
                size="sm"
                disabled={deleteConfirmInput !== CONFIRM_WORD || deleteLoading}
                onClick={deleteAccount}
              >
                {deleteLoading
                  ? "..."
                  : it
                  ? "Cancella definitivamente"
                  : "Delete permanently"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setDeleteStep(0);
                  setDeleteConfirmInput("");
                  setDeleteError(null);
                }}
              >
                {it ? "Annulla" : "Cancel"}
              </Button>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}

// ── Helper components ─────────────────────────────────────────────────────────

function Section({
  title,
  children,
  danger,
}: {
  title: string;
  children?: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-5 bg-card flex flex-col gap-1 ${
        danger ? "border-destructive/30" : "border-abyss-800"
      }`}
    >
      <h2
        className={`text-base font-semibold mb-3 ${
          danger ? "text-destructive" : ""
        }`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-abyss-800/40 last:border-0">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-md border border-abyss-800 p-3 text-center">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-lg font-bold text-abyss-300">{value}</p>
    </div>
  );
}
