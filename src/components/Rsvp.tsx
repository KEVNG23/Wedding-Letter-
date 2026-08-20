"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_LUXURY, invitation } from "@/lib/invitation-data";
import { Reveal } from "./Reveal";

type Status = "idle" | "sending" | "done" | "error";

const fieldClass =
  "w-full border border-[#7d4652] bg-[#5a2730]/60 px-4 py-3 text-[1.05rem] text-[#f7ecd9] outline-none transition-colors placeholder:text-[#c2a08f]/50 focus:border-[#e0c9a8]";

const labelClass =
  "block text-[0.68rem] tracking-[0.24em] text-[#e0c9a8] uppercase";

export function Rsvp() {
  const [attending, setAttending] = useState<boolean | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (attending === null || !name.trim() || status === "sending") return;

    setStatus("sending");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          attending,
          guests: Number(guests) || 1,
          phone,
          message,
        }),
      });

      setStatus(response.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="rsvp" className="bg-[#461c22]">
      <div className="relative h-[38svh] min-h-[220px] w-full overflow-hidden">
        <Image
          src="/assets/floral.jpg"
          alt=""
          fill
          quality={85}
          sizes="100vw"
          className="object-cover"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-[rgba(53,18,24,0.42)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#461c22]" />

        <Reveal className="relative flex h-full items-center justify-center">
          <h2 className="font-display text-[clamp(2.4rem,10vw,4.5rem)] tracking-[0.12em] text-[#f7ecd9] drop-shadow-[0_2px_20px_rgba(30,8,12,0.6)]">
            {invitation.rsvpTitle}
          </h2>
        </Reveal>
      </div>

      <div className="px-6 pb-24 sm:pb-28">
        <div className="mx-auto w-full max-w-[520px]">
          <Reveal>
            <p className="text-center text-[0.95rem] text-[#e0c9a8] italic">
              {invitation.rsvpDeadline}
            </p>
          </Reveal>

          <AnimatePresence mode="wait" initial={false}>
            {status === "done" ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE_LUXURY }}
                className="mt-10 border border-[#7d4652] px-8 py-14 text-center"
              >
                <p className="font-script text-[2.2rem] text-[#f7ecd9]">Cảm ơn bạn</p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-[#e0c9a8]">
                  {attending ? invitation.rsvpThanksYes : invitation.rsvpThanksNo}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={false}
                className="mt-10 space-y-8"
              >
                <div className="space-y-3">
                  <label htmlFor="rsvp-name" className={labelClass}>
                    {invitation.rsvpNameLabel}
                  </label>
                  <input
                    id="rsvp-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    maxLength={120}
                    className={fieldClass}
                  />
                </div>

                <div className="space-y-3">
                  <span className={labelClass}>{invitation.rsvpAttendingLabel}</span>

                  <div className="space-y-3">
                    {[
                      { value: true, label: invitation.rsvpYes },
                      { value: false, label: invitation.rsvpNo },
                    ].map((option) => {
                      const selected = attending === option.value;

                      return (
                        <button
                          key={String(option.value)}
                          type="button"
                          onClick={() => setAttending(option.value)}
                          aria-pressed={selected}
                          className={`w-full border px-4 py-4 text-left text-[0.78rem] tracking-[0.18em] uppercase transition-colors ${
                            selected
                              ? "border-[#e0c9a8] bg-[#e0c9a8] text-[#461c22]"
                              : "border-[#7d4652] bg-[#5a2730]/60 text-[#e5c9b8] hover:border-[#b98c78]"
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {attending === true && (
                    <motion.div
                      key="guests"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: EASE_LUXURY }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 pt-1">
                        <label htmlFor="rsvp-guests" className={labelClass}>
                          {invitation.rsvpGuestsLabel}
                        </label>
                        <input
                          id="rsvp-guests"
                          type="number"
                          min={1}
                          max={20}
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className={fieldClass}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-3">
                  <label htmlFor="rsvp-phone" className={labelClass}>
                    {invitation.rsvpPhoneLabel}
                  </label>
                  <input
                    id="rsvp-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={40}
                    className={fieldClass}
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="rsvp-message" className={labelClass}>
                    {invitation.rsvpMessageLabel}
                  </label>
                  <textarea
                    id="rsvp-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={1000}
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-center text-[0.95rem] text-[#f0b8a8]">
                    {invitation.rsvpError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={attending === null || !name.trim() || status === "sending"}
                  className="w-full bg-[#e0c9a8] px-6 py-4 text-[0.78rem] tracking-[0.28em] text-[#461c22] uppercase transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {status === "sending"
                    ? invitation.rsvpSubmitting
                    : invitation.rsvpSubmit}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
