/** @format */

// post

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, phone_number, message } = await request.json();

        const res = await fetch(`${process.env.API_URL}/quotes/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone_number, message }),
        });

        if (!res.ok) {
            return NextResponse.json({ error: "Failed to create quote" }, { status: 400 });
        }

        return NextResponse.json({ message: "Quote created successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}
