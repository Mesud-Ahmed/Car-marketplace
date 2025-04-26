import { db } from "../../../../../configs";
import { Carlisting } from "../../../../../configs/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const listing = await db
      .select()
      .from(Carlisting)
      .where(eq(Carlisting.id, parseInt(id)))
      .limit(1);

    if (listing.length === 0) {
      return NextResponse.json({ error: "Listing not found" }, { status: 404 });
    }

    return NextResponse.json({ data: listing[0] }, { status: 200 });
  } catch (error) {
    console.error("Error fetching listing:", error);
    return NextResponse.json({ error: "Failed to fetch listing" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const listingData = await request.json();

    const result = await db
      .update(Carlisting)
      .set(listingData)
      .where(eq(Carlisting.id, parseInt(id)))
      .returning();

    if (result.length === 0) {
      return NextResponse.json({ error: "Listing not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Listing updated successfully", data: result[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating listing:", error);
    return NextResponse.json({ error: "Failed to update listing" }, { status: 500 });
  }
}