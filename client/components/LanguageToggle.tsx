'use client';

import { ProgrammingLanguage } from '@/types';

interface LanguageToggleProps {
  languages: ProgrammingLanguage[];
  selectedLanguage: ProgrammingLanguage;
  onLanguageChange: (language: ProgrammingLanguage) => void;
}

const languageLabels: Record<ProgrammingLanguage, string> = {
  c: 'C',
  cpp: 'C++',
  python: 'Python',
  java: 'Java',
  javascript: 'JavaScript',
};

export function LanguageToggle({
  languages,
  selectedLanguage,
  onLanguageChange,
}: LanguageToggleProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((language) => (
        <button
          key={language}
          onClick={() => onLanguageChange(language)}
          className={`rounded-md px-3 py-1.5 text-xs font-mono font-semibold transition-colors ${
            selectedLanguage === language
              ? 'bg-[#2F81F7] text-white'
              : 'bg-[#161B22] text-[#6E7681] hover:bg-[#21262D] hover:text-[#C9D1D9] border border-[#30363D]'
          }`}
        >
          {languageLabels[language]}
        </button>
      ))}
    </div>
  );
}

