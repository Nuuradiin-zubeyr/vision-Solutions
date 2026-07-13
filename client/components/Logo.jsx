export default function Logo({ className = "w-9 h-9", uid = "vs" }) {
  const g = `vsGrad-${uid}`;
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vision Solutions Limited"
      className={className}
    >
      <defs>
        <linearGradient id={g} x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E86C4" />
          <stop offset="1" stopColor="#8DC63F" />
        </linearGradient>
      </defs>
      <path
        d="M32 3 57 17.5 57 46.5 32 61 7 46.5 7 17.5Z"
        stroke={`url(#${g})`}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M23 21 34.5 32 23 43"
        stroke="#1E86C4"
        strokeWidth="4.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 21 43.5 32 32 43"
        stroke="#8DC63F"
        strokeWidth="4.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
