'use client';

import { Header } from '@/components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Header />
      
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-mono text-6xl font-bold">
            <span className="text-[#51CF66]">vim</span>
            <span className="text-[#2F81F7]">shin</span>
          </h1>
          <p className="text-xl text-[#6E7681]">
            누구나 &apos;빔신&apos;이 될 수 있다
          </p>
        </div>

        <div className="space-y-12">
          {/* 프로젝트 소개 */}
          <section className="rounded-lg border border-[#30363D] bg-[#161B22] p-8">
            <h2 className="mb-4 font-mono text-2xl font-bold text-[#C9D1D9]">
              🧠 프로젝트 개요
            </h2>
            <p className="mb-4 text-[#C9D1D9]">
              vimshin(빔신)은 Vim을 처음 배우는 사용자부터 숙련자까지, 
              실습 중심으로 Vim 명령어를 학습할 수 있는 웹 기반 학습 플랫폼입니다.
            </p>
            <p className="text-[#6E7681]">
              실제 Vim 환경과 유사한 인터랙티브 터미널 UI를 구현하여, 
              명령어 입력 → 즉시 피드백 → 다음 단계로 진행하는 
              실습형 튜토리얼 방식을 취합니다.
            </p>
          </section>

          {/* 주요 기능 */}
          <section className="rounded-lg border border-[#30363D] bg-[#161B22] p-8">
            <h2 className="mb-6 font-mono text-2xl font-bold text-[#C9D1D9]">
              ✨ 주요 기능
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-mono text-lg font-semibold text-[#2F81F7]">
                  📚 단계별 학습 모듈
                </h3>
                <p className="text-[#6E7681]">
                  Level 1부터 Level 4까지 체계적인 커리큘럼으로 
                  기초부터 고급까지 학습할 수 있습니다.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-mono text-lg font-semibold text-[#2F81F7]">
                  🎮 실습 인터페이스
                </h3>
                <p className="text-[#6E7681]">
                  터미널 기반 UI로 실제 Vim 환경과 동일한 경험을 제공하며, 
                  실시간으로 명령어 효과를 확인할 수 있습니다.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-mono text-lg font-semibold text-[#2F81F7]">
                  🎯 미션 모드
                </h3>
                <p className="text-[#6E7681]">
                  실제 상황 기반 문제를 해결하며 실력을 향상시킬 수 있습니다.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-mono text-lg font-semibold text-[#2F81F7]">
                  🏆 게이미피케이션
                </h3>
                <p className="text-[#6E7681]">
                  점수, 배지, 랭킹 시스템으로 재미있게 학습할 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          {/* 기술 스택 */}
          <section className="rounded-lg border border-[#30363D] bg-[#161B22] p-8">
            <h2 className="mb-6 font-mono text-2xl font-bold text-[#C9D1D9]">
              🛠️ 기술 스택
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-mono text-lg font-semibold text-[#51CF66]">
                  Frontend
                </h3>
                <ul className="space-y-1 text-sm text-[#6E7681]">
                  <li>• Next.js 16 + React 19</li>
                  <li>• TypeScript</li>
                  <li>• TailwindCSS + shadcn/ui</li>
                  <li>• xterm.js (터미널 시뮬레이션)</li>
                  <li>• Framer Motion (애니메이션)</li>
                  <li>• Zustand (상태 관리)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-mono text-lg font-semibold text-[#2F81F7]">
                  Backend
                </h3>
                <ul className="space-y-1 text-sm text-[#6E7681]">
                  <li>• Spring Boot 3.x</li>
                  <li>• RESTful API + WebSocket</li>
                  <li>• PostgreSQL / MongoDB</li>
                  <li>• JWT 기반 인증</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 연락처 */}
          <section className="rounded-lg border border-[#30363D] bg-[#161B22] p-8 text-center">
            <h2 className="mb-4 font-mono text-2xl font-bold text-[#C9D1D9]">
              📬 문의하기
            </h2>
            <p className="mb-6 text-[#6E7681]">
              궁금한 점이나 제안사항이 있으신가요?
            </p>
            <a
              href="https://github.com/vimshin/vimshin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#2F81F7] px-6 py-3 font-mono font-semibold text-white transition-colors hover:bg-[#2F81F7]/80"
            >
              GitHub에서 보기
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}

