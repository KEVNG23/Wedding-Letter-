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
  "block text-[0.85rem] tracking-[0.08em] text-[#e0c9a8] mb-3";

export function Rsvp() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [guestGroup, setGuestGroup] = useState("");
  const [otherGuestGroup, setOtherGuestGroup] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [companions, setCompanions] = useState("0");
  const [otherCompanions, setOtherCompanions] = useState("");
  const [allergy, setAllergy] = useState("");
  const [vegetarian, setVegetarian] = useState<boolean | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !guestGroup || attending === null || vegetarian === null || status === "sending") return;

    setStatus("sending");

    try {
      const companionCount = companions === "Other" ? otherCompanions : companions;
      const finalGuestGroup = guestGroup === "Other" ? otherGuestGroup : guestGroup;

      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          guestGroup: finalGuestGroup,
          attending,
          companions: Number(companionCount) || 0,
          allergy,
          vegetarian,
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

      <div className="px-6 pb-24 pt-12 sm:pb-28">
        <div className="mx-auto w-full max-w-[620px]">
          <Reveal>
            <p className="text-center text-[1rem] leading-relaxed text-[#e0c9a8] mb-4">
              {invitation.rsvpIntro}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-center text-[0.95rem] leading-relaxed text-[#d4b89a] italic mb-4">
              {invitation.rsvpDeadline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-center text-[0.95rem] leading-relaxed text-[#e0c9a8] mb-10">
              {invitation.rsvpClosing}
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
                className="mt-10 space-y-7"
              >
                {/* Họ và Tên */}
                <div className="space-y-3">
                  <label htmlFor="rsvp-name" className={labelClass}>
                    {invitation.rsvpNameLabel} <span className="text-[#f0b8a8]">*</span>
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

                {/* Bạn thuộc nhóm khách */}
                <div className="space-y-3">
                  <label className={labelClass}>
                    {invitation.rsvpGuestGroupLabel} <span className="text-[#f0b8a8]">*</span>
                  </label>
                  <div className="space-y-2">
                    {invitation.rsvpGuestGroups.map((group) => (
                      <label
                        key={group}
                        className="flex items-center gap-3 cursor-pointer text-[#e0c9a8] hover:text-[#f7ecd9] transition-colors"
                      >
                        <input
                          type="radio"
                          name="guestGroup"
                          value={group}
                          checked={guestGroup === group}
                          onChange={(e) => setGuestGroup(e.target.value)}
                          required
                          className="w-4 h-4 accent-[#e0c9a8]"
                        />
                        <span className="text-[0.95rem]">{group}</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-3 cursor-pointer text-[#e0c9a8] hover:text-[#f7ecd9] transition-colors">
                      <input
                        type="radio"
                        name="guestGroup"
                        value="Other"
                        checked={guestGroup === "Other"}
                        onChange={(e) => setGuestGroup(e.target.value)}
                        required
                        className="w-4 h-4 accent-[#e0c9a8]"
                      />
                      <span className="text-[0.95rem]">Other:</span>
                    </label>
                    {guestGroup === "Other" && (
                      <input
                        type="text"
                        value={otherGuestGroup}
                        onChange={(e) => setOtherGuestGroup(e.target.value)}
                        placeholder="Vui lòng ghi rõ"
                        required
                        className={`${fieldClass} ml-7`}
                      />
                    )}
                  </div>
                </div>

                {/* Bạn có thể tham dự không */}
                <div className="space-y-3">
                  <label className={labelClass}>
                    {invitation.rsvpAttendingLabel} <span className="text-[#f0b8a8]">*</span>
                  </label>

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
                          className={`w-full border px-4 py-4 text-left text-[0.95rem] transition-colors ${
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

                {/* Ngoài bạn ra, có ai đi cùng */}
                <div className="space-y-3">
                  <label htmlFor="rsvp-companions" className={labelClass}>
                    {invitation.rsvpCompanionsLabel} <span className="text-[#f0b8a8]">*</span>
                  </label>
                  <div className="space-y-2">
                    {["0", "1", "2", "3", "4"].map((num) => (
                      <label
                        key={num}
                        className="flex items-center gap-3 cursor-pointer text-[#e0c9a8] hover:text-[#f7ecd9] transition-colors"
                      >
                        <input
                          type="radio"
                          name="companions"
                          value={num}
                          checked={companions === num}
                          onChange={(e) => setCompanions(e.target.value)}
                          required
                          className="w-4 h-4 accent-[#e0c9a8]"
                        />
                        <span className="text-[0.95rem]">{num}</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-3 cursor-pointer text-[#e0c9a8] hover:text-[#f7ecd9] transition-colors">
                      <input
                        type="radio"
                        name="companions"
                        value="Other"
                        checked={companions === "Other"}
                        onChange={(e) => setCompanions(e.target.value)}
                        required
                        className="w-4 h-4 accent-[#e0c9a8]"
                      />
                      <span className="text-[0.95rem]">Other:</span>
                    </label>
                    {companions === "Other" && (
                      <input
                        type="number"
                        value={otherCompanions}
                        onChange={(e) => setOtherCompanions(e.target.value)}
                        placeholder="Số người"
                        min="0"
                        required
                        className={`${fieldClass} ml-7`}
                      />
                    )}
                  </div>
                </div>

                {/* Dị ứng thực phẩm */}
                <div className="space-y-3">
                  <label htmlFor="rsvp-allergy" className={labelClass}>
                    {invitation.rsvpAllergyLabel} <span className="text-[#f0b8a8]">*</span>
                  </label>
                  <input
                    id="rsvp-allergy"
                    value={allergy}
                    onChange={(e) => setAllergy(e.target.value)}
                    placeholder="Nếu có, vui lòng ghi rõ"
                    required
                    className={fieldClass}
                  />
                </div>

                {/* Người ăn chay trường */}
                <div className="space-y-3">
                  <label className={labelClass}>
                    {invitation.rsvpVegetarianLabel} <span className="text-[#f0b8a8]">*</span>
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: true, label: invitation.rsvpVegetarianYes },
                      { value: false, label: invitation.rsvpVegetarianNo },
                    ].map((option) => (
                      <label
                        key={String(option.value)}
                        className="flex items-center gap-3 cursor-pointer text-[#e0c9a8] hover:text-[#f7ecd9] transition-colors"
                      >
                        <input
                          type="radio"
                          name="vegetarian"
                          value={String(option.value)}
                          checked={vegetarian === option.value}
                          onChange={() => setVegetarian(option.value)}
                          required
                          className="w-4 h-4 accent-[#e0c9a8]"
                        />
                        <span className="text-[0.95rem]">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-center text-[0.95rem] text-[#f0b8a8]">
                    {invitation.rsvpError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={
                    !name.trim() ||
                    !guestGroup ||
                    attending === null ||
                    vegetarian === null ||
                    status === "sending"
                  }
                  className="w-full bg-[#e0c9a8] px-6 py-4 text-[0.9rem] tracking-[0.18em] text-[#461c22] uppercase transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
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
