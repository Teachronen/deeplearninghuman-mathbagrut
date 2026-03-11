import Link from "next/link";

const strategies = [
  {
    title: "שליפה מהזיכרון",
    description:
      "ללמוד לא רק בקריאה חוזרת, אלא דרך ניסיון פעיל להיזכר, להסביר ולפתור.",
  },
  {
    title: "למידה מרווחת",
    description:
      "לחזור על החומר במרווחי זמן נכונים כדי לזכור טוב יותר לאורך זמן.",
  },
  {
    title: "ניתוח טעויות",
    description:
      "להפוך טעויות לכלי צמיחה: להבין למה טעיתי, ולא רק מה הייתה התשובה.",
  },
  {
    title: "תרגול מכוון",
    description:
      "לא לפתור עוד ועוד תרגילים באקראי, אלא לתרגל לפי מטרה ברורה.",
  },
];

const courseSteps = [
  {
    title: "לפני השיעור",
    text: "איך להיכנס לנושא חדש כך שהמוח יהיה מוכן להבין אותו באמת.",
  },
  {
    title: "בזמן הלמידה",
    text: "על מה לשים לב בזמן הצפייה בקורס כדי לא להישאר בלמידה שטחית.",
  },
  {
    title: "אחרי השיעור",
    text: "איך לתרגל, לחזור, ולבדוק אם באמת הגעת לשליטה.",
  },
];

export default function HomePage() {
  return (
    <div className="pb-16">
      <section className="grid gap-10 py-12 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-[#edd9c2] bg-white px-4 py-2 text-sm font-medium text-[#8a5a2b]">
            ליווי לקורס מתמטיקה 572 של קמפוס IL
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-[#2d241d] sm:text-5xl lg:text-6xl">
            ללמוד מתמטיקה
            <span className="block text-[#d96c1f]">כמו שלומדים חכם</span>
            ולא רק קשה
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5e5249]">
            Deep Learning Human הוא אתר שמלמד תלמידי 5 יחידות איך ללמוד נכון
            תוך כדי ההתקדמות בקורס של קמפוס IL — כדי להבין לעומק, לזכור לאורך
            זמן, ולבנות מיומנויות פתרון ברמה הגבוהה ביותר.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/math-572"
              className="rounded-2xl bg-[#d96c1f] px-6 py-3 text-base font-bold text-white transition hover:bg-[#b95815]"
            >
              התחל בליווי הקורס
            </Link>
            <Link
              href="/strategies"
              className="rounded-2xl border border-[#d8c6b1] bg-white px-6 py-3 text-base font-bold text-[#3b312a] transition hover:border-[#d96c1f] hover:text-[#d96c1f]"
            >
              גלה אסטרטגיות למידה
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#ecdcc7] bg-gradient-to-br from-[#fff7ef] to-[#fff1e1] p-8 shadow-sm">
          <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-[#d96c1f]">רעיון הליבה</p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#2d241d]">
              לא רק מה ללמוד.
              <br />
              גם איך ללמוד.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5e5249]">
              תלמידים רבים משקיעים שעות, אבל לא תמיד מגיעים להבנה עמוקה. האתר
              הזה משלים את קורס המתמטיקה בכך שהוא מלמד את אסטרטגיות הלמידה
              שמאפשרות להגיע לשליטה אמיתית.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl bg-[#fff7ef] px-4 py-3 text-sm text-[#4f433a]">
                להבין מושגים לעומק
              </div>
              <div className="rounded-2xl bg-[#fff7ef] px-4 py-3 text-sm text-[#4f433a]">
                לזכור חומר לאורך זמן
              </div>
              <div className="rounded-2xl bg-[#fff7ef] px-4 py-3 text-sm text-[#4f433a]">
                לשפר פתרון בעיות ברמה גבוהה
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#ecdcc7] bg-white p-8 shadow-sm">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-[#d96c1f]">איך זה עובד</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#2d241d]">
            לומדים בשני ערוצים במקביל
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#5e5249]">
            את המתמטיקה לומדים בקמפוס IL. את שיטת הלמידה לומדים כאן. השילוב הזה
            נועד לעזור לך לא רק לעבור את הבגרות, אלא ללמוד בצורה בוגרת, עצמאית
            ועמוקה יותר.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-[#fff7ef] p-5">
            <div className="mb-3 text-sm font-bold text-[#d96c1f]">שלב 1</div>
            <h3 className="text-xl font-bold">לומדים את החומר</h3>
            <p className="mt-2 text-sm leading-7 text-[#5e5249]">
              מתקדמים בשיעורי קמפוס IL לפי הנושא הנלמד.
            </p>
          </div>

          <div className="rounded-2xl bg-[#fff7ef] p-5">
            <div className="mb-3 text-sm font-bold text-[#d96c1f]">שלב 2</div>
            <h3 className="text-xl font-bold">לומדים איך ללמוד</h3>
            <p className="mt-2 text-sm leading-7 text-[#5e5249]">
              משתמשים באתר כדי להבין איך לזכור, איך לתרגל ואיך להעמיק.
            </p>
          </div>

          <div className="rounded-2xl bg-[#fff7ef] p-5">
            <div className="mb-3 text-sm font-bold text-[#d96c1f]">שלב 3</div>
            <h3 className="text-xl font-bold">מגיעים לשליטה</h3>
            <p className="mt-2 text-sm leading-7 text-[#5e5249]">
              בונים הבנה אמיתית, ביטחון, ויכולת לפתור שאלות ברמה גבוהה.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-[#d96c1f]">אסטרטגיות למידה</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#2d241d]">
            הכלים שיגרמו ללמידה שלך לעבוד
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#5e5249]">
            האתר יתמקד באסטרטגיות מבוססות חשיבה ולמידה עמוקה, ולא רק בטיפים
            שטחיים של "איך ללמוד למבחן".
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {strategies.map((strategy) => (
            <div
              key={strategy.title}
              className="rounded-[1.5rem] border border-[#ecdcc7] bg-white p-5 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#2d241d]">
                {strategy.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5e5249]">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/strategies"
            className="inline-flex rounded-2xl border border-[#d8c6b1] bg-white px-6 py-3 text-base font-bold text-[#3b312a] transition hover:border-[#d96c1f] hover:text-[#d96c1f]"
          >
            לכל אסטרטגיות הלמידה
          </Link>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#ecdcc7] bg-white p-8 shadow-sm">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-[#d96c1f]">ליווי הקורס</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#2d241d]">
            ליווי מותאם לקורס מתמטיקה 572
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#5e5249]">
            במקום אתר כללי על למידה, כאן תהיה התאמה ישירה למסלול שהסטודנט או
            התלמיד כבר עובר. לכל נושא בקורס יוצמדו המלצות ברורות: איך ללמוד,
            איך לתרגל, ואיך לבדוק הבנה.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {courseSteps.map((step) => (
            <div key={step.title} className="rounded-2xl bg-[#fff7ef] p-5">
              <h3 className="text-xl font-bold text-[#2d241d]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5e5249]">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/math-572"
            className="inline-flex rounded-2xl bg-[#d96c1f] px-6 py-3 text-base font-bold text-white transition hover:bg-[#b95815]"
          >
            לעמוד ליווי הקורס
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="grid gap-8 rounded-[2rem] border border-[#ecdcc7] bg-gradient-to-br from-[#fff2e5] to-[#fff8f2] p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold text-[#d96c1f]">על המומחיות</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#2d241d]">
              Deep Learning Human הוא גם מותג אישי
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#5e5249]">
              האתר נועד לא רק לעזור לתלמידים ללמוד טוב יותר, אלא גם לבסס מומחיות
              ברורה בתחום אסטרטגיות הלמידה: הבנה, זיכרון, מטה-למידה ופיתוח
              עצמאות לומדת.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#2d241d]">בהמשך יופיעו כאן</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5e5249]">
              <li>מאמרים מעמיקים על איך ללמוד מתמטיקה</li>
              <li>ליווי מסודר לפי נושאי הקורס</li>
              <li>מעבדת תרגול וניתוח טעויות</li>
              <li>תוכן שמחבר בין מחקר לבין למידה אמיתית בשטח</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}