import type { Locale } from "@/i18n";

export default function TermsPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const it = locale === "it";
  const appName = "Cronache dell'Abisso";
  const contactEmail = "legal@cronachedellabisso.it";
  const lastUpdated = "23 maggio 2025";

  return (
    <div className="container max-w-3xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-gradient-abyss">
        {it ? "Termini di Servizio" : "Terms of Service"}
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        {it ? `Ultimo aggiornamento: ${lastUpdated}` : `Last updated: ${lastUpdated}`}
      </p>

      <div className="flex flex-col gap-5">
        {it ? (
          <>
            <S title="1. Accettazione dei termini">
              <p>
                Utilizzando <strong>{appName}</strong> (&ldquo;il
                Servizio&rdquo;) accetti integralmente i presenti Termini di
                Servizio. Se non accetti, non utilizzare il Servizio.
              </p>
            </S>

            <S title="2. Descrizione del Servizio">
              <p>
                {appName} è un&apos;applicazione di intrattenimento gratuita che
                offre un&apos;esperienza di libro game fantasy con elementi di
                gioco di ruolo. Il Servizio è fornito &ldquo;così com&apos;è&rdquo;
                senza garanzie di continuità.
              </p>
            </S>

            <S title="3. Account utente">
              <ul>
                <li>Per accedere al Servizio è necessario registrare un account.</li>
                <li>
                  Sei responsabile della confidenzialità delle credenziali
                  di accesso e di tutte le attività svolte con il tuo account.
                </li>
                <li>
                  Devi avere almeno 13 anni per registrarti. I minori di 18
                  anni devono ottenere il consenso dei genitori.
                </li>
                <li>
                  Puoi cancellare il tuo account in qualsiasi momento dalla
                  pagina Profilo.
                </li>
              </ul>
            </S>

            <S title="4. Condotta dell'utente">
              <p>Ti impegni a non:</p>
              <ul>
                <li>utilizzare il Servizio per scopi illegali;</li>
                <li>
                  tentare di accedere a dati di altri utenti o di
                  compromettere la sicurezza del Servizio;
                </li>
                <li>
                  usare nickname o contenuti offensivi, discriminatori o
                  diffamatori.
                </li>
              </ul>
            </S>

            <S title="5. Contenuto generato dall'utente">
              <p>
                Il nickname di battaglia e i dati di profilo inseriti
                dall&apos;utente rimangono di sua proprietà. Concedi al
                Servizio una licenza limitata per visualizzarli
                nell&apos;applicazione.
              </p>
            </S>

            <S title="6. Proprietà intellettuale">
              <p>
                Tutti i contenuti del Servizio (testi narrativi, grafica,
                codice, marchi) sono protetti da copyright e di proprietà
                esclusiva del gestore. È vietata qualsiasi riproduzione senza
                autorizzazione scritta.
              </p>
            </S>

            <S title="7. Limitazione di responsabilità">
              <p>
                Il Servizio è fornito gratuitamente. Nella misura massima
                consentita dalla legge applicabile, il gestore non è
                responsabile per danni indiretti, incidentali o consequenziali
                derivanti dall&apos;uso o dall&apos;impossibilità di utilizzo
                del Servizio.
              </p>
            </S>

            <S title="8. Modifiche al Servizio e ai Termini">
              <p>
                Ci riserviamo il diritto di modificare il Servizio o i
                presenti Termini in qualsiasi momento. Le modifiche
                sostanziali saranno comunicate con almeno 15 giorni di
                preavviso via email.
              </p>
            </S>

            <S title="9. Legge applicabile e foro competente">
              <p>
                I presenti Termini sono regolati dalla legge italiana. Per
                qualsiasi controversia è competente in via esclusiva il
                Tribunale del luogo di residenza del gestore, salvo diversa
                disposizione di legge a tutela del consumatore.
              </p>
            </S>

            <S title="10. Contatti">
              <p>
                Per qualsiasi domanda scrivi a{" "}
                <a href={`mailto:${contactEmail}`} className="text-abyss-300">
                  {contactEmail}
                </a>
                .
              </p>
            </S>
          </>
        ) : (
          <>
            <S title="1. Acceptance">
              <p>
                By using <strong>{appName}</strong> you agree to these Terms.
                If you disagree, do not use the Service.
              </p>
            </S>
            <S title="2. Service Description">
              <p>
                {appName} is a free entertainment application offering a
                fantasy gamebook experience. The service is provided
                &ldquo;as is&rdquo; without guarantees of continuity.
              </p>
            </S>
            <S title="3. User Accounts">
              <ul>
                <li>You must be at least 13 years old to register.</li>
                <li>You are responsible for keeping your credentials secure.</li>
                <li>You may delete your account at any time from the Profile page.</li>
              </ul>
            </S>
            <S title="4. Prohibited Conduct">
              <p>
                You must not use the Service for illegal purposes, attempt to
                access other users&apos; data, or use offensive nicknames.
              </p>
            </S>
            <S title="5. Intellectual Property">
              <p>
                All Service content is copyrighted and owned by the operator.
                Reproduction without written permission is prohibited.
              </p>
            </S>
            <S title="6. Limitation of Liability">
              <p>
                The Service is free. To the maximum extent permitted by law,
                the operator is not liable for indirect or consequential damages.
              </p>
            </S>
            <S title="7. Contact">
              <p>
                Questions?{" "}
                <a href={`mailto:${contactEmail}`} className="text-abyss-300">
                  {contactEmail}
                </a>
              </p>
            </S>
          </>
        )}
      </div>
    </div>
  );
}

function S({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-abyss-800 p-5 bg-card">
      <h2 className="text-base font-semibold mb-2">{title}</h2>
      <div className="text-sm text-muted-foreground flex flex-col gap-1.5">
        {children}
      </div>
    </div>
  );
}
