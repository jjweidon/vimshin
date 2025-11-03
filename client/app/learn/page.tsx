'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { StatusBar } from '@/components/terminal/StatusBar';
import { LanguageToggle } from '@/components/LanguageToggle';
import { LESSONS } from '@/constants/lessons';
import { ProgrammingLanguage } from '@/types';

// VimTerminal은 브라우저 환경에서만 동작하므로 동적 임포트 사용
const VimTerminal = dynamic(
  () => import('@/components/terminal/VimTerminal').then((mod) => ({ default: mod.VimTerminal })),
  { ssr: false, loading: () => <div className="flex h-full items-center justify-center text-[#6E7681]">Loading terminal...</div> }
);

export default function LearnPage() {
  const currentLesson = LESSONS[0]; // 첫 번째 레슨 사용 (나중에 동적으로 선택 가능)
  const availableLanguages: ProgrammingLanguage[] = currentLesson.codeExamples
    ? (currentLesson.codeExamples.map((ex) => ex.language) as ProgrammingLanguage[])
    : [];
  const [selectedLanguage, setSelectedLanguage] = useState<ProgrammingLanguage>(
    availableLanguages[0] || 'javascript'
  );

  const currentCodeExample = currentLesson.codeExamples?.find(
    (ex) => ex.language === selectedLanguage
  );

  return (
    <div className="flex h-screen flex-col bg-[#0D1117]">
      <Header />
      
      <main className="flex flex-1 overflow-hidden">
        {/* 학습 가이드 사이드바 */}
        <aside className="w-80 border-r border-[#30363D] bg-[#0D1117] p-6 overflow-y-auto">
          <h2 className="mb-6 font-mono text-2xl font-bold text-[#C9D1D9]">
            Level {currentLesson.level}: {currentLesson.title}
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-mono text-lg font-semibold text-[#2F81F7]">
                학습 목표
              </h3>
              <ul className="space-y-2 text-sm text-[#6E7681]">
                {currentLesson.objectives.map((objective, index) => (
                  <li key={index}>• {objective}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-mono text-lg font-semibold text-[#2F81F7]">
                명령어
              </h3>
              <div className="space-y-3">
                {currentLesson.commands.map((command) => (
                  <div key={command.key} className="rounded border border-[#30363D] bg-[#161B22] p-3">
                    <div className="mb-1 font-mono text-sm font-bold text-[#51CF66]">{command.key}</div>
                    <div className="text-xs text-[#6E7681]">{command.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-mono text-lg font-semibold text-[#2F81F7]">
                연습하기
              </h3>
              <p className="text-sm text-[#6E7681]">
                {currentLesson.practice.instructions}
              </p>
            </div>
          </div>
        </aside>

        {/* 터미널 영역 */}
        <div className="flex flex-1 flex-col">
          {/* 언어 토글 */}
          {currentLesson.codeExamples && currentLesson.codeExamples.length > 0 && (
            <div className="border-b border-[#30363D] bg-[#0D1117] p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-[#C9D1D9]">언어 선택:</span>
                <LanguageToggle
                  languages={availableLanguages}
                  selectedLanguage={selectedLanguage}
                  onLanguageChange={setSelectedLanguage}
                />
              </div>
            </div>
          )}
          <div className="flex-1">
            <VimTerminal initialCode={currentCodeExample?.code || ''} />
          </div>
          <StatusBar />
        </div>
      </main>
    </div>
  );
}

