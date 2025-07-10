/**
 * Retrieves a list of characters from the characters.json file.
 * @returns {Promise<Object>} A promise that resolves to an object containing the characters data.
 */

import rootLayout from "@/data/rootLayout.json";
import { allowedOrigins } from "@/libs/configs/config.serverlist";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return NextResponse.json({ rootLayoutData: rootLayout.rootLayoutData });
}
