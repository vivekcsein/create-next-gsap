/**
 * Retrieves a list of characters from the characters.json file.
 * @returns {Promise<Object>} A promise that resolves to an object containing the characters data.
 */

import { type NextRequest, NextResponse } from "next/server";
import layout from "@/data/layout.json";

const allowedOrigins = ["http://localhost:3000"];

export async function GET(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return NextResponse.json({ layout: layout.layout });
}
