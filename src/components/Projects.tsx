import type en from "@/dictionaries/en.json";

type Props = { dict: typeof en.projects };

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
          {dict.items.map((p) => (
            <article
              key={p.title}
              className="flex flex-col bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 text-4xl">
                💻
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
