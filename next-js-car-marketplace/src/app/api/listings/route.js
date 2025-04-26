import { db } from "../../../../configs/index";
import { Carlisting } from "../../../../configs/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const listings = await db.select().from(Carlisting);
    return NextResponse.json({ data: listings }, { status: 200 });
  } catch (error) {
    console.error("Error fetching listings:", error);
    return NextResponse.json({ error: "Failed to fetch listings" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const listingData = await request.json();
    const result = await db.insert(Carlisting).values(listingData).returning();
    return NextResponse.json(
      { message: "Listing created successfully", data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving listing:", error);
    return NextResponse.json(
      { error: "Failed to save listing" },
      { status: 500 }
    );
  }
}