import type en from "@/dictionaries/en.json";

type Props = { dict: typeof en.testimonials };

export default function Testimonials({ dict }: Props) {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">
            {dict.badge}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">{dict.headline}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {dict.items.map((t) => (
            <blockquote
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col gap-6"
            >
              <p className="text-gray-600 leading-relaxed text-sm">&ldquo;{t.quote}&rdquo;</p>
              <footer className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
