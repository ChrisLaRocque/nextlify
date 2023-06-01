/* eslint-disable import/no-anonymous-default-export */
import type { Config, Context, Request } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const { geo } = context;
  return Response.json(geo);
};
export const config: Config = { path: "/geo" };
