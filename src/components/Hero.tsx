import type en from "@/dictionaries/en.json";

type Props = { dict: typeof en.hero };

export default function Hero({ dict }: Props) {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-gray-400 text-sm font-semibold tracking-widest uppercase mb-4">
            {dict.badge}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            {dict.headline}{" "}
            <span className="text-gray-300">{dict.headlineAccent}</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">{dict.description}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-200 transition-colors"
            >
              {dict.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/50 font-medium transition-colors"
            >
              {dict.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {dict.stats.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-4xl font-bold text-white">{s.value}</p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
