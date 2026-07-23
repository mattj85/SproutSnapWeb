// Lightweight inline icons (stroke-based, inherit currentColor).
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24'
}

export const Camera = (p) => (
  <svg {...base} {...p}>
    <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13" r="3.2" />
  </svg>
)

export const Slider = (p) => (
  <svg {...base} {...p}>
    <path d="M4 8h10M4 16h6" />
    <circle cx="17" cy="8" r="2.4" />
    <circle cx="13" cy="16" r="2.4" />
    <path d="M19.4 16H20M4 8" />
    <path d="M15.4 16H20" />
  </svg>
)

export const Drop = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.2s6 6.4 6 10.4a6 6 0 0 1-12 0c0-4 6-10.4 6-10.4Z" />
    <path d="M9.5 13.5a2.6 2.6 0 0 0 2.5 2.6" />
  </svg>
)

export const Cloud = (p) => (
  <svg {...base} {...p}>
    <path d="M7 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 16 8.5a3.5 3.5 0 0 1 1 6.86" />
    <path d="M12 12v6m0 0-2-2m2 2 2-2" />
  </svg>
)

export const Lock = (p) => (
  <svg {...base} {...p}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    <circle cx="12" cy="15" r="1" />
  </svg>
)

export const Layers = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
    <path d="M3 12.5 12 17.5 21 12.5" />
    <path d="M3 16.5 12 21.5 21 16.5" />
  </svg>
)

export const Play = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M10 9.5v5l4-2.5-4-2.5Z" fill="currentColor" />
  </svg>
)

export const Infinity = (p) => (
  <svg {...base} {...p}>
    <path d="M7 9a3 3 0 1 0 0 6c2 0 3-1.5 5-3s3-3 5-3a3 3 0 1 1 0 6c-2 0-3-1.5-5-3s-3-3-5-3Z" />
  </svg>
)

export const Sparkle = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.5 13.6 9 19 10.6 13.6 12.2 12 17.7 10.4 12.2 5 10.6 10.4 9 12 3.5Z" />
    <path d="M18.5 4v3M20 5.5h-3" />
  </svg>
)

export const Apple = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M16.4 12.9c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1-.04 1.5-.7 2.8-.7 1.3 0 1.7.7 2.8.66 1.2-.02 1.9-1 2.6-2.05.8-1.2 1.2-2.3 1.2-2.4-.03-.01-2.3-.9-2.3-3.5Z" />
    <path d="M14.6 6.3c.6-.7 1-1.7.9-2.7-.8.03-1.9.55-2.5 1.25-.5.6-1 1.6-.9 2.6.9.07 1.8-.45 2.5-1.15Z" />
  </svg>
)

export const ArrowsLR = (p) => (
  <svg {...base} {...p}>
    <path d="M8 8 4 12l4 4M16 8l4 4-4 4M4 12h16" />
  </svg>
)

export const ArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Check = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12.5 10 17.5 19 6.5" />
  </svg>
)

export const Menu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Leaf = (p) => (
  <svg {...base} {...p}>
    <path d="M20 4s-9-1-14 4-3 12-3 12 7 2 12-3 5-13 5-13Z" />
    <path d="M6 18C10 12 14 9 18 7" />
  </svg>
)
