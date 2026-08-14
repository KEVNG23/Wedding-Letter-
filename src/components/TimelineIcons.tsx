import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Car(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M7 44h50" />
      <path d="M10 44V33l7-2.5 4.5-8A3.5 3.5 0 0 1 24.6 21h14.8a3.5 3.5 0 0 1 3.1 1.8L47 30.5 54 33v11" />
      <path d="M17 30.5h30M32 21v9.5" />
      <circle cx="19.5" cy="44" r="4.5" />
      <circle cx="44.5" cy="44" r="4.5" />
      <path d="M32 21v-5" />
      <path d="M32 12.5a2.4 2.4 0 1 1 0 3.5 2.4 2.4 0 1 1 0-3.5z" />
      <path d="M56 38c3 1.5 3 3.5 0 5" />
    </svg>
  );
}

function Rings(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="25" cy="40" r="13" />
      <circle cx="41" cy="40" r="13" />
      <path d="M41 27l-4.6-5.2L41 16l4.6 5.8z" />
      <path d="M36.4 21.8h9.2" />
    </svg>
  );
}

function Camera(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M8 22h10l4-6h20l4 6h10v26H8z" />
      <circle cx="32" cy="34" r="9" />
      <circle cx="32" cy="34" r="4" />
      <path d="M46 26h4" />
    </svg>
  );
}

function Cake(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M9 53h46" />
      <path d="M12 53V39h40v14M16 39V28h32v11M21 28V19h22v9" />
      <path d="M12 45q5 3 10 0t10 0 10 0 10 0" />
      <path d="M16 34.5q4 2.5 8 0t8 0 8 0 8 0" />
      <path d="M21 24.5q5.5 2.5 11 0t11 0" />
      <path d="M32 19v-4.5" />
      <path d="M32 10.5c1.6 1.2 1.6 3 0 4-1.6-1-1.6-2.8 0-4z" />
    </svg>
  );
}

function Cheers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 12h14l-3 16a4 4 0 0 1-8 0z" />
      <path d="M19 32v16M13 50h12" />
      <path d="M38 12h14l-3 16a4 4 0 0 1-8 0z" />
      <path d="M45 32v16M39 50h12" />
      <path d="M30 16l4 4M34 16l-4 4" />
    </svg>
  );
}

function Tea(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14 24h30v12a15 15 0 0 1-30 0z" />
      <path d="M44 27h4a6 6 0 0 1 0 12h-4" />
      <path d="M10 52h40" />
      <path d="M24 16c0-3 3-3 3-6M32 16c0-3 3-3 3-6M40 16c0-3 3-3 3-6" />
    </svg>
  );
}

function Heart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M32 50S12 38 12 26a10 10 0 0 1 20-4 10 10 0 0 1 20 4c0 12-20 24-20 24z" />
    </svg>
  );
}

export const TIMELINE_ICONS = {
  car: Car,
  rings: Rings,
  camera: Camera,
  cake: Cake,
  cheers: Cheers,
  tea: Tea,
  heart: Heart,
} as const;

export type TimelineIconName = keyof typeof TIMELINE_ICONS;
