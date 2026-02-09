/** @format */

// post

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { id } = await request.json();
        const res = await fetch(`${process.env.API_URL}/quotes/delete`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });

        const result = await res.json();

        if (result.status) {
            return NextResponse.json({ message: "Quote deleted successfully" }, { status: 200 });
        }
        return NextResponse.json({ error: "Failed to delete quote" }, { status: 500 });
    } catch (error) {
        return NextResponse.json({ error: "An error occurred while deleting the quote" }, { status: 500 });
    }
}
