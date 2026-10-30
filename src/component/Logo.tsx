const Logo = ({ className = '' }: { className?: string }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    {/* T-shaped node mark, from the Techburster logo */}
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
      <rect width="32" height="32" rx="8" className="fill-metal" />
      <path d="M8 10h16M16 10v13" stroke="#0c0d0e" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="8" cy="10" r="2.6" fill="#0c0d0e" />
      <circle cx="24" cy="10" r="2.6" fill="#0c0d0e" />
      <circle cx="16" cy="23" r="2.6" className="fill-signal" />
    </svg>
    <span className="text-lg font-bold tracking-tight text-fg">Techburster</span>
  </span>
);

export default Logo;
