import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, UserProgress } from '@/types';

interface UserState {
  // 사용자 정보
  user: User | null;
  setUser: (user: User | null) => void;

  // 진행도
  progress: UserProgress | null;
  setProgress: (progress: UserProgress) => void;

  // 로그인 상태
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;

  // 레벨 완료
  completeLevel: (level: number) => void;

  // 미션 완료
  completeMission: (missionId: string, score: number) => void;

  // 배지 추가
  addBadge: (badgeId: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user, isAuthenticated: !!user }),

      progress: null,
      setProgress: (progress) => set({ progress }),

      isAuthenticated: false,

      login: (user) =>
        set({
          user,
          isAuthenticated: true,
          progress: {
            userId: user.id,
            completedLevels: [],
            completedMissions: [],
            totalScore: 0,
            badges: [],
            lastAccessDate: new Date(),
          },
        }),

      logout: () =>
        set({
          user: null,
          progress: null,
          isAuthenticated: false,
        }),

      completeLevel: (level) =>
        set((state) => {
          if (!state.progress) return state;
          return {
            progress: {
              ...state.progress,
              completedLevels: [...new Set([...state.progress.completedLevels, level])],
            },
          };
        }),

      completeMission: (missionId, score) =>
        set((state) => {
          if (!state.progress) return state;
          return {
            progress: {
              ...state.progress,
              completedMissions: [
                ...new Set([...state.progress.completedMissions, missionId]),
              ],
              totalScore: state.progress.totalScore + score,
            },
          };
        }),

      addBadge: (badgeId) =>
        set((state) => {
          if (!state.progress) return state;
          return {
            progress: {
              ...state.progress,
              badges: [...new Set([...state.progress.badges, badgeId])],
            },
          };
        }),
    }),
    {
      name: 'vimshin-user-storage',
    }
  )
);

