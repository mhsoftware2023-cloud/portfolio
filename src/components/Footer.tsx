import type en from "@/dictionaries/en.json";

type Props = { dict: typeof en.footer };

export default function Footer({ dict }: Props) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white font-semibold">mhsoftware</span>
        <p className="text-sm">
          © {new Date().getFullYear()} mhsoftware. {dict.rights}
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
