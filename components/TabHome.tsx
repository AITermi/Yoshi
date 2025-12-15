import React from 'react';
import { ArrowLeft, Briefcase, TrendingUp, Lightbulb, RefreshCw, ShieldCheck, Scale, Users, FileCheck } from 'lucide-react';

export const TabHome: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      {/* Hero Section */}
      <div className="relative h-[65vh] w-full overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover grayscale-[20%] contrast-110"
            poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
          >
            {/* Shipping / Logistics container terminal video */}
            <source src="https://videos.pexels.com/video-files/3063467/3063467-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 p-8 w-full border-b border-white/20">
          <div className="flex items-center gap-3 mb-4">
             <div className="h-[1px] w-12 bg-white/80"></div>
             <span className="text-white/90 text-[10px] font-bold tracking-[0.2em] uppercase">
                שירותי יבוא וליווי עסקי
             </span>
          </div>
          <h2 className="text-5xl font-light text-white leading-[0.9] mb-4 tracking-tighter">
            יבוא חכם.<br/><span className="font-bold">חוקי. רווחי.</span>
          </h2>
          <p className="text-blue-100 text-sm font-light max-w-sm leading-relaxed border-r border-white/30 pr-4">
            יבוא הוא תהליך מורכב – אנחנו הופכים אותו לברור, בטוח ומנוהל.
          </p>
        </div>
      </div>

      {/* Main Intro Text */}
      <div className="bg-white p-8 border-b border-slate-100">
        <div className="space-y-4 text-slate-600 font-light leading-relaxed text-sm">
          <p>
            <strong className="text-blue-900 font-bold text-lg block mb-2">יושי – פתרונות יבוא בע״מ</strong>
            מספקת ליווי מקצועי ומלא בתהליכי יבוא לישראל, החל מאפיון מוצרים ותכנון יבוא, דרך בדיקת חוקיות ורגולציית יבוא, איתור ספקים ויצרנים בארץ ובחו״ל, בניית אסטרטגיית יבוא והערכת עלויות, יבוא דוגמיות וטיפול באישורי תקינה ורגולציה.
          </p>
          <p>
            הליווי כולל עבודה מול מכון התקנים, רשויות המכס ומשרדי הממשלה הרלוונטיים, גיור והתאמת מוצרים לשוק הישראלי וייעול מתמשך של שרשרת היבוא – במטרה לאפשר יבוא חוקי, יעיל ורווחי לעסקים ויבואנים בכל שלב.
          </p>
        </div>
      </div>

      {/* How we work */}
      <div className="bg-blue-50/50 p-8 border-b border-slate-100">
        <h3 className="text-blue-900 text-xl font-light mb-2 tracking-wide">איך אנחנו עובדים</h3>
        <p className="text-slate-600 text-sm">
          ליווי מקצועי, שקוף ומבוסס תהליך – מותאם לעסק שלך ולשלב שבו הוא נמצא.
        </p>
      </div>

      {/* "Who is it for?" - Grid */}
      <div className="bg-slate-50 py-10 px-6">
        <h3 className="text-blue-900 text-xl font-light mb-8 text-center tracking-wide">למי השירות מתאים?</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3">
            <Briefcase className="text-blue-900" size={24} strokeWidth={1.5} />
            <span className="text-xs font-bold text-slate-800 leading-tight">עסקים שרוצים להתחיל לייבא בפעם הראשונה</span>
          </div>
          <div className="bg-white p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3">
            <TrendingUp className="text-blue-900" size={24} strokeWidth={1.5} />
            <span className="text-xs font-bold text-slate-800 leading-tight">יבואנים בתחילת הדרך</span>
          </div>
          <div className="bg-white p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3">
            <RefreshCw className="text-blue-900" size={24} strokeWidth={1.5} />
            <span className="text-xs font-bold text-slate-800 leading-tight">עסקים שמייבאים ורוצים לשפר רווחיות ותהליכים</span>
          </div>
          <div className="bg-white p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3">
            <Lightbulb className="text-blue-900" size={24} strokeWidth={1.5} />
            <span className="text-xs font-bold text-slate-800 leading-tight">יזמים עם מוצר ורעיון – לפני התחייבות מסחרית</span>
          </div>
        </div>
      </div>

      {/* "Why Work With Us?" - List */}
      <div className="bg-white py-10 px-8 border-t border-slate-100">
        <h3 className="text-blue-900 text-xl font-light mb-8 text-right tracking-wide">למה לעבוד איתנו?</h3>
        <div className="space-y-6">
          <div className="flex gap-4 items-center">
            <div className="bg-blue-50 p-2 rounded-full">
              <ShieldCheck size={18} className="text-blue-900" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">ניסיון מעשי ביבוא מסחרי</h4>
            </div>
          </div>
          
          <div className="flex gap-4 items-center">
            <div className="bg-blue-50 p-2 rounded-full">
              <FileCheck size={18} className="text-blue-900" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">התמחות ברגולציה ותקינה בישראל</h4>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="bg-blue-50 p-2 rounded-full">
              <Scale size={18} className="text-blue-900" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">הסתכלות עסקית ולא רק טכנית</h4>
            </div>
          </div>

           <div className="flex gap-4 items-center">
            <div className="bg-blue-50 p-2 rounded-full">
              <Users size={18} className="text-blue-900" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">ליווי אישי ושקיפות מלאה לאורך כל הדרך</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-blue-900 text-white p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-64 h-full bg-white/5 -skew-x-12 transform -translate-x-1/2"></div>
        
        <h3 className="text-xl font-light mb-2 tracking-wide">רוצים לבדוק אם יבוא מתאים לעסק שלכם?</h3>
        <p className="text-blue-200 text-xs mb-8 max-w-xs font-light leading-relaxed">
          נשמח לבחון יחד את הרעיון, המוצר והכדאיות – ולבנות תהליך יבוא שמתאים לכם.
        </p>
        <button className="border border-white/30 px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-blue-900 transition-all flex items-center gap-3 bg-white/10 backdrop-blur-sm">
          השאירו פרטים אצל העוזר AI שלנו
          <ArrowLeft size={14} />
        </button>
      </div>
    </div>
  );
};