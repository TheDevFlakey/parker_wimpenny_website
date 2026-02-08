/** @format */

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        const res = await fetch(`${process.env.API_URL}/newsletter/subscribed`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        const result = await res.json();

        if (result.status) {
            return NextResponse.json({ message: "✅ Thank you for subscribing!", status: true }, { status: 200 });
        } else {
            return NextResponse.json({ message: "⚠️ You are already subscribed!", status: false }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Subscription failed." }, { status: 500 });
    }
}
