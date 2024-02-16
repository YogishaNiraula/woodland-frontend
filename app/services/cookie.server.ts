import { createCookieSessionStorage, redirect } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("Missing SESSION_SECRET environment variable.");

export const cookieSession = createCookieSessionStorage({
  cookie: {
    name: "woodland-session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 604_800, // one week
    httpOnly: true,
  },
});

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await cookieSession.getSession();
  session.set("user", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await cookieSession.commitSession(session),
    },
  });
}
