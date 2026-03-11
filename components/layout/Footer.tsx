import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#eadfce] bg-[#fff4e8]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-extrabold">Deep Learning Human</h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-[#5e5249]">
            אתר שמלווה תלמידי 5 יחידות מתמטיקה לא רק בחומר עצמו, אלא בדרך
            החכמה ללמוד אותו: להבין לעומק, לזכור לאורך זמן, ולבנות יכולת אמיתית.
          </p>
        </div>

        <div>
          <h4 className="text-base font-bold">ניווט מהיר</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#5e5249]">
            <li>
              <Link href="/" className="hover:text-[#d96c1f]">
                דף הבית
              </Link>
            </li>
            <li>
              <Link href="/strategies" className="hover:text-[#d96c1f]">
                אסטרטגיות למידה
              </Link>
            </li>
            <li>
              <Link href="/math-572" className="hover:text-[#d96c1f]">
                ליווי הקורס
              </Link>
            </li>
            <li>
              <Link href="/articles" className="hover:text-[#d96c1f]">
                מאמרים
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold">הבטחת המותג</h4>
          <p className="mt-3 text-sm leading-7 text-[#5e5249]">
            לא רק ללמוד יותר.
            <br />
            ללמוד נכון.
            <br />
            להבין באמת.
          </p>
        </div>
      </div>

      <div className="border-t border-[#eadfce] px-4 py-4 text-center text-sm text-[#7a6c62] sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Deep Learning Human. כל הזכויות שמורות.
      </div>
    </footer>
  );
}