/* eslint-env node */
export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const { name, email, message } = await req.json();
  if (!email?.includes("@") || !message?.trim()) {
    return new Response("Email and message are required", { status: 400 });
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "sungha.me <sung@yourculdesac.com>",
      to: "hwansung595@gmail.com",
      reply_to: email,
      subject: `sungha.me message from ${name || email}`,
      text: message,
    }),
  });
  return new Response(await res.text(), { status: res.status });
};
