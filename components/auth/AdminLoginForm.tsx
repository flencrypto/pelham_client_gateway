"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Demo admin login form.
 * In this demonstration, any non-empty credentials are accepted.
 * Redirects to the admin dashboard on success.
 */
export function AdminLoginForm() {
  const router = useRouter();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState("");

  function handleFormSubmit(submitEvent: React.FormEvent<HTMLFormElement>) {
    submitEvent.preventDefault();
    setValidationError("");

    if (!emailValue.trim() || !passwordValue.trim()) {
      setValidationError("Please enter your email address and password.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/admin");
    }, 700);
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-zinc-900 p-8"
    >
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold text-white">Admin / Staff Login</h1>
        <p className="text-sm text-zinc-400">
          Access the full project management suite.
        </p>
      </div>

      {/* Demo banner */}
      <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-xs text-amber-300">
        <span className="font-semibold">Demo mode:</span> enter any email and
        password to continue.
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="admin-email"
          className="text-xs font-semibold uppercase tracking-wider text-zinc-400"
        >
          Email address
        </label>
        <input
          id="admin-email"
          type="email"
          autoComplete="email"
          placeholder="admin@pelham.co.uk"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          className="rounded-xl border border-white/10 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/30"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="admin-password"
          className="text-xs font-semibold uppercase tracking-wider text-zinc-400"
        >
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          className="rounded-xl border border-white/10 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/30"
        />
      </div>

      {validationError && (
        <p className="text-sm text-red-400">{validationError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Signing in…" : "Sign in to Admin"}
      </button>
    </form>
  );
}
