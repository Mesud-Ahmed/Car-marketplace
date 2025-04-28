import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.pathname;

  if (url.startsWith("/profile") || url.startsWith("/add-listing")) {
    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Restricted Area"',
        },
      });
    }

    const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
      .toString()
      .split(":");

    const OWNER_USERNAME = process.env.OWNER_USERNAME ;
    const OWNER_PASSWORD = process.env.OWNER_PASSWORD ;

    if (username !== OWNER_USERNAME || password !== OWNER_PASSWORD) {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Restricted Area"',
        },
      });
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/add-listing/:path*"],
};