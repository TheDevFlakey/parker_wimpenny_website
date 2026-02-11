/** @format */

// get

import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch(`${process.env.API_URL}/quotes/list`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await res.json();

        console.log("Fetched quotes data:", result);

        if (result.status) {
            return NextResponse.json(result.quotes, { status: 200 });
        }

        return NextResponse.json({ error: "Failed to fetch quotes" }, { status: 500 });
    } catch (error) {
        return NextResponse.json({ error: "An error occurred while fetching quotes" }, { status: 500 });
    }
}
