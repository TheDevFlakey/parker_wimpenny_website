/** @format */

// post

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { id, name, email, phone_number, message, createdAt } = await request.json();

        if (!id) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const res = await fetch(`${process.env.API_URL}/quotes/edit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, name, email, phone_number, message }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            return NextResponse.json({ error: errorData.error || "Failed to update quote" }, { status: res.status });
        }

        return NextResponse.json({ message: "Quote updated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error updating quote:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
