import { NextResponse } from "next/server";
import { Resend } from "resend";
import { routeForEnquiry } from "@/lib/email-routing";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, organisation, email, country, enquiryType, message, source } = body as Record<
    string,
    string
  >;

  if (!name || !organisation || !email?.includes("@") || !country || !enquiryType || !message) {
    return NextResponse.json({ error: "Missing or invalid required fields." }, { status: 400 });
  }
  if (message.trim().split(/\s+/).length > 500) {
    return NextResponse.json({ error: "Message exceeds 500 words." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY is not set. Skipping email delivery. Add it in your hosting provider's environment variables to enable the contact form."
    );
    return NextResponse.json(
      {
        error:
          "Email delivery is not yet configured on this site. Please email us directly instead.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.EMAIL_FROM ?? "Tripp Energy and Mobility <onboarding@resend.dev>";
  const to = routeForEnquiry(enquiryType);

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry: ${enquiryType} — ${organisation}`,
      text: [
        `Name: ${name}`,
        `Organisation: ${organisation}`,
        `Email: ${email}`,
        `Country: ${country}`,
        `Enquiry type: ${enquiryType}`,
        source ? `Heard about us via: ${source}` : null,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    await resend.emails.send({
      from,
      to: email,
      subject: "We've received your message, Tripp Energy and Mobility",
      text: `Hi ${name},\n\nThank you for reaching out to Tripp Energy and Mobility. We've received your ${enquiryType.toLowerCase()} enquiry and will respond within 48 business hours.\n\nBest,\nTripp Energy and Mobility`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Failed to send email", error);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 502 });
  }
}
