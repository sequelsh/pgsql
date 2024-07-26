export default function SettingsIcon({ size = 24 }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M11 21v-6h2v2h8v2h-8v2zm-8-2v-2h6v2zm4-4v-2H3v-2h4V9h2v6zm4-2v-2h10v2zm4-4V3h2v2h4v2h-4v2zM3 7V5h10v2z"
      />
    </svg>
  );
}
