
import { pgTable,serial,text,integer,jsonb } from "drizzle-orm/pg-core";

export const Carlisting = pgTable("Carlisting", {
  id: serial("id").primaryKey(),
  listingTitle: text("listing_title").notNull(),
  tagline: text("tagline"),
  originalPrice: integer("original_price"),
  sellingPrice: integer("selling_price").notNull(),
  category: text("category").notNull(),
  condition: text("condition").notNull(),
  type: text("type").notNull(),
  make: text("make").notNull(),
  model: text("model"),
  year: integer("year").notNull(),
  driveType: text("drive_type").notNull(),
  transmission: text("transmission").notNull(),
  engineSize: text("engine_size"),
  cylinder: integer("cylinder"),
  color: text("color"),
  offerType: text("offer_type"),
  listingDescription: text("listing_description").notNull(),
  features: jsonb("features").notNull(),
  images: text("images").array().notNull(),
});