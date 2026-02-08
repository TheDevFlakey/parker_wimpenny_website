/** @format */

// post

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();
        console.log("Received contact form submission:", { name, email, phone, message });

        await fetch(`${process.env.API_URL}/contactForm/formSubmitted`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone_number: phone, message }),
        });

        return NextResponse.json({ success: true, message: "Form submitted successfully!" });
    } catch (error) {
        console.error("Error processing contact form submission:", error);
        return NextResponse.json({ success: false, message: "Failed to submit form." }, { status: 500 });
    }
}
