'use client';

import { useVimStore } from '@/stores/useVimStore';
import { MODE_COLORS } from '@/constants/theme';

export function StatusBar() {
  const { mode, cursorPosition } = useVimStore();

  const getModeColor = () => {
    return MODE_COLORS[mode];
  };

  return (
    <div className="flex items-center justify-between border-t border-border bg-background/50 px-4 py-2 font-mono text-sm backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div
          className="rounded px-2 py-1 font-bold uppercase"
          style={{ backgroundColor: getModeColor(), color: '#0D1117' }}
        >
          {mode}
        </div>
        <div className="text-muted-foreground">
          Line {cursorPosition.line + 1}, Col {cursorPosition.col + 1}
        </div>
      </div>
      <div className="text-muted-foreground">vimshin v1.0.0</div>
    </div>
  );
}

