import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "דף הבית" },
  { href: "/strategies", label: "אסטרטגיות למידה" },
  { href: "/math-572", label: "ליווי הקורס" },
  { href: "/practice", label: "מעבדת תרגול" },
  { href: "/articles", label: "מאמרים" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "יצירת קשר" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfce] bg-[#fffaf4]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Deep Learning Human Logo"
            width={52}
            height={52}
            className="object-contain"
            className="rounded-xl"
            />
          <div>
            <div className="text-lg font-extrabold tracking-tight">
              Deep Learning Human
            </div>
            <div className="text-sm text-[#6f6258]">
              לומדים איך ללמוד מתמטיקה
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#4b413a] transition hover:text-[#d96c1f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/math-572"
          className="rounded-xl bg-[#d96c1f] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#b95815]"
        >
          התחל כאן
        </Link>
      </div>

      <div className="border-t border-[#f0e7dc] lg:hidden">
        <nav className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-3 text-sm sm:px-6 lg:px-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[#4b413a] transition hover:text-[#d96c1f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}