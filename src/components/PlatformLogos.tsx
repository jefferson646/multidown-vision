const ShopeeLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M24 4C18.48 4 14 8.48 14 14h2c0-4.42 3.58-8 8-8s8 3.58 8 8h2c0-5.52-4.48-10-10-10z" fill="currentColor"/>
    <path d="M6 16a2 2 0 0 0-2 2.06l2.5 24A2 2 0 0 0 8.48 44h31.04a2 2 0 0 0 1.98-1.94L44 18.06A2 2 0 0 0 42 16H6z" fill="currentColor"/>
    <path d="M24 22c-4.97 0-9 3.13-9 7s4.03 7 9 7 9-3.13 9-7-4.03-7-9-7zm0 11.5c-3.59 0-6.5-2.01-6.5-4.5s2.91-4.5 6.5-4.5 6.5 2.01 6.5 4.5-2.91 4.5-6.5 4.5z" fill="white"/>
  </svg>
);

const AmazonLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M27.5 22c0-2.5-1.5-4-3.5-4-2.1 0-3.5 1.5-3.5 4v2c0 2.5 1.4 4 3.5 4s3.5-1.5 3.5-4v-2z" fill="none" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M10 30c0 0 6 6 14 6s14-6 14-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M34 30l4 2-1-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <text x="10" y="20" fill="currentColor" fontFamily="Arial" fontWeight="bold" fontSize="10">a</text>
  </svg>
);

const MercadoLivreLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15"/>
    <path d="M24 8c-4 6-12 10-12 18a12 12 0 0 0 24 0c0-8-8-12-12-18z" fill="none" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M16 28c0 0 3-4 8-4s8 4 8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M18 24c0 0 2-3 6-3s6 3 6 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

export { ShopeeLogo, AmazonLogo, MercadoLivreLogo };
