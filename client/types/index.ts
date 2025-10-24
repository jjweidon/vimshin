// Vim 모드 타입
export type VimMode = 'normal' | 'insert' | 'visual' | 'command';

// 학습 레벨 타입
export type LearningLevel = 1 | 2 | 3 | 4;

// 사용자 진행도 타입
export interface UserProgress {
  userId: string;
  completedLevels: number[];
  completedMissions: string[];
  totalScore: number;
  badges: string[];
  lastAccessDate: Date;
}

// 미션 타입
export interface Mission {
  id: string;
  title: string;
  description: string;
  level: LearningLevel;
  initialText: string;
  targetText: string;
  hints: string[];
  timeLimit?: number;
  maxScore: number;
}

// 학습 레슨 타입
export interface Lesson {
  id: string;
  level: LearningLevel;
  title: string;
  description: string;
  objectives: string[];
  commands: Command[];
  practice: Practice;
}

// 명령어 타입
export interface Command {
  key: string;
  description: string;
  example: string;
  category: 'motion' | 'edit' | 'visual' | 'command';
}

// 연습 타입
export interface Practice {
  instructions: string;
  initialText: string;
  expectedActions: string[];
}

// 터미널 출력 메시지 타입
export interface TerminalMessage {
  id: string;
  type: 'info' | 'error' | 'success' | 'warning';
  content: string;
  timestamp: Date;
}

// 사용자 타입
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  provider: 'github' | 'google';
  createdAt: Date;
}

// 배지 타입
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

