'use client';

import { Header } from '@/components/Header';
import Link from 'next/link';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface Mission {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  level: number;
  completed: boolean;
}

const missions: Mission[] = [
  {
    id: 1,
    title: '단어 삭제 마스터',
    description: '특정 단어를 빠르게 찾아서 삭제하는 미션',
    difficulty: 'Easy',
    level: 1,
    completed: false,
  },
  {
    id: 2,
    title: '줄 복사와 붙여넣기',
    description: '여러 줄을 복사하고 올바른 위치에 붙여넣기',
    difficulty: 'Medium',
    level: 2,
    completed: false,
  },
  {
    id: 3,
    title: '비주얼 모드 마스터',
    description: '비주얼 모드로 텍스트를 선택하고 편집하기',
    difficulty: 'Hard',
    level: 3,
    completed: false,
  },
];

const difficultyColors: Record<Difficulty, string> = {
  Easy: 'text-[#51CF66]',
  Medium: 'text-[#FFD43B]',
  Hard: 'text-[#FF6B6B]',
};

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 font-mono text-4xl font-bold text-[#C9D1D9]">
            미션 모드
          </h1>
          <p className="text-lg text-[#6E7681]">
            실전 문제를 풀어보고 실력을 향상시키세요
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission) => (
            <div
              key={mission.id}
              className="rounded-lg border border-[#30363D] bg-[#161B22] p-6 transition-all hover:border-[#2F81F7] hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded bg-[#2F81F7]/20 px-3 py-1 font-mono text-xs font-semibold text-[#2F81F7]">
                  Level {mission.level}
                </span>
                <span className={`font-mono text-sm font-bold ${difficultyColors[mission.difficulty]}`}>
                  {mission.difficulty}
                </span>
              </div>

              <h3 className="mb-2 font-mono text-xl font-bold text-[#C9D1D9]">
                {mission.title}
              </h3>
              <p className="mb-4 text-sm text-[#6E7681]">
                {mission.description}
              </p>

              <Link
                href={`/mission/${mission.id}`}
                className="inline-block rounded bg-[#2F81F7] px-4 py-2 font-mono text-sm font-semibold text-white transition-colors hover:bg-[#2F81F7]/80"
              >
                시작하기
              </Link>
            </div>
          ))}
        </div>

        {/* 통계 섹션 */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-[#30363D] bg-[#161B22] p-6 text-center">
            <div className="mb-2 font-mono text-3xl font-bold text-[#51CF66]">0</div>
            <div className="text-sm text-[#6E7681]">완료한 미션</div>
          </div>
          <div className="rounded-lg border border-[#30363D] bg-[#161B22] p-6 text-center">
            <div className="mb-2 font-mono text-3xl font-bold text-[#2F81F7]">0</div>
            <div className="text-sm text-[#6E7681]">총 점수</div>
          </div>
          <div className="rounded-lg border border-[#30363D] bg-[#161B22] p-6 text-center">
            <div className="mb-2 font-mono text-3xl font-bold text-[#FFD43B]">0</div>
            <div className="text-sm text-[#6E7681]">획득한 배지</div>
          </div>
        </div>
      </main>
    </div>
  );
}

