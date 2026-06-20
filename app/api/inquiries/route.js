
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      name,
      phone,
      email,
      checkIn,
      checkOut,
      guests,
      villa,
      message,
    } = data;

    await resend.emails.send({
      from: "Natures Sweet Homes <onboarding@resend.dev>",
      to: ["naturesweethomes@gmail.com"],
      subject: `New Villa Inquiry - ${villa || "General Inquiry"}`,
      html: `
        <h2>New Inquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Villa:</strong> ${villa}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Check In:</strong> ${checkIn}</p>
        <p><strong>Check Out:</strong> ${checkOut}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

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
