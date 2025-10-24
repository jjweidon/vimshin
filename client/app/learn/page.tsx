'use client';

import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { StatusBar } from '@/components/terminal/StatusBar';

// VimTerminal은 브라우저 환경에서만 동작하므로 동적 임포트 사용
const VimTerminal = dynamic(
  () => import('@/components/terminal/VimTerminal').then((mod) => ({ default: mod.VimTerminal })),
  { ssr: false, loading: () => <div className="flex h-full items-center justify-center text-[#6E7681]">Loading terminal...</div> }
);

export default function LearnPage() {
  return (
    <div className="flex h-screen flex-col bg-[#0D1117]">
      <Header />
      
      <main className="flex flex-1 overflow-hidden">
        {/* 학습 가이드 사이드바 */}
        <aside className="w-80 border-r border-[#30363D] bg-[#0D1117] p-6 overflow-y-auto">
          <h2 className="mb-6 font-mono text-2xl font-bold text-[#C9D1D9]">
            Level 1: 커서 이동
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-mono text-lg font-semibold text-[#2F81F7]">
                학습 목표
              </h3>
              <ul className="space-y-2 text-sm text-[#6E7681]">
                <li>• h, j, k, l로 커서 이동하기</li>
                <li>• w, b로 단어 단위 이동하기</li>
                <li>• 0, $로 줄 시작/끝으로 이동하기</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-mono text-lg font-semibold text-[#2F81F7]">
                명령어
              </h3>
              <div className="space-y-3">
                <div className="rounded border border-[#30363D] bg-[#161B22] p-3">
                  <div className="mb-1 font-mono text-sm font-bold text-[#51CF66]">h</div>
                  <div className="text-xs text-[#6E7681]">왼쪽으로 이동</div>
                </div>
                <div className="rounded border border-[#30363D] bg-[#161B22] p-3">
                  <div className="mb-1 font-mono text-sm font-bold text-[#51CF66]">j</div>
                  <div className="text-xs text-[#6E7681]">아래로 이동</div>
                </div>
                <div className="rounded border border-[#30363D] bg-[#161B22] p-3">
                  <div className="mb-1 font-mono text-sm font-bold text-[#51CF66]">k</div>
                  <div className="text-xs text-[#6E7681]">위로 이동</div>
                </div>
                <div className="rounded border border-[#30363D] bg-[#161B22] p-3">
                  <div className="mb-1 font-mono text-sm font-bold text-[#51CF66]">l</div>
                  <div className="text-xs text-[#6E7681]">오른쪽으로 이동</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-mono text-lg font-semibold text-[#2F81F7]">
                연습하기
              </h3>
              <p className="text-sm text-[#6E7681]">
                오른쪽 터미널에서 h, j, k, l 키를 사용하여 커서를 움직여보세요.
              </p>
            </div>
          </div>
        </aside>

        {/* 터미널 영역 */}
        <div className="flex flex-1 flex-col">
          <div className="flex-1">
            <VimTerminal />
          </div>
          <StatusBar />
        </div>
      </main>
    </div>
  );
}

