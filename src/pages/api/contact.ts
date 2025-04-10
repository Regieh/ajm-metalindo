import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY); // Ensure you set this in your .env file

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  // Extract form values correctly
  const firstName = formData.get("firstName") as string | null;
  const lastName = formData.get("lastName") as string | null;
  const email = formData.get("email") as string | null;
  const phoneNumber = formData.get("number") as string | null;
  const message = formData.get("message") as string | null;

  // Validate required fields
  if (!email || !message) {
    return new Response(JSON.stringify({ error: "Email and message are required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Send email using Resend
    const response = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use a verified domain later
      to: 'fernando.khorasani@gmail.com', // Your personal email to receive form submissions
      subject: `You have been contacted from ${firstName ?? "Unknown"}`,
      html: `
        <p><strong>Name:</strong> ${firstName ?? ""} ${lastName ?? ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber ?? "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br/>
        <p>Best regards,<br/>${firstName ?? ""} ${lastName ?? ""}</p>
      `,
    });

    // Check for errors
    if (response.error) {
      throw new Error(response.error.message);
    }

    // Redirect back to the previous page
    return new Response(null, {
      status: 303,
      headers: {
        Location: request.headers.get("Referer") || "/", // Redirect to previous page or home if unavailable
      },
    });

  } catch (error) {
    console.error("Email sending failed:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};