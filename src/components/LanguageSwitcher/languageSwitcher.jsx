import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import FlagUZ from "./FlagUZ";
import FlagRU from "./FlagRU";
import FlagEN from "./FlagEN";

const languages = [
   { 
    code: "en", 
    label: "Eng", 
    Icon: FlagEN 
  },
  { 
    code: "ru", 
    label: "Rus", 
    Icon: FlagRU 
  },
  { 
    code: "uz", 
    label: "Uzb", 
    Icon: FlagUZ 
  },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const current =
    languages.find((l) => l.code === (i18n?.language || "en")) || languages[0];
  const others = languages.filter((l) => l.code !== current.code);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectLang = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-[6px] text-white cursor-pointer"
        aria-label="Change language"
      >
        {current.Icon ? (
          <current.Icon className="w-[18px] h-[18px] rounded-full object-cover" />
        ) : (
          <span className="text-[16px] leading-none">{current.flag}</span>
        )}
        <span className="text-[14px] font-['Josefin_Sans']">{current.label}</span>
        <FaChevronDown
          className={`text-[10px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute right-0 top-[calc(100%+12px)] bg-[#343942] shadow-lg z-50 overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        {others.map((lang) => (
          <button
            key={lang.code}
            onClick={() => selectLang(lang.code)}
            className="flex items-center gap-[8px] w-full px-4 py-2 text-white text-[14px] font-['Josefin_Sans'] hover:bg-[#4A4F57] whitespace-nowrap cursor-pointer"
          >
            {lang.Icon ? (
              <lang.Icon className="w-[18px] h-[18px] rounded-full object-cover" />
            ) : (
              <span className="text-[16px] leading-none">{lang.flag}</span>
            )}
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
