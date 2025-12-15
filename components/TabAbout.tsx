import React from 'react';
import { ShieldCheck, Users, Globe } from 'lucide-react';

export const TabAbout: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Top Banner - Text Only, Minimal */}
      <div className="pt-12 pb-8 px-6 md:px-8 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">About Yoshi</h2>
        <h1 className="text-3xl font-light text-slate-900 leading-tight mb-4">
          פתרונות ייבוא לעסקים
        </h1>
        <p className="text-sm text-slate-600 font-light leading-relaxed max-w-2xl">
          יושי – פתרונות ייבוא בע״מ הוקמה בשנת 2022 במטרה לאפשר לעסקים קטנים ובינוניים להיכנס לעולם הייבוא בצורה בטוחה, מבוקרת ורווחית.
        </p>
      </div>

      {/* Image Split Section - Text Moved Here */}
      <div className="relative h-80 md:h-96 w-full">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
          alt="Business Strategy" 
          className="w-full h-full object-cover grayscale-[30%]"
        />
        {/* Navy Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900/80"></div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 right-0 left-0 p-6 md:p-8 border-t border-white/10 backdrop-blur-sm bg-black/10 flex flex-col justify-end">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-[1px] bg-white"></div>
            <h3 className="font-bold text-white uppercase tracking-widest text-sm">החזון שלנו</h3>
          </div>
          <p className="text-blue-50 text-base md:text-lg font-light leading-relaxed max-w-3xl pr-16">
            החברה מתמחה בליווי תהליכי ייבוא מקצה לקצה, תוך התאמה מלאה לצרכים העסקיים, לרמת הסיכון ולשלב ההתפתחות של כל לקוח.
          </p>
        </div>
      </div>

      {/* Content Body - Text Removed */}
      <div className="p-6 md:p-8 border-b border-slate-100">
         {/* Stats Grid - 1 Col Mobile, 2 Col Desktop */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
                <div className="bg-blue-50 p-3 h-fit rounded-none shrink-0">
                    <Users size={20} className="text-blue-900" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">ניסיון עשיר</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">במהלך השנים ליווינו מאות בעלי עסקים בבחינת כדאיות הייבוא לעסק שלהם.</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="bg-blue-50 p-3 h-fit rounded-none shrink-0">
                    <Globe size={20} className="text-blue-900" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">הצלחה בשטח</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">ליווינו עשרות מהם בתהליך מלא של הקמה וניהול ייבוא מסחרי פעיל.</p>
                </div>
            </div>
         </div>
      </div>
      
      {/* Founder Section */}
      <div className="bg-slate-50 p-6 md:p-8 border-y border-slate-200">
         <h3 className="font-light text-xl mb-6 text-slate-900">על המייסד</h3>
         <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 md:w-32 md:h-32 bg-blue-200 shrink-0 overflow-hidden shadow-sm">
                <img src="https://aitermi-agents.com/uploads/yoshi/images/profile.jpg?v=3" className="w-full h-full object-cover grayscale contrast-125" alt="Yonatan Shraga" />
            </div>
            <div className="max-w-2xl">
                <h4 className="font-bold text-lg text-blue-900">יהונתן שרגא</h4>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                    החברה נוסדה על-ידי יהונתן שרגא, מהנדס חשמל, בעל ניסיון מעשי של כעשור בתחום הייבוא והעבודה מול ספקים, משלחים, מכס וגורמי רגולציה.
                </p>
            </div>
         </div>
      </div>

      {/* Closing Statement */}
      <div className="bg-blue-900 text-white p-10 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <ShieldCheck size={32} strokeWidth={1} className="mx-auto mb-4 text-blue-300" />
            <h3 className="text-lg font-light leading-relaxed tracking-wide">
            ״אם אתם שוקלים לשלב ייבוא בעסק שלכם – סביר להניח שזו הזדמנות עסקית אמיתית. אנחנו כאן כדי לוודא שהיא תתבצע נכון.״
            </h3>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};