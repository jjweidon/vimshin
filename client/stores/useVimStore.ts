import { create } from 'zustand';
import { VimMode, TerminalMessage } from '@/types';

interface VimState {
  // 현재 Vim 모드
  mode: VimMode;
  setMode: (mode: VimMode) => void;

  // 터미널 내용
  content: string;
  setContent: (content: string) => void;

  // 커서 위치
  cursorPosition: { line: number; col: number };
  setCursorPosition: (position: { line: number; col: number }) => void;

  // 메시지 히스토리
  messages: TerminalMessage[];
  addMessage: (message: Omit<TerminalMessage, 'id' | 'timestamp'>) => void;
  clearMessages: () => void;

  // 현재 명령어 버퍼
  commandBuffer: string;
  setCommandBuffer: (buffer: string) => void;
  clearCommandBuffer: () => void;

  // 입력 히스토리
  inputHistory: string[];
  addToHistory: (input: string) => void;
}

export const useVimStore = create<VimState>((set) => ({
  mode: 'normal',
  setMode: (mode) => set({ mode }),

  content: '',
  setContent: (content) => set({ content }),

  cursorPosition: { line: 0, col: 0 },
  setCursorPosition: (position) => set({ cursorPosition: position }),

  messages: [],
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: Math.random().toString(36).substr(2, 9),
          timestamp: new Date(),
        },
      ],
    })),
  clearMessages: () => set({ messages: [] }),

  commandBuffer: '',
  setCommandBuffer: (buffer) => set({ commandBuffer: buffer }),
  clearCommandBuffer: () => set({ commandBuffer: '' }),

  inputHistory: [],
  addToHistory: (input) =>
    set((state) => ({
      inputHistory: [...state.inputHistory, input],
    })),
}));

