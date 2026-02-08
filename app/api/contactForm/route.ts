/** @format */

import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch(`${process.env.API_URL}/contactForm/submissions`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        return NextResponse.json(data.submissions, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching contact form data" }, { status: 500 });
    }
}
