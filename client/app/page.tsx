'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-6 font-mono text-6xl font-bold">
            <span className="text-[#51CF66]">vim</span>
            <span className="text-[#2F81F7]">shin</span>
          </h1>
          
          <p className="mb-4 text-2xl text-[#C9D1D9]">
            누구나 &apos;빔신&apos;이 될 수 있다
          </p>
          
          <p className="mb-12 text-lg text-[#6E7681]">
            Vim 고수가 되는 길, 실습 중심 학습 플랫폼
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/learn"
              className="rounded-lg bg-[#2F81F7] px-8 py-3 font-mono text-lg font-semibold text-white transition-colors hover:bg-[#2F81F7]/80"
            >
              학습 시작하기
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-[#30363D] px-8 py-3 font-mono text-lg font-semibold text-[#C9D1D9] transition-colors hover:border-[#2F81F7] hover:text-[#2F81F7]"
            >
              더 알아보기
            </Link>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-32 grid gap-8 md:grid-cols-3"
        >
          <div className="rounded-lg border border-[#30363D] bg-[#0D1117] p-6 transition-colors hover:border-[#2F81F7]">
            <div className="mb-4 text-4xl">🎯</div>
            <h3 className="mb-2 font-mono text-xl font-bold text-[#C9D1D9]">
              실습 중심 학습
            </h3>
            <p className="text-[#6E7681]">
              실제 Vim 환경과 동일한 체험형 학습으로 명령어를 익힙니다
            </p>
          </div>

          <div className="rounded-lg border border-[#30363D] bg-[#0D1117] p-6 transition-colors hover:border-[#2F81F7]">
            <div className="mb-4 text-4xl">📊</div>
            <h3 className="mb-2 font-mono text-xl font-bold text-[#C9D1D9]">
              단계별 커리큘럼
            </h3>
            <p className="text-[#6E7681]">
              기초부터 고급까지 체계적인 레벨 시스템으로 학습합니다
            </p>
          </div>

          <div className="rounded-lg border border-[#30363D] bg-[#0D1117] p-6 transition-colors hover:border-[#2F81F7]">
            <div className="mb-4 text-4xl">🏆</div>
            <h3 className="mb-2 font-mono text-xl font-bold text-[#C9D1D9]">
              게이미피케이션
            </h3>
            <p className="text-[#6E7681]">
              점수, 배지, 랭킹 시스템으로 재미있게 학습합니다
            </p>
          </div>
        </motion.div>

        {/* Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-32"
        >
          <h2 className="mb-8 text-center font-mono text-3xl font-bold text-[#C9D1D9]">
            터미널 스타일 학습 환경
          </h2>
          <div className="mx-auto max-w-4xl rounded-lg border border-[#30363D] bg-[#0D1117] p-8 font-mono">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#FF6B6B]"></div>
              <div className="h-3 w-3 rounded-full bg-[#FFD43B]"></div>
              <div className="h-3 w-3 rounded-full bg-[#51CF66]"></div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-[#51CF66]">$ vimshin --start</p>
              <p className="text-[#C9D1D9]">Welcome to vimshin! 🚀</p>
              <p className="text-[#6E7681]">Type :help for instructions</p>
              <p className="text-[#2F81F7]">-- NORMAL MODE --</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
