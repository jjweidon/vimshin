// 터미널 스타일 테마 컬러 팔레트
export const THEME = {
  colors: {
    background: '#0D1117',
    foreground: '#C9D1D9',
    accent: '#2F81F7',
    error: '#FF6B6B',
    success: '#51CF66',
    warning: '#FFD43B',
    muted: '#6E7681',
    border: '#30363D',
  },
  fonts: {
    mono: 'var(--font-geist-mono)',
    sans: 'var(--font-geist-sans)',
  },
} as const;

// Vim 모드별 컬러
export const MODE_COLORS = {
  normal: '#51CF66',
  insert: '#2F81F7',
  visual: '#FFD43B',
  command: '#FF6B6B',
} as const;

