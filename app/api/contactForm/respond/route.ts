/** @format */

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { id } = await request.json();

        const res = await fetch(`${process.env.API_URL}/contactForm/respond`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ submissionId: id }),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to mark message as responded" }, { status: 500 });
    }
}
