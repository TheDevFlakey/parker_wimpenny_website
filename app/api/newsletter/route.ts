/** @format */

// get

import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const res = await fetch(`${process.env.API_URL}/newsletter/subscribers`);

        const result = await res.json();

        return NextResponse.json(result.subscribers);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch newsletter subscribers" }, { status: 500 });
    }
};
