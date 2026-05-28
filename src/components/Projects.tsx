import type en from "@/dictionaries/en.json";

type Props = { dict: typeof en.projects };

// One SVG illustration per project, ordered to match the items array
const illustrations = [
  // E-commerce: shopping bag + price tag
  <svg key="ecom" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="160" fill="#f3f4f6"/>
    <rect x="110" y="30" width="100" height="90" rx="8" fill="#e5e7eb"/>
    <path d="M130 30 Q130 15 160 15 Q190 15 190 30" stroke="#9ca3af" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <rect x="130" y="70" width="60" height="8" rx="4" fill="#9ca3af"/>
    <rect x="140" y="86" width="40" height="6" rx="3" fill="#d1d5db"/>
    <circle cx="220" cy="50" r="22" fill="#e5e7eb"/>
    <rect x="210" y="48" width="20" height="4" rx="2" fill="#9ca3af"/>
    <rect x="218" y="40" width="4" height="20" rx="2" fill="#9ca3af"/>
  </svg>,

  // Analytics: bar chart + line
  <svg key="analytics" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="160" fill="#f3f4f6"/>
    <rect x="60" y="90" width="28" height="45" rx="4" fill="#d1d5db"/>
    <rect x="100" y="65" width="28" height="70" rx="4" fill="#9ca3af"/>
    <rect x="140" y="45" width="28" height="90" rx="4" fill="#6b7280"/>
    <rect x="180" y="70" width="28" height="65" rx="4" fill="#9ca3af"/>
    <rect x="220" y="50" width="28" height="85" rx="4" fill="#d1d5db"/>
    <polyline points="74,88 114,63 154,43 194,68 234,48" stroke="#374151" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="74" cy="88" r="4" fill="#374151"/>
    <circle cx="114" cy="63" r="4" fill="#374151"/>
    <circle cx="154" cy="43" r="4" fill="#374151"/>
    <circle cx="194" cy="68" r="4" fill="#374151"/>
    <circle cx="234" cy="48" r="4" fill="#374151"/>
  </svg>,

  // Mobile delivery: phone + location pin
  <svg key="mobile" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="160" fill="#f3f4f6"/>
    <rect x="120" y="20" width="80" height="120" rx="12" fill="#e5e7eb"/>
    <rect x="128" y="35" width="64" height="75" rx="4" fill="#d1d5db"/>
    <circle cx="160" cy="125" r="5" fill="#9ca3af"/>
    <circle cx="160" cy="65" r="18" fill="#9ca3af"/>
    <path d="M160 83 Q145 95 145 100" stroke="#9ca3af" strokeWidth="2" fill="none"/>
    <path d="M160 83 Q175 95 175 100" stroke="#9ca3af" strokeWidth="2" fill="none"/>
    <circle cx="160" cy="65" r="7" fill="#f3f4f6"/>
    <circle cx="220" cy="40" r="16" fill="#e5e7eb"/>
    <path d="M220 30 C214 30 210 34 210 39 C210 46 220 54 220 54 C220 54 230 46 230 39 C230 34 226 30 220 30Z" fill="#9ca3af"/>
    <circle cx="220" cy="39" r="4" fill="#f3f4f6"/>
  </svg>,

  // Healthcare: cross + pulse line
  <svg key="health" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="160" fill="#f3f4f6"/>
    <rect x="130" y="40" width="60" height="60" rx="10" fill="#e5e7eb"/>
    <rect x="152" y="50" width="16" height="40" rx="4" fill="#9ca3af"/>
    <rect x="140" y="62" width="40" height="16" rx="4" fill="#9ca3af"/>
    <polyline points="50,100 80,100 95,70 110,130 125,85 140,100 270,100" stroke="#6b7280" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,

  // Real estate: house
  <svg key="realestate" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="160" fill="#f3f4f6"/>
    <polygon points="160,25 90,80 230,80" fill="#d1d5db"/>
    <rect x="100" y="80" width="120" height="60" fill="#e5e7eb"/>
    <rect x="140" y="100" width="40" height="40" rx="2" fill="#d1d5db"/>
    <rect x="108" y="90" width="28" height="24" rx="2" fill="#d1d5db"/>
    <rect x="184" y="90" width="28" height="24" rx="2" fill="#d1d5db"/>
    <rect x="152" y="55" width="16" height="20" fill="#9ca3af"/>
  </svg>,

  // DevOps: terminal window
  <svg key="devops" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="160" fill="#f3f4f6"/>
    <rect x="60" y="30" width="200" height="110" rx="8" fill="#1f2937"/>
    <rect x="60" y="30" width="200" height="24" rx="8" fill="#374151"/>
    <circle cx="80" cy="42" r="5" fill="#6b7280"/>
    <circle cx="96" cy="42" r="5" fill="#6b7280"/>
    <circle cx="112" cy="42" r="5" fill="#6b7280"/>
    <text x="78" y="76" fontFamily="monospace" fontSize="11" fill="#6ee7b7">$ npm run deploy</text>
    <text x="78" y="94" fontFamily="monospace" fontSize="11" fill="#9ca3af">✓ Build complete</text>
    <text x="78" y="112" fontFamily="monospace" fontSize="11" fill="#9ca3af">✓ Tests passed</text>
    <text x="78" y="130" fontFamily="monospace" fontSize="11" fill="#6ee7b7">▌</text>
  </svg>,
];

export default function Projects({ dict }: Props) {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">
            {dict.badge}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">{dict.headline}</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">{dict.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.items.map((p, i) => (
            <article
              key={p.title}
              className="flex flex-col bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-44 w-full">
                {illustrations[i]}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
