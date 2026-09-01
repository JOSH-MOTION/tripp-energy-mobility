import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = body?.email as string | undefined;

  if (!email?.includes("@")) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[newsletter] RESEND_API_KEY is not set. Skipping notification. Add it in your hosting provider's environment variables."
    );
    return NextResponse.json(
      { error: "Newsletter signup is not yet configured on this site." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.EMAIL_FROM ?? "Tripp Energy and Mobility <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from,
      to: "contact@trippenergy.com",
      subject: "New programme updates subscriber",
      text: `New subscriber: ${email}`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[newsletter] Failed to send notification", error);
    return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 502 });
  }
}
