'use client';

import { CodeExample as CodeExampleType, ProgrammingLanguage } from '@/types';

interface CodeExampleProps {
  codeExample: CodeExampleType;
  language: ProgrammingLanguage;
}

const languageLabels: Record<ProgrammingLanguage, string> = {
  c: 'C',
  cpp: 'C++',
  python: 'Python',
  java: 'Java',
  javascript: 'JavaScript',
};

export function CodeExample({ codeExample, language }: CodeExampleProps) {
  if (codeExample.language !== language) {
    return null;
  }

  return (
    <div className="rounded-lg border border-[#30363D] bg-[#161B22] overflow-hidden">
      <div className="bg-[#0D1117] px-4 py-2 border-b border-[#30363D]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm font-semibold text-[#2F81F7]">
            {languageLabels[language]}
          </span>
          {codeExample.description && (
            <span className="text-xs text-[#6E7681]">{codeExample.description}</span>
          )}
        </div>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm text-[#C9D1D9] whitespace-pre">
          {codeExample.code}
        </code>
      </pre>
    </div>
  );
}

