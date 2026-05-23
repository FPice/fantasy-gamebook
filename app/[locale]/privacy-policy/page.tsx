import type { Locale } from "@/i18n";

export default function PrivacyPolicyPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const it = locale === "it";
  const appName = "Cronache dell'Abisso";
  const contactEmail = "privacy@cronachedellabisso.it";
  const lastUpdated = "23 maggio 2025";

  if (!it) return <EnContent appName={appName} contactEmail={contactEmail} />;
  return <ItContent appName={appName} contactEmail={contactEmail} lastUpdated={lastUpdated} />;
}

function ItContent({
  appName,
  contactEmail,
  lastUpdated,
}: {
  appName: string;
  contactEmail: string;
  lastUpdated: string;
}) {
  return (
    <div className="container max-w-3xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-gradient-abyss">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Ultimo aggiornamento: {lastUpdated}
      </p>

      <div className="prose prose-invert prose-sm max-w-none flex flex-col gap-6">
        <Section title="1. Titolare del trattamento">
          <p>
            Il Titolare del trattamento dei dati personali raccolti tramite{" "}
            <strong>{appName}</strong> è il gestore dell&apos;applicazione,
            raggiungibile all&apos;indirizzo email:{" "}
            <a href={`mailto:${contactEmail}`} className="text-abyss-300">
              {contactEmail}
            </a>
            .
          </p>
        </Section>

        <Section title="2. Dati raccolti e finalità">
          <p>Raccogliamo i seguenti dati personali:</p>
          <ul>
            <li>
              <strong>Dati di registrazione:</strong> nome, cognome, nickname di
              battaglia, indirizzo email e password (cifrata). Base giuridica:
              Art.&nbsp;6(1)(b) GDPR — esecuzione del contratto.
            </li>
            <li>
              <strong>Dati di gioco:</strong> statistiche del personaggio,
              oggetti equipaggiati, sessioni di gioco. Base giuridica:
              Art.&nbsp;6(1)(b) GDPR.
            </li>
            <li>
              <strong>Comunicazioni marketing</strong> (solo con consenso
              esplicito): email, nome, cognome e nickname per l&apos;invio di
              newsletter e comunicazioni promozionali. Base giuridica:
              Art.&nbsp;6(1)(a) GDPR — consenso. Il consenso è revocabile in
              qualsiasi momento dal profilo utente.
            </li>
          </ul>
        </Section>

        <Section title="3. Responsabili del trattamento (Data Processors)">
          <p>
            I tuoi dati sono trattati dai seguenti responsabili del
            trattamento con cui abbiamo stipulato un accordo di trattamento
            dei dati (DPA):
          </p>
          <ul>
            <li>
              <strong>Supabase Inc.</strong> (hosting del database e servizio
              di autenticazione) — dati conservati su server UE. Privacy
              Policy:{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-abyss-300"
              >
                supabase.com/privacy
              </a>
              .
            </li>
            <li>
              <strong>Mailchimp / Intuit Inc.</strong> (servizio di email
              marketing, attivato solo previo consenso esplicito
              dell&apos;utente) — i dati degli utenti che hanno dato
              consenso al marketing verranno trasferiti a Mailchimp con
              garanzie adeguate ai sensi dell&apos;Art.&nbsp;46 GDPR.
              Privacy Policy:{" "}
              <a
                href="https://mailchimp.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-abyss-300"
              >
                mailchimp.com/legal/privacy
              </a>
              .
            </li>
          </ul>
        </Section>

        <Section title="4. Conservazione dei dati">
          <p>
            I dati personali sono conservati per un periodo di{" "}
            <strong>3 (tre) anni</strong> dalla data di ultima attività
            dell&apos;account. Successivamente i dati vengono eliminati o
            resi anonimi, salvo obblighi di conservazione previsti dalla
            legge applicabile.
          </p>
          <p>
            L&apos;utente può richiedere la cancellazione dell&apos;account
            in qualsiasi momento tramite la pagina Profilo.
          </p>
        </Section>

        <Section title="5. Diritti degli interessati (Artt. 15–22 GDPR)">
          <p>Hai il diritto di:</p>
          <ul>
            <li>
              <strong>Accesso (Art.&nbsp;15):</strong> ottenere conferma del
              trattamento e copia dei tuoi dati.
            </li>
            <li>
              <strong>Rettifica (Art.&nbsp;16):</strong> correggere dati
              inesatti o incompleti.
            </li>
            <li>
              <strong>Cancellazione (Art.&nbsp;17):</strong> ottenere la
              cancellazione dei tuoi dati (&ldquo;diritto all&apos;oblio&rdquo;).
            </li>
            <li>
              <strong>Limitazione (Art.&nbsp;18):</strong> limitare il
              trattamento in determinati casi.
            </li>
            <li>
              <strong>Portabilità (Art.&nbsp;20):</strong> ricevere i tuoi
              dati in formato strutturato e leggibile.
            </li>
            <li>
              <strong>Opposizione (Art.&nbsp;21):</strong> opporti al
              trattamento, incluso quello per finalità di marketing diretto.
            </li>
            <li>
              <strong>Revoca del consenso (Art.&nbsp;7):</strong> revocare
              il consenso al marketing in qualsiasi momento senza
              pregiudicare la liceità del trattamento precedente.
            </li>
          </ul>
          <p>
            Per esercitare i tuoi diritti scrivi a{" "}
            <a href={`mailto:${contactEmail}`} className="text-abyss-300">
              {contactEmail}
            </a>
            . Hai inoltre il diritto di proporre reclamo al{" "}
            <strong>Garante per la protezione dei dati personali</strong>{" "}
            (
            <a
              href="https://www.garanteprivacy.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-abyss-300"
            >
              garanteprivacy.it
            </a>
            ).
          </p>
        </Section>

        <Section title="6. Trasferimenti internazionali">
          <p>
            Alcuni responsabili del trattamento operano al di fuori dello
            Spazio Economico Europeo. I trasferimenti sono effettuati con
            garanzie adeguate ai sensi degli Artt.&nbsp;44–46 GDPR
            (Clausole Contrattuali Standard approvate dalla Commissione
            Europea o decisioni di adeguatezza).
          </p>
        </Section>

        <Section title="7. Cookie">
          <p>
            Utilizziamo esclusivamente cookie tecnici necessari per
            l&apos;autenticazione e il funzionamento dell&apos;applicazione.
            Consulta la nostra{" "}
            <a href="/it/cookie-policy" className="text-abyss-300">
              Cookie Policy
            </a>{" "}
            per i dettagli.
          </p>
        </Section>

        <Section title="8. Modifiche alla Privacy Policy">
          <p>
            Ci riserviamo il diritto di modificare questa Privacy Policy.
            Le modifiche sostanziali saranno comunicate via email agli
            utenti registrati con almeno 30 giorni di anticipo.
          </p>
        </Section>
      </div>
    </div>
  );
}

function EnContent({
  appName,
  contactEmail,
}: {
  appName: string;
  contactEmail: string;
}) {
  return (
    <div className="container max-w-3xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-gradient-abyss">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Please note: the legally binding version of this Privacy Policy is
        the Italian version. This is a courtesy translation.
      </p>
      <div className="flex flex-col gap-6 text-sm">
        <Section title="1. Data Controller">
          <p>
            The data controller for <strong>{appName}</strong> is the
            application operator, reachable at:{" "}
            <a href={`mailto:${contactEmail}`} className="text-abyss-300">
              {contactEmail}
            </a>
            .
          </p>
        </Section>
        <Section title="2. Data Collected">
          <p>
            We collect: registration data (name, surname, battle nickname,
            email, encrypted password), gameplay data (character stats,
            items, game sessions), and marketing data only with explicit
            consent.
          </p>
        </Section>
        <Section title="3. Data Processors">
          <p>
            <strong>Supabase Inc.</strong> for database &amp; authentication;{" "}
            <strong>Mailchimp / Intuit Inc.</strong> for email marketing
            (only for users who have given explicit consent).
          </p>
        </Section>
        <Section title="4. Retention">
          <p>Data is retained for 3 years from last account activity.</p>
        </Section>
        <Section title="5. Your Rights (GDPR Arts. 15–22)">
          <p>
            You have the right to access, rectification, erasure, restriction,
            portability, objection, and withdrawal of consent. Contact us at{" "}
            <a href={`mailto:${contactEmail}`} className="text-abyss-300">
              {contactEmail}
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-abyss-800 p-5 bg-card flex flex-col gap-2">
      <h2 className="text-base font-semibold">{title}</h2>
      <div className="text-sm text-muted-foreground flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}
