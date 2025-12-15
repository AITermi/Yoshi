import React, { useState, useEffect } from 'react';
import { Eye, Shield, FileText, X, Minus, Plus, Moon, Sun, Type, Pause, ScanLine, Info, ArrowLeft } from 'lucide-react';

interface ModalProps {
  onClose: () => void;
}

// Reusable Full Screen Modal Wrapper for "Luxury" feel - Simplified Layout
const FullScreenModal: React.FC<{ title: string; children: React.ReactNode; onClose: () => void }> = ({ title, children, onClose }) => (
  <div className="fixed inset-0 z-[100] bg-white text-slate-900 flex flex-col animate-in slide-in-from-bottom-5 duration-500">
    {/* Elegant Header - Reduced padding */}
    <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-slate-100 bg-white/95 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <button 
            onClick={onClose} 
            className="p-2 -mr-2 hover:bg-slate-50 rounded-full transition-colors group"
        >
            <ArrowLeft size={24} className="text-slate-400 group-hover:text-blue-900 transition-colors" />
        </button>
        <h2 className="text-xl md:text-2xl font-serif font-bold text-blue-900 tracking-wide">{title}</h2>
      </div>
      <button 
        onClick={onClose}
        className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-900 transition-colors"
      >
        סגירה <X size={16} />
      </button>
    </div>

    {/* Scrollable Content Area - Removed inner card, reduced padding */}
    <div className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto px-5 py-8 md:px-8 md:py-12">
            <div className="text-slate-800 leading-relaxed font-light space-y-8">
                {children}
            </div>
            
            {/* Footer decoration */}
            <div className="mt-12 text-center pt-8 border-t border-slate-50">
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em]">YOSHI Imports &copy; 2025</p>
            </div>
        </div>
    </div>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="space-y-3">
        <h3 className="text-lg md:text-xl font-serif text-blue-900 border-b border-slate-100 pb-2">{title}</h3>
        <div className="text-sm md:text-base text-slate-600 leading-7 md:leading-8 pl-2">
            {children}
        </div>
    </div>
);

const PrivacyPolicyModal: React.FC<ModalProps> = ({ onClose }) => (
  <FullScreenModal title="מדיניות פרטיות" onClose={onClose}>
        <p className="text-base md:text-lg font-serif text-slate-900 leading-relaxed">
          מדיניות פרטיות זו חלה על כלל האתרים, הממשקים והשירותים המופעלים תחת תשתית זו (להלן: "האתר" או "השירות"), ומסבירה כיצד נאסף, נעשה שימוש ונשמר מידע הנמסר על-ידי משתמשי הקצה.
        </p>

        <Section title="1. איסוף מידע">
          <p>
            האתר אוסף מידע אך ורק כאשר המשתמש מוסר אותו מיוזמתו, לרבות תוכן פניות, טקסטים, קבצים ונתונים הנדרשים לצורך מתן השירות, זיהוי משתמשים, תפעול, בקרה ושיפור המערכת.
            בנוסף, נאסף מידע טכני בסיסי כחלק מתפעול שוטף ואבטחת השירות.
          </p>
        </Section>

        <Section title="2. שימוש במערכות בינה מלאכותית">
          <p>
            המידע הנמסר על-ידי המשתמשים עשוי להיות מעובד באמצעות סוכני בינה מלאכותית המבוססים על Google Gemini, לצורך ניתוח הבקשות, יצירת תגובות, מתן שירותים אוטומטיים ושיפור חוויית המשתמש.
          </p>
        </Section>

        <Section title="3. שמירת מידע ואחסון">
          <p>
            המידע נשמר בתשתיות Google Drive, תחת מנגנוני הרשאה, בקרת גישה והגבלות שימוש.
            המידע משמש לצרכים תפעוליים בלבד, לרבות זיהוי, תיעוד, מעקב, שיפור השירות ועמידה בדרישות תפעוליות ומשפטיות.
          </p>
        </Section>

        <Section title="4. Cookies, לוגים ומידע טכני">
          <p className="mb-2">
            האתר עושה שימוש בקובצי Cookies ו/או בטכנולוגיות דומות, וכן בלוגים מערכתיים, לצורך:
          </p>
          <ul className="list-disc list-inside space-y-1 pr-2 text-slate-500">
            <li>תפעול תקין של האתר</li>
            <li>זיהוי משתמשים וסשנים</li>
            <li>אבטחה, ניטור ותיעוד תקלות</li>
            <li>מדידה, בקרה ושיפור השירות</li>
          </ul>
          <p className="mt-3">
            Cookies אינם משמשים לאיסוף מידע רגיש מעבר לנדרש לתפעול האתר.
          </p>
        </Section>

        <Section title="5. העברת מידע לצדדים שלישיים">
          <p>
            המידע אינו נמכר ואינו מועבר לצדדים שלישיים שאינם קשורים ישירות להפעלת השירות.
            עם זאת, מידע עשוי להיות מעובד או מאוחסן על-ידי ספקי תשתית וטכנולוגיה (ובכלל זה Google), כחלק בלתי נפרד מהשירות.
          </p>
        </Section>

        <Section title="6. ריבוי אתרים ותשתית משותפת">
          <p>
            השירות מופעל במסגרת תשתית מרכזית אחת, המשמשת מספר אתרים, לקוחות או מותגים.
            המידע נשמר ומטופל באופן לוגי ומופרד בין אתרים ולקוחות, בהתאם לאופי השירות ולמנגנוני ההרשאה.
          </p>
        </Section>

        <Section title="7. אבטחת מידע">
          <p>
            ננקטים אמצעים טכנולוגיים וארגוניים סבירים ומקובלים לשם הגנה על המידע, מניעת גישה בלתי מורשית וצמצום סיכונים, בהתאם לאופי המידע והטכנולוגיה הזמינה.
          </p>
        </Section>

        <Section title="8. זכויות המשתמש">
          <p>
            משתמש רשאי לפנות בבקשה לעיין במידע הנוגע אליו, לבקש תיקון או מחיקה של מידע, בכפוף לדין החל, לצרכים תפעוליים ולחובות חוקיות.
          </p>
        </Section>

        <Section title="9. שינויים במדיניות">
          <p>
            מפעיל האתר רשאי לעדכן מדיניות פרטיות זו מעת לעת. נוסח מעודכן יפורסם באתר וייכנס לתוקף ממועד פרסומו.
          </p>
        </Section>

        <Section title="10. יצירת קשר">
          <p>
            לפניות, שאלות או בקשות בנוגע לפרטיות, ניתן ליצור קשר עם מפעיל האתר באמצעי הקשר המפורסמים באתר הרלוונטי.
          </p>
        </Section>
  </FullScreenModal>
);

const TermsOfUseModal: React.FC<ModalProps> = ({ onClose }) => (
  <FullScreenModal title="תנאי שימוש" onClose={onClose}>
        <p className="text-base md:text-lg font-serif text-slate-900 leading-relaxed">
          השימוש באתר ו/או בשירותים המוצעים בו כפוף לתנאי שימוש אלו. גלישה באתר או שימוש בשירות מהווים הסכמה מלאה ומחייבת לתנאים המפורטים להלן.
        </p>

        <Section title="1. הגדרות כלליות">
          <ul className="list-disc list-inside space-y-1 pr-2 text-slate-500">
            <li><strong className="text-slate-700">"האתר"</strong> – כל אתר, ממשק או שירות הפועל תחת מותג זה.</li>
            <li><strong className="text-slate-700">"המשתמש"</strong> – כל אדם הגולש באתר או עושה שימוש בשירותיו.</li>
            <li><strong className="text-slate-700">"מפעיל האתר"</strong> – בעל האתר או העסק המפעיל אותו.</li>
          </ul>
        </Section>

        <Section title="2. מהות השירות">
          <p>
            האתר מספק שירותים דיגיטליים, לרבות שירותים אוטומטיים ו/או מבוססי בינה מלאכותית, בהתאם למידע שמוזן על-ידי המשתמש ובהתאם לאופי השירות המוצג באתר.
            מפעיל האתר רשאי לשנות, לעדכן או להפסיק שירותים בכל עת.
          </p>
        </Section>

        <Section title="3. שימוש מותר ואסור">
          <p className="mb-2">המשתמש מתחייב לעשות שימוש באתר ובשירותים למטרות חוקיות בלבד. חל איסור על:</p>
          <ul className="list-disc list-inside space-y-1 pr-2 text-slate-500">
            <li>שימוש באתר לצרכים בלתי חוקיים או פוגעניים</li>
            <li>ניסיון לפגוע, לשבש או לעקוף מנגנוני אבטחה</li>
            <li>העתקה, שכפול או שימוש בתוכן או בקוד ללא הרשאה</li>
            <li>הזנת מידע כוזב, מטעה או פוגעני</li>
          </ul>
        </Section>

        <Section title="4. אחריות והגבלת אחריות">
          <p>
            השירותים ניתנים כפי שהם (AS IS).
            מפעיל האתר אינו מתחייב לזמינות רציפה, לדיוק מוחלט או להתאמה לצרכים מסוימים של המשתמש.
            השימוש באתר ובשירותים הוא באחריות המשתמש בלבד.
          </p>
        </Section>

        <Section title="5. תוכן ושירותים מבוססי בינה מלאכותית">
          <p>
            תשובות, תכנים או פלטים המופקים באמצעות מערכות אוטומטיות או בינה מלאכותית ניתנים לצרכי מידע ושירות בלבד, ואינם מהווים ייעוץ מקצועי, משפטי, רפואי או אחר.
            האחריות על שימוש בפלטים אלו חלה על המשתמש בלבד.
          </p>
        </Section>

        <Section title="6. קניין רוחני">
          <p>
            כל זכויות הקניין הרוחני באתר, לרבות עיצוב, קוד, טקסטים, לוגואים ותכנים, שייכות למפעיל האתר או לצדדים שלישיים שהרשו את השימוש בהם.
            אין לעשות בהם שימוש ללא אישור מראש ובכתב.
          </p>
        </Section>

        <Section title="7. זמינות, שינויים והפסקת שירות">
          <p className="mb-2">מפעיל האתר רשאי:</p>
          <ul className="list-disc list-inside space-y-1 pr-2 text-slate-500">
            <li>לעדכן או לשנות את האתר והשירותים</li>
            <li>להשעות או להפסיק גישה למשתמש</li>
            <li>להפסיק פעילות האתר, זמנית או לצמיתות</li>
          </ul>
          <p className="mt-2">הכול לפי שיקול דעתו הבלעדי.</p>
        </Section>

        <Section title="8. קישורים ושירותי צד שלישי">
          <p>
            האתר עשוי לכלול קישורים או שימוש בשירותי צד שלישי.
            מפעיל האתר אינו אחראי לתוכן, מדיניות או פעילות של שירותים חיצוניים אלו.
          </p>
        </Section>

        <Section title="9. דין וסמכות שיפוט">
          <p>
            על תנאי שימוש אלו יחולו דיני מדינת ישראל בלבד.
            סמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים בישראל.
          </p>
        </Section>

        <Section title="10. יצירת קשר">
          <p>
            לשאלות או פניות בנוגע לתנאי השימוש, ניתן לפנות למפעיל האתר באמצעי הקשר המפורסמים באתר.
          </p>
        </Section>
  </FullScreenModal>
);

const AccessibilityStatement: React.FC<ModalProps> = ({ onClose }) => (
  <FullScreenModal title="הצהרת נגישות" onClose={onClose}>
        <p className="text-base md:text-lg font-serif text-slate-900 leading-relaxed">
          <strong>YOSHI - פתרונות יבוא</strong> רואה חשיבות רבה במתן שירות שוויוני לכלל הלקוחות והגולשים ובשיפור השירות הניתן ללקוחות עם מוגבלות. אנו משקיעים משאבים רבים בהנגשת האתר והתכנים שבו, על מנת להפוך אותם לזמינים, ידידותיים ונוחים לשימוש עבור אנשים עם מוגבלויות.
        </p>

        <Section title="רמת הנגישות">
          <p>
            האתר נבנה בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013, ולתקן הישראלי ת"י 5568 לנגישות תכנים באינטרנט ברמת AA, וכן לפי הנחיות מסמך WCAG 2.1 הבינלאומי.
          </p>
        </Section>

        <Section title="התאמות שבוצעו באתר">
          <ul className="list-disc list-inside space-y-1 pr-2 text-slate-500">
            <li>האתר מותאם לצפייה ולשימוש במחשבים שולחניים, טאבלטים ומכשירים סלולריים (רספונסיביות).</li>
            <li>אמצעי הניווט באתר פשוטים וברורים.</li>
            <li>התכנים באתר כתובים בשפה ברורה, מסודרת והיררכית.</li>
            <li>האתר מותאם לגלישה באמצעות מקלדת בלבד.</li>
            <li>התמונות באתר כוללות טקסט אלטרנטיבי (Alt Text) למטרת תיאור התמונה.</li>
            <li>קיימת אפשרות לשינוי גודל הגופן, שינוי ניגודיות וביטול הנפשות באמצעות סרגל הנגישות.</li>
          </ul>
        </Section>

        <Section title="פניות בנושא נגישות">
          <p>
            אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר לכלל האוכלוסייה, כולל אנשים עם מוגבלויות, לקבל את השירות הנגיש ביותר.
            <br />
            במידה ונתקלתם בבעיה או בתקלה כלשהי בנושא הנגישות, נשמח שתעדכנו אותנו ואנו נעשה כל מאמץ למצוא פתרון מתאים ולטפל בתקלה בהקדם האפשרי.
          </p>
          <div className="mt-6 bg-blue-50/50 p-6 border-r-4 border-blue-900">
            <h4 className="font-bold text-blue-900 mb-3 text-lg">פרטי רכז הנגישות</h4>
            <div className="space-y-1 text-slate-700">
                <p><strong>שם:</strong> יהונתן שרגא</p>
                <p><strong>טלפון:</strong> 058-511-9298</p>
                <p><strong>דוא"ל:</strong> service@yoshi-import.co.il</p>
            </div>
          </div>
        </Section>
        
        <div className="pt-6 text-center text-xs text-slate-400 font-bold uppercase tracking-widest">
            עודכן לאחרונה: פברואר 2025
        </div>
  </FullScreenModal>
);

export const LegalFooter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  
  // Accessibility States
  const [fontSizeLevel, setFontSizeLevel] = useState(0); // 0..3
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [stopAnimations, setStopAnimations] = useState(false);
  const [enhancedFocus, setEnhancedFocus] = useState(false);

  useEffect(() => {
    // 1. CSS Filters
    const filters = [];
    if (isGrayscale) filters.push('grayscale(100%)');
    if (isHighContrast) filters.push('contrast(150%)');
    document.body.style.filter = filters.join(' ') || 'none';
    
    // 2. Font Size
    const percentage = 100 + (fontSizeLevel * 10);
    document.documentElement.style.fontSize = `${percentage}%`;

    // 3. Class Toggles (Link Highlight, Animations, Focus)
    const bodyClassList = document.body.classList;

    if (highlightLinks) bodyClassList.add('accessibility-links-highlight');
    else bodyClassList.remove('accessibility-links-highlight');

    if (stopAnimations) bodyClassList.add('accessibility-stop-animations');
    else bodyClassList.remove('accessibility-stop-animations');

    if (enhancedFocus) bodyClassList.add('accessibility-enhanced-focus');
    else bodyClassList.remove('accessibility-enhanced-focus');

  }, [fontSizeLevel, isGrayscale, isHighContrast, highlightLinks, stopAnimations, enhancedFocus]);

  // Inject Global Styles for Accessibility Features
  useEffect(() => {
      const styleId = 'accessibility-global-styles';
      if (!document.getElementById(styleId)) {
          const style = document.createElement('style');
          style.id = styleId;
          style.innerHTML = `
            /* Link Highlighting */
            .accessibility-links-highlight a, 
            .accessibility-links-highlight button {
                text-decoration: underline !important;
                text-decoration-thickness: 2px !important;
                text-decoration-color: #1e3a8a !important;
            }

            /* Stop Animations */
            .accessibility-stop-animations *,
            .accessibility-stop-animations *::before,
            .accessibility-stop-animations *::after {
                animation: none !important;
                transition: none !important;
                scroll-behavior: auto !important;
            }
            /* Hide video background when animations are stopped to reduce motion */
            .accessibility-stop-animations video {
                opacity: 0 !important;
            }
            /* Ensure background color exists behind hidden video */
            .accessibility-stop-animations .video-container-fallback {
                background-color: #1e3a8a !important;
            }

            /* Enhanced Focus */
            .accessibility-enhanced-focus *:focus-visible {
                outline: 4px solid #F59E0B !important; /* Amber-500 */
                outline-offset: 2px !important;
                box-shadow: 0 0 0 6px rgba(0,0,0,0.5) !important;
                z-index: 1000;
            }
          `;
          document.head.appendChild(style);
      }
  }, []);

  const resetSettings = () => {
    setFontSizeLevel(0);
    setIsGrayscale(false);
    setIsHighContrast(false);
    setHighlightLinks(false);
    setStopAnimations(false);
    setEnhancedFocus(false);
  };

  return (
    <>
      {showAccessibility && <AccessibilityStatement onClose={() => setShowAccessibility(false)} />}
      {showPrivacy && <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />}
      {showTerms && <TermsOfUseModal onClose={() => setShowTerms(false)} />}

      {/* Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Accessibility Menu Side Panel */}
      <div className={`fixed top-1/2 left-0 transform -translate-y-1/2 z-[60] transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         <div className="bg-white rounded-r-2xl shadow-2xl p-5 w-80 border border-slate-100 flex flex-col gap-5 max-h-[90vh] overflow-y-auto no-scrollbar">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-blue-900 flex items-center gap-2 text-lg">
                    <Eye size={22} />
                    תפריט נגישות
                </h3>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  aria-label="סגור תפריט"
                >
                    <X size={20} />
                </button>
            </div>

            <div className="space-y-3">
                {/* Text Size Control */}
                <div className="flex items-center justify-between py-1">
                    <span className="text-sm font-medium text-slate-700">גודל טקסט</span>
                    <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
                        <button 
                            onClick={() => setFontSizeLevel(Math.max(0, fontSizeLevel - 1))}
                            className="p-2 hover:bg-white rounded shadow-sm transition-all disabled:opacity-30 disabled:shadow-none"
                            disabled={fontSizeLevel === 0}
                            aria-label="הקטן טקסט"
                        >
                            <Minus size={16} />
                        </button>
                        <span className="w-10 text-center font-bold text-sm text-slate-900">{100 + fontSizeLevel * 10}%</span>
                        <button 
                            onClick={() => setFontSizeLevel(Math.min(3, fontSizeLevel + 1))}
                            className="p-2 hover:bg-white rounded shadow-sm transition-all disabled:opacity-30 disabled:shadow-none"
                            disabled={fontSizeLevel === 3}
                            aria-label="הגדל טקסט"
                        >
                            <Plus size={16} />
                        </button>
                    </div>
                </div>

                {/* Toggles */}
                <AccessibilityToggle 
                    label="גווני אפור" 
                    icon={<Moon size={18} />} 
                    isActive={isGrayscale} 
                    onClick={() => setIsGrayscale(!isGrayscale)} 
                />
                
                <AccessibilityToggle 
                    label="ניגודיות גבוהה" 
                    icon={<Sun size={18} />} 
                    isActive={isHighContrast} 
                    onClick={() => setIsHighContrast(!isHighContrast)} 
                />

                <AccessibilityToggle 
                    label="הדגשת קישורים" 
                    icon={<Type size={18} />} 
                    isActive={highlightLinks} 
                    onClick={() => setHighlightLinks(!highlightLinks)} 
                />

                <AccessibilityToggle 
                    label="עצירת הבהובים/הנפשות" 
                    icon={<Pause size={18} />} 
                    isActive={stopAnimations} 
                    onClick={() => setStopAnimations(!stopAnimations)} 
                />

                <AccessibilityToggle 
                    label="מיקוד מקלדת בולט" 
                    icon={<ScanLine size={18} />} 
                    isActive={enhancedFocus} 
                    onClick={() => setEnhancedFocus(!enhancedFocus)} 
                />

                <div className="pt-4 mt-2 border-t border-slate-100 space-y-3">
                    <button 
                        onClick={() => {
                            setIsOpen(false);
                            setShowAccessibility(true);
                        }}
                        className="w-full flex items-center justify-between p-3 rounded-xl border bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-blue-900 hover:border-blue-200 transition-colors"
                    >
                        <span className="text-sm font-medium">הצהרת נגישות</span>
                        <Info size={18} />
                    </button>

                    <button 
                        onClick={resetSettings}
                        className="w-full py-2 text-xs font-medium text-slate-500 hover:text-red-600 transition-colors flex items-center justify-center gap-2"
                    >
                        <RefreshIcon />
                        איפוס הגדרות נגישות
                    </button>
                </div>
            </div>
         </div>
      </div>

      {/* Trigger Button - Hidden when menu is open */}
      <div className={`fixed top-1/2 left-0 transform -translate-y-1/2 z-50 transition-transform duration-300 ${isOpen ? '-translate-x-full' : 'translate-x-0'}`}>
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-r-lg shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center"
          aria-label="פתח תפריט נגישות"
        >
          <Eye size={24} />
        </button>
      </div>

      {/* Floating Legal Links (Bottom Left) */}
      <div className="fixed bottom-24 left-4 z-40 flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <div 
            className="bg-white/80 backdrop-blur p-2 rounded-full shadow-sm cursor-pointer border border-gray-200 hover:scale-105 transition-transform" 
            title="מדיניות פרטיות"
            onClick={() => setShowPrivacy(true)}
        >
          <Shield size={16} className="text-slate-600" />
        </div>
        <div 
            className="bg-white/80 backdrop-blur p-2 rounded-full shadow-sm cursor-pointer border border-gray-200 hover:scale-105 transition-transform" 
            title="תנאי שימוש"
            onClick={() => setShowTerms(true)}
        >
          <FileText size={16} className="text-slate-600" />
        </div>
      </div>
    </>
  );
};

// Helper Components
const AccessibilityToggle: React.FC<{ label: string, icon: React.ReactNode, isActive: boolean, onClick: () => void }> = ({ label, icon, isActive, onClick }) => (
    <button 
        onClick={onClick}
        className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 ${isActive ? 'bg-blue-900 text-white border-blue-900 shadow-md' : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50'}`}
    >
        <span className="text-sm font-medium">{label}</span>
        {icon}
    </button>
);

const RefreshIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
        <path d="M16 21h5v-5"/>
    </svg>
);