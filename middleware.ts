import type { NextRequest } from "next/server";
import { MiddlewareRequest } from "@netlify/next";
// This doesn't work with app dir?
export async function middleware(nextRequest: NextRequest) {
  return;
  const url = new URL(nextRequest.url);
  const { pathname } = url;
  if (pathname !== "/") return;

  const request = new MiddlewareRequest(nextRequest);
  const response = await request.next();
  const message = `This was static but has been transformed in ${request.geo.city}`;

  return response.replaceText("#message", message);
}
