"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { AUTH_COOKIE, adminPassword, tokenFor } from "./auth";

export async function login(
  _prevState: { error?: string },
  formData: FormData,
): Promise<{ error?: string }> {
  const password = String(formData.get("password") ?? "");

  if (password !== adminPassword()) {
    return { error: "Mật khẩu không đúng." };
  }

  const store = await cookies();
  store.set(AUTH_COOKIE, tokenFor(password), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 60 * 60 * 24 * 30,
  });

  revalidatePath("/admin");
  return {};
}

export async function logout(): Promise<void> {
  const store = await cookies();
  store.delete({ name: AUTH_COOKIE, path: "/admin" });
  revalidatePath("/admin");
}
