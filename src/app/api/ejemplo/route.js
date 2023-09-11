import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("soy GET");
}
