import type { Metadata, Viewport } from "next";
import { displayFont, scriptFont, serifFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lễ Thành Hôn — Annie & Dũng",
  description:
    "Thiệp mời lễ thành hôn của Nguyễn Thị Thanh Tuyền (Annie) & Nguyễn Trí Dũng — Chủ Nhật 17.01.2027",
  openGraph: {
    title: "Lễ Thành Hôn — Annie & Dũng",
    description: "Chủ Nhật 17.01.2027 — Trân trọng kính mời",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#461c22",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={`${serifFont.variable} ${displayFont.variable} ${scriptFont.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
