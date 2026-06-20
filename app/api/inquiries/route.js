import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req) {
  try {
    const form = await req.json();

    const {
      name,
      phone,
      email,
      checkIn,
      checkOut,
      guests,
      villa,
      message,
    } = form;

    // Email to Natures Sweet Homes
    await resend.emails.send({
      from:
        "Natures Sweet Homes <onboarding@resend.dev>",

      to: ["naturesweethomes@gmail.com"],

      subject: `New Villa Inquiry - ${villa || "General Inquiry"}`,

      html: `
        <h2>New Villa Inquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Villa:</strong> ${villa}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Check-In:</strong> ${checkIn}</p>
        <p><strong>Check-Out:</strong> ${checkOut}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Auto reply to customer
    if (email) {
      await resend.emails.send({
        from:
          "Natures Sweet Homes <onboarding@resend.dev>",

        to: [email],

        subject:
          "Thank you for your inquiry - Natures Sweet Homes",

        html: `
          <h2>Thank You for Contacting Us</h2>

          <p>Dear ${name},</p>

          <p>
          Thank you for your inquiry with
          <strong>Natures Sweet Homes</strong>.
          </p>

          <p>
          We have received your request for
          <strong>${villa || "a villa booking"}</strong>.
          </p>

          <p>
          Our team will contact you shortly via
          phone or WhatsApp.
          </p>

          <br/>

          <p>
          Regards,<br/>
          Natures Sweet Homes<br/>
          www.naturesweethomes.com<br/>
          +91 8010368931
          </p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
