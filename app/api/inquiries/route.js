import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // 1. Email to Natures Sweet Homes (Admin)
    const { error: adminError } = await resend.emails.send({
      /
      // If not yet verified, temporarily revert to "Natures Sweet Homes <onboarding@resend.dev>"
      from: "Natures Sweet Homes <onboarding@resend.dev>",
      to: ["naturesweethomes@gmail.com"],
      subject: `New Villa Inquiry - ${villa || "General Inquiry"}`,
      html: `
        <h2>🏡 New Villa Inquiry Received</h2>
        <hr/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not Provided"}</p>
        <p><strong>Villa:</strong> ${villa || "General Inquiry"}</p>
        <p><strong>Guests:</strong> ${guests || "-"}</p>
        <p><strong>Check-In:</strong> ${checkIn || "-"}</p>
        <p><strong>Check-Out:</strong> ${checkOut || "-"}</p>
        <p>
          <strong>Message:</strong><br/>
          ${message || "-"}
        </p>
        <hr/>
        <p>
          Website: https://www.naturesweethomes.com
        </p>
      `,
    });

    // Handle Admin Email Error
    if (adminError) {
      console.error("Failed to send admin email:", adminError);
      return NextResponse.json(
        { success: false, error: adminError },
        { status: 500 }
      );
    }

    // 2. Auto-reply to customer
    if (email) {
      const { error: userError } = await resend.emails.send({
        from: "Natures Sweet Homes <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for your inquiry - Natures Sweet Homes",
        html: `
          <h2>Thank You for Contacting Natures Sweet Homes 🏡</h2>
          <p>Dear ${name},</p>
          <p>
            Thank you for your inquiry regarding
            <strong>${villa || "our villas"}</strong>.
          </p>
          <p>
            We have successfully received your request and
            our team will contact you shortly via phone
            or WhatsApp.
          </p>
          <p>
            For immediate assistance, you may also contact us:
          </p>
          <p>
            📞 +91 8010368931<br/>
            📧 naturesweethomes@gmail.com<br/>
            🌐 https://www.naturesweethomes.com
          </p>
          <br/>
          <p>
            Regards,<br/>
            <strong>Natures Sweet Homes</strong><br/>
            Your Comfort, Our Priority
          </p>
        `,
      });

      // Handle User Email Error
      if (userError) {
        console.error("Failed to send auto-reply to user:", userError);
        return NextResponse.json(
          { success: false, error: userError },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
    });
    
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
