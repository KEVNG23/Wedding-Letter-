"use client";

import { useActionState } from "react";
import { login } from "./actions";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, {});

  return (
    <form
      action={formAction}
      className="mx-auto mt-24 w-full max-w-sm border border-[#7d4652] p-8"
    >
      <h1 className="font-display text-2xl text-[#f7ecd9]">Quản lý RSVP</h1>
      <p className="mt-2 text-[0.9rem] text-[#c9ab8a]">
        Nhập mật khẩu để xem danh sách khách mời.
      </p>

      <input
        type="password"
        name="password"
        autoFocus
        required
        placeholder="Mật khẩu"
        className="mt-6 w-full border border-[#7d4652] bg-[#5a2730]/60 px-4 py-3 text-[#f7ecd9] outline-none placeholder:text-[#c2a08f]/50 focus:border-[#e0c9a8]"
      />

      {state.error && (
        <p className="mt-3 text-[0.9rem] text-[#f0b8a8]">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full bg-[#e0c9a8] px-6 py-3 text-[0.75rem] tracking-[0.24em] text-[#461c22] uppercase disabled:opacity-50"
      >
        {pending ? "Đang kiểm tra…" : "Đăng nhập"}
      </button>
    </form>
  );
}
