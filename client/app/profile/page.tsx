'use client';

import { Header } from '@/components/Header';
import { useUserStore } from '@/stores/useUserStore';

export default function ProfilePage() {
  const { user, progress } = useUserStore();

  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 font-mono text-4xl font-bold text-[#C9D1D9]">
            프로필
          </h1>
          <p className="text-lg text-[#6E7681]">
            학습 진척도와 성취를 확인하세요
          </p>
        </div>

        {!user ? (
          <div className="rounded-lg border border-[#30363D] bg-[#161B22] p-12 text-center">
            <div className="mb-4 text-6xl">👤</div>
            <h2 className="mb-4 font-mono text-2xl font-bold text-[#C9D1D9]">
              로그인이 필요합니다
            </h2>
            <p className="mb-6 text-[#6E7681]">
              학습 진척도를 저장하고 추적하려면 로그인하세요
            </p>
            <button className="rounded-lg bg-[#2F81F7] px-6 py-3 font-mono font-semibold text-white transition-colors hover:bg-[#2F81F7]/80">
              GitHub로 로그인
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* 사용자 정보 */}
            <div className="rounded-lg border border-[#30363D] bg-[#161B22] p-6">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-[#2F81F7] flex items-center justify-center text-3xl">
                  👤
                </div>
                <div>
                  <h2 className="font-mono text-2xl font-bold text-[#C9D1D9]">
                    {user.name}
                  </h2>
                  <p className="text-[#6E7681]">{user.email}</p>
                </div>
              </div>
            </div>

            {/* 학습 통계 */}
            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-lg border border-[#30363D] bg-[#161B22] p-6 text-center">
                <div className="mb-2 font-mono text-3xl font-bold text-[#51CF66]">
                  {progress?.completedLevels.length || 0}
                </div>
                <div className="text-sm text-[#6E7681]">완료한 레벨</div>
              </div>
              <div className="rounded-lg border border-[#30363D] bg-[#161B22] p-6 text-center">
                <div className="mb-2 font-mono text-3xl font-bold text-[#2F81F7]">
                  {progress?.completedMissions.length || 0}
                </div>
                <div className="text-sm text-[#6E7681]">완료한 미션</div>
              </div>
              <div className="rounded-lg border border-[#30363D] bg-[#161B22] p-6 text-center">
                <div className="mb-2 font-mono text-3xl font-bold text-[#FFD43B]">
                  {progress?.totalScore || 0}
                </div>
                <div className="text-sm text-[#6E7681]">총 점수</div>
              </div>
              <div className="rounded-lg border border-[#30363D] bg-[#161B22] p-6 text-center">
                <div className="mb-2 font-mono text-3xl font-bold text-[#FF6B6B]">
                  {progress?.badges.length || 0}
                </div>
                <div className="text-sm text-[#6E7681]">획득한 배지</div>
              </div>
            </div>

            {/* 배지 컬렉션 */}
            <div className="rounded-lg border border-[#30363D] bg-[#161B22] p-6">
              <h3 className="mb-4 font-mono text-xl font-bold text-[#C9D1D9]">
                배지 컬렉션
              </h3>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="flex flex-col items-center justify-center rounded border border-[#30363D] bg-[#0D1117] p-4 text-center opacity-50">
                  <div className="mb-2 text-4xl">🎯</div>
                  <div className="font-mono text-sm text-[#6E7681]">Motion Master</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded border border-[#30363D] bg-[#0D1117] p-4 text-center opacity-50">
                  <div className="mb-2 text-4xl">⚡</div>
                  <div className="font-mono text-sm text-[#6E7681]">Insert Ninja</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded border border-[#30363D] bg-[#0D1117] p-4 text-center opacity-50">
                  <div className="mb-2 text-4xl">👁️</div>
                  <div className="font-mono text-sm text-[#6E7681]">Visual Wizard</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded border border-[#30363D] bg-[#0D1117] p-4 text-center opacity-50">
                  <div className="mb-2 text-4xl">🔥</div>
                  <div className="font-mono text-sm text-[#6E7681]">Vim Master</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

