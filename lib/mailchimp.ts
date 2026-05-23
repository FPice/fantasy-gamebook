// Server-side only — non importare in componenti client

const API_KEY = process.env.MAILCHIMP_API_KEY ?? "";
const LIST_ID = process.env.MAILCHIMP_LIST_ID ?? "";

function datacenter(): string {
  return API_KEY.split("-").pop() ?? "us1";
}

export async function subscribeToNewsletter(
  email: string,
  nome: string,
  cognome: string,
  nickname: string
): Promise<void> {
  if (!API_KEY || !LIST_ID) return;

  const url = `https://${datacenter()}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: nome,
        LNAME: cognome,
        NICKNAME: nickname,
      },
      tags: ["gamebook_user"],
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    // Ignora "Member Exists" (400 con title "Member Exists")
    if (body?.title !== "Member Exists") {
      throw new Error(`Mailchimp error: ${body?.detail ?? res.statusText}`);
    }
  }
}
