# Abraham Car Market

**Abraham Car Market** is a modern web application built with **Next.js** and **Drizzle ORM**, designed to provide a seamless platform for browsing, filtering, and managing car listings. The application features a responsive UI, secure admin access, and an intuitive user experience for car enthusiasts and sellers alike.

## Live Preview

Check out the live demo of the application here: [ Live Preview](https://car-marketplace-eight-jet.vercel.app/)

## Features

- **Dynamic Car Listings**:
  - Browse cars by type (e.g., SUV, Sedan, Electric, Hybrid) with a dedicated page for each category.
  - View detailed car listings with specifications, features, pricing, and a carousel of images.

- **Image Carousel for Listings**:
  - A responsive image carousel on the car listing detail page to showcase multiple car images with navigation buttons at the bottom.

- **Responsive Design**:
  - Optimized for all screen sizes, with adjustments for mobile screens .
  - Tailwind CSS ensures a consistent and modern design across devices.

- **Admin Access with Basic Authentication**:
  - Secure access to `/profile` and `/add-listing` routes using Basic Authentication.
 
- **Loading Animations**:
  - Smooth loading animations on pages that fetch car information using Next.js App Router’s `loading.js` feature.

- **Database Integration**:
  - Uses **Drizzle ORM** for efficient database queries and schema management.


- **Search and Filtering**:
  - Filter cars by category, type, and other attributes (e.g., year, mileage, transmission).

- **Contact Options**:
  - Direct links to contact the seller via phone or Telegram on the listing detail page.

## Tech Stack

- **Framework**: Next.js (App Router)
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL 
- **Styling**: Tailwind CSS
- **UI Components**: `shadcn/ui` 
- **Icons**: React Icons (`react-icons`)
- **Deployment**: Vercel
