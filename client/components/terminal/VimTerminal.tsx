'use client';

import { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';
import { useVimStore } from '@/stores/useVimStore';
import { THEME } from '@/constants/theme';

export function VimTerminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);

  const { mode, setMode, commandBuffer, setCommandBuffer, addMessage } = useVimStore();

  useEffect(() => {
    if (!terminalRef.current) return;

    // 터미널 초기화
    const terminal = new Terminal({
      cursorBlink: true,
      cursorStyle: 'block',
      fontFamily: THEME.fonts.mono,
      fontSize: 14,
      theme: {
        background: THEME.colors.background,
        foreground: THEME.colors.foreground,
        cursor: THEME.colors.accent,
        cursorAccent: THEME.colors.background,
        selectionBackground: THEME.colors.accent + '40',
      },
      allowProposedApi: true,
    });

    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);

    terminal.open(terminalRef.current);
    fitAddon.fit();

    xtermRef.current = terminal;
    fitAddonRef.current = fitAddon;

    // Welcome 메시지
    terminal.writeln('\x1b[1;36m╔════════════════════════════════════════╗\x1b[0m');
    terminal.writeln('\x1b[1;36m║                                        ║\x1b[0m');
    terminal.writeln('\x1b[1;36m║\x1b[0m        \x1b[1;32mWelcome to vimshin! 🚀\x1b[0m         \x1b[1;36m║\x1b[0m');
    terminal.writeln('\x1b[1;36m║                                        ║\x1b[0m');
    terminal.writeln('\x1b[1;36m╚════════════════════════════════════════╝\x1b[0m');
    terminal.writeln('');
    terminal.writeln('Type \x1b[1;33m:help\x1b[0m for instructions, or press \x1b[1;33mi\x1b[0m to start learning.');
    terminal.writeln('');

    // 키 입력 처리
    terminal.onData((data) => {
      const code = data.charCodeAt(0);

      // ESC 키
      if (code === 27) {
        setMode('normal');
        terminal.write('\r\n\x1b[32m-- NORMAL --\x1b[0m');
        return;
      }

      // Normal 모드에서의 키 입력
      if (mode === 'normal') {
        if (data === 'i') {
          setMode('insert');
          terminal.write('\r\n\x1b[34m-- INSERT --\x1b[0m\r\n');
        } else if (data === 'v') {
          setMode('visual');
          terminal.write('\r\n\x1b[33m-- VISUAL --\x1b[0m\r\n');
        } else if (data === ':') {
          setMode('command');
          terminal.write('\r\n:');
          setCommandBuffer(':');
        } else {
          terminal.write(data);
        }
      }
      // Insert 모드에서의 키 입력
      else if (mode === 'insert') {
        if (code === 13) {
          // Enter
          terminal.write('\r\n');
        } else if (code === 127) {
          // Backspace
          terminal.write('\b \b');
        } else {
          terminal.write(data);
        }
      }
      // Command 모드에서의 키 입력
      else if (mode === 'command') {
        if (code === 13) {
          // Enter - 명령 실행
          terminal.write('\r\n');
          executeCommand(commandBuffer);
          setMode('normal');
          setCommandBuffer('');
        } else if (code === 127) {
          // Backspace
          const newBuffer = commandBuffer.slice(0, -1);
          setCommandBuffer(newBuffer);
          if (newBuffer.length > 0) {
            terminal.write('\b \b');
          } else {
            setMode('normal');
          }
        } else {
          setCommandBuffer(commandBuffer + data);
          terminal.write(data);
        }
      }
    });

    const executeCommand = (cmd: string) => {
      const command = cmd.slice(1).trim(); // ':' 제거

      switch (command) {
        case 'help':
          terminal.writeln('\x1b[36mVimshin Commands:\x1b[0m');
          terminal.writeln('  :help     - Show this help');
          terminal.writeln('  :quit     - Exit terminal');
          terminal.writeln('  :clear    - Clear screen');
          terminal.writeln('');
          addMessage({ type: 'info', content: 'Help displayed' });
          break;
        case 'quit':
        case 'q':
          terminal.writeln('\x1b[32mGoodbye! 👋\x1b[0m');
          addMessage({ type: 'info', content: 'Exiting...' });
          break;
        case 'clear':
          terminal.clear();
          break;
        default:
          terminal.writeln(`\x1b[31mUnknown command: ${command}\x1b[0m`);
          addMessage({ type: 'error', content: `Unknown command: ${command}` });
      }
    };

    // 리사이즈 핸들러
    const handleResize = () => {
      fitAddon.fit();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      terminal.dispose();
    };
  }, [mode, setMode, commandBuffer, setCommandBuffer, addMessage]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-border bg-background">
      <div ref={terminalRef} className="h-full w-full p-4" />
    </div>
  );
}

