import type en from "@/dictionaries/en.json";

type Props = {
  aboutDict: typeof en.about;
  servicesDict: typeof en.services;
};

export default function AboutServices({ aboutDict, servicesDict }: Props) {
  return (
    <>
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">
              {aboutDict.badge}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">{aboutDict.headline}</h2>
            <p className="text-gray-600 text-lg mb-4">{aboutDict.p1}</p>
            <p className="text-gray-600 text-lg">{aboutDict.p2}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {aboutDict.cards.map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-gray-800 font-medium text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">
              {servicesDict.badge}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">{servicesDict.headline}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesDict.items.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
