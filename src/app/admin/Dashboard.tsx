"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { RsvpEntry } from "@/lib/rsvp-store";
import { logout } from "./actions";

type Filter = "all" | "yes" | "no";

type Props = {
  entries: RsvpEntry[];
  summary: {
    responses: number;
    attending: number;
    declined: number;
    headcount: number;
  };
};

const dateFormatter = new Intl.DateTimeFormat("vi-VN", {
  day: "2-digit",
  month: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

function toCsv(entries: RsvpEntry[]): string {
  const escape = (v: string | number | boolean) =>
    `"${String(v).replace(/"/g, '""')}"`;

  const header = ["Tên", "Nhóm khách", "Tham dự", "Số người đi cùng", "Dị ứng", "Ăn chay", "Thời gian"];

  const rows = entries.map((e) =>
    [
      e.name,
      e.guestGroup,
      e.attending ? "Có" : "Không",
      e.companions,
      e.allergy,
      e.vegetarian ? "Có" : "Không",
      e.createdAt,
    ]
      .map(escape)
      .join(","),
  );

  return "\uFEFF" + [header.map(escape).join(","), ...rows].join("\n");
}

export function Dashboard({ entries, summary }: Props) {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("all");

  // Keep the numbers fresh while the page sits open on a phone.
  useEffect(() => {
    const id = setInterval(() => router.refresh(), 30_000);
    return () => clearInterval(id);
  }, [router]);

  const visible = useMemo(() => {
    if (filter === "yes") return entries.filter((e) => e.attending);
    if (filter === "no") return entries.filter((e) => !e.attending);
    return entries;
  }, [entries, filter]);

  function downloadCsv() {
    const blob = new Blob([toCsv(entries)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "rsvp-le-thanh-hon.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  const stats = [
    { label: "Phản hồi", value: summary.responses },
    { label: "Sẽ đến", value: summary.attending },
    { label: "Không đến", value: summary.declined },
    { label: "Tổng số khách", value: summary.headcount },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl text-[#f7ecd9] sm:text-3xl">
            Danh sách khách mời
          </h1>
          <p className="mt-1 text-[0.9rem] text-[#c9ab8a]">
            Lễ Thành Hôn · Chủ Nhật 17.01.2027
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => router.refresh()}
            className="border border-[#7d4652] px-4 py-2 text-[0.7rem] tracking-[0.16em] text-[#e0c9a8] uppercase transition-colors hover:border-[#e0c9a8]"
          >
            Làm mới
          </button>
          <button
            type="button"
            onClick={downloadCsv}
            className="border border-[#7d4652] px-4 py-2 text-[0.7rem] tracking-[0.16em] text-[#e0c9a8] uppercase transition-colors hover:border-[#e0c9a8]"
          >
            Tải CSV
          </button>
          <button
            type="button"
            onClick={() => void logout()}
            className="border border-transparent px-3 py-2 text-[0.7rem] tracking-[0.16em] text-[#a98a72] uppercase transition-colors hover:text-[#e0c9a8]"
          >
            Thoát
          </button>
        </div>
      </header>

      <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-[#7d4652] px-5 py-6">
            <dt className="text-[0.66rem] tracking-[0.2em] text-[#c9ab8a] uppercase">
              {stat.label}
            </dt>
            <dd className="font-display mt-2 text-3xl text-[#f7ecd9]">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex gap-2">
        {(
          [
            ["all", "Tất cả"],
            ["yes", "Sẽ đến"],
            ["no", "Không đến"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`px-4 py-2 text-[0.7rem] tracking-[0.16em] uppercase transition-colors ${
              filter === value
                ? "bg-[#e0c9a8] text-[#461c22]"
                : "border border-[#7d4652] text-[#e0c9a8] hover:border-[#e0c9a8]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-center text-[#c9ab8a] italic">
          Chưa có phản hồi nào.
        </p>
      ) : (
        <ul className="mt-6 space-y-3">
          {visible.map((entry) => (
            <li
              key={entry.id}
              className="border border-[#7d4652] px-5 py-4 transition-colors hover:border-[#a06b6b]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-[1.15rem] text-[#f7ecd9]">{entry.name}</p>
                <span
                  className={`text-[0.66rem] tracking-[0.18em] uppercase ${
                    entry.attending ? "text-[#a7c9a0]" : "text-[#d99a9a]"
                  }`}
                >
                  {entry.attending ? `Sẽ đến · ${entry.companions + 1} người` : "Không đến"}
                </span>
              </div>

              {entry.guestGroup && (
                <p className="mt-1 text-[0.85rem] text-[#c9ab8a]">
                  <span className="text-[#a98a72]">Nhóm:</span> {entry.guestGroup}
                </p>
              )}

              {entry.companions > 0 && (
                <p className="mt-1 text-[0.85rem] text-[#c9ab8a]">
                  <span className="text-[#a98a72]">Số người đi cùng:</span> {entry.companions}
                </p>
              )}

              {entry.allergy && (
                <p className="mt-1 text-[0.85rem] text-[#e8b8a0]">
                  <span className="text-[#d99a9a]">Dị ứng:</span> {entry.allergy}
                </p>
              )}

              {entry.vegetarian && (
                <p className="mt-1 text-[0.85rem] text-[#a7c9a0]">
                  Ăn chay trường
                </p>
              )}

              <p className="mt-2 text-[0.7rem] tracking-[0.1em] text-[#a98a72]">
                {dateFormatter.format(new Date(entry.createdAt))}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
