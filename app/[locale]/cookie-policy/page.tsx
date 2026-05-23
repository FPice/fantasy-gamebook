import type { Locale } from "@/i18n";

export default function CookiePolicyPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const it = locale === "it";

  return (
    <div className="container max-w-3xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-gradient-abyss">
        {it ? "Cookie Policy" : "Cookie Policy"}
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        {it ? "Ultimo aggiornamento: 23 maggio 2025" : "Last updated: 23 May 2025"}
      </p>

      <div className="flex flex-col gap-5">
        <Block title={it ? "1. Cosa sono i cookie" : "1. What are cookies"}>
          {it ? (
            <p>
              I cookie sono piccoli file di testo memorizzati nel tuo browser
              quando visiti un sito web. Questa applicazione utilizza
              esclusivamente cookie tecnici strettamente necessari al
              funzionamento del servizio.
            </p>
          ) : (
            <p>
              Cookies are small text files stored in your browser when you
              visit a website. This application uses only technically
              necessary cookies required for the service to function.
            </p>
          )}
        </Block>

        <Block
          title={
            it ? "2. Cookie utilizzati da questa applicazione" : "2. Cookies used by this application"
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-abyss-700">
                  <th className="text-left py-2 pr-4 font-semibold">
                    {it ? "Nome" : "Name"}
                  </th>
                  <th className="text-left py-2 pr-4 font-semibold">
                    {it ? "Tipo" : "Type"}
                  </th>
                  <th className="text-left py-2 pr-4 font-semibold">
                    {it ? "Scopo" : "Purpose"}
                  </th>
                  <th className="text-left py-2 font-semibold">
                    {it ? "Durata" : "Duration"}
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-abyss-800/40">
                  <td className="py-2 pr-4 font-mono">sb-*-auth-token</td>
                  <td className="py-2 pr-4">{it ? "Tecnico" : "Technical"}</td>
                  <td className="py-2 pr-4">
                    {it
                      ? "Sessione di autenticazione Supabase"
                      : "Supabase authentication session"}
                  </td>
                  <td className="py-2">{it ? "Sessione / 1 settimana" : "Session / 1 week"}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono">NEXT_LOCALE</td>
                  <td className="py-2 pr-4">{it ? "Tecnico" : "Technical"}</td>
                  <td className="py-2 pr-4">
                    {it ? "Preferenza lingua" : "Language preference"}
                  </td>
                  <td className="py-2">1 {it ? "anno" : "year"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Block>

        <Block title={it ? "3. Cookie di terze parti" : "3. Third-party cookies"}>
          {it ? (
            <p>
              Questa applicazione non installa cookie di profilazione o di
              tracciamento di terze parti. Non viene utilizzata alcuna
              piattaforma pubblicitaria.
            </p>
          ) : (
            <p>
              This application does not install third-party profiling or
              tracking cookies. No advertising platform is used.
            </p>
          )}
        </Block>

        <Block title={it ? "4. Gestione dei cookie" : "4. Managing cookies"}>
          {it ? (
            <p>
              Puoi controllare e/o eliminare i cookie tramite le impostazioni
              del tuo browser. Eliminare i cookie tecnici di autenticazione
              comporterà la disconnessione dall&apos;applicazione. Consulta la
              documentazione del tuo browser per le istruzioni:
              Chrome, Firefox, Safari, Edge.
            </p>
          ) : (
            <p>
              You can control and/or delete cookies through your browser
              settings. Deleting authentication cookies will sign you out of
              the application.
            </p>
          )}
        </Block>

        <Block title={it ? "5. Assenza di consenso obbligatorio" : "5. No mandatory consent"}>
          {it ? (
            <p>
              Poiché utilizziamo solo cookie tecnici strettamente necessari
              (Art.&nbsp;122 comma 1 del Codice Privacy e Linee guida del
              Garante del 10 giugno 2021), non è necessario ottenere il tuo
              consenso per il loro utilizzo.
            </p>
          ) : (
            <p>
              Since we use only strictly necessary technical cookies, no
              cookie consent banner is required under Italian and EU law.
            </p>
          )}
        </Block>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-abyss-800 p-5 bg-card">
      <h2 className="text-base font-semibold mb-2">{title}</h2>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
