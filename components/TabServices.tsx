import React from 'react';
import { ClipboardList, Scale, Search, Calculator, Package, FileCheck, Tags, RefreshCw } from 'lucide-react';

export const TabServices: React.FC = () => {
  const services = [
    {
      icon: <ClipboardList size={24} strokeWidth={1} />,
      title: "איפיון ותכנון יבוא",
      desc: "ניתוח צרכי העסק, אפיון המוצרים ובניית תכנית יבוא ולוחות זמנים בהתאם ליכולות, לתקציב וליעדים העסקיים.",
    },
    {
      icon: <Scale size={24} strokeWidth={1} />,
      title: "בדיקת חוקיות ורגולציית יבוא",
      desc: "בחינה מלאה של דרישות החוק, התקינה והרגולציה החלות על המוצר – כדי לוודא יבוא חוקי, תקין ואחראי.",
    },
    {
      icon: <Search size={24} strokeWidth={1} />,
      title: "איתור ספקים ויצרנים",
      desc: "איתור ספקים ויצרנים מתאימים בארץ ובחו״ל, כולל בחינת התאמה טכנית, מסחרית ורגולטורית לדרישות היבואן.",
    },
    {
      icon: <Calculator size={24} strokeWidth={1} />,
      title: "אסטרטגיית יבוא והערכת עלויות",
      desc: "בניית אסטרטגיית יבוא שלב־אחר־שלב והצגת תמונת עלויות מלאה: מוצר, שילוח, מיסוי, תקינה, לוגיסטיקה ועלויות נלוות – מדוגמיות ועד יבוא מסחרי.",
    },
    {
      icon: <Package size={24} strokeWidth={1} />,
      title: "יבוא דוגמיות",
      desc: "ניהול יבוא דוגמיות לבדיקת איכות, התאמה לדרישות העסק ועמידה ברגולציה, כולל התאמות נדרשות לפני יבוא מסחרי.",
    },
    {
      icon: <FileCheck size={24} strokeWidth={1} />,
      title: "רגולציה, תקינה ואישורים",
      desc: "טיפול מול מכון התקנים, משרדי ממשלה, רשויות המכס וגופים מאשרים – עד קבלת כל האישורים הנדרשים ליבוא.",
    },
    {
      icon: <Tags size={24} strokeWidth={1} />,
      title: "גיור והתאמת מוצרים לשוק הישראלי",
      desc: "התאמת המוצר לדרישות השוק והרגולציה בישראל: סימון, תיוג, מסמכים ודרישות שיווקיות.",
    },
    {
      icon: <RefreshCw size={24} strokeWidth={1} />,
      title: "פיתוח וייעול שרשרת היבוא",
      desc: "אופטימיזציה מתמשכת של מערך היבוא: שיפור רווחיות, קיצור זמני אספקה, ייעול תהליכים והפיכת היבוא לפשוט וצפוי יותר.",
    }
  ];

  return (
    <div className="pb-48 bg-slate-50 min-h-screen pt-4">
        <div className="px-6 mb-8 mt-4">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Our Expertise</h2>
            <h2 className="text-3xl font-light text-blue-900 tracking-tight">השירותים שלנו</h2>
        </div>

        {/* Services Grid: 1 col on mobile, 2 cols on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-slate-200">
            {services.map((s, idx) => (
                <div key={idx} className={`group flex items-start p-6 bg-white border-b border-slate-200 hover:bg-blue-900 hover:shadow-xl hover:scale-[1.02] hover:z-10 relative transition-all duration-300 cursor-pointer gap-5 ${idx % 2 === 0 ? 'md:border-l' : ''}`}>
                    <div className="text-blue-900 group-hover:text-white transition-colors shrink-0 mt-1">
                        {s.icon}
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-white transition-colors tracking-wide mb-2 leading-tight">{s.title}</h3>
                        <p className="text-sm text-slate-500 group-hover:text-blue-100 font-light leading-relaxed">{s.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Video Banner - Sharp */}
        <div className="mt-8 relative h-64 w-full">
             <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
                alt="Logistics network" 
                className="w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-blue-900/80 flex flex-col items-center justify-center text-center px-8 border-y border-white/10">
                <h4 className="font-light text-2xl text-white mb-2 tracking-wide">זקוקים להצעת מחיר?</h4>
                <a 
                  href="https://wa.me/972585119298?text=מעוניין%20לקבל%20הצעת%20מחיר"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-900 text-xs font-bold px-8 py-3 hover:bg-slate-100 transition-colors uppercase tracking-widest inline-block"
                >
                    להצעת מחיר
                </a>
            </div>
        </div>
    </div>
  );
};