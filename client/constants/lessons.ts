import { Lesson } from '@/types';

// 레벨별 학습 레슨 데이터
export const LESSONS: Lesson[] = [
  {
    id: 'level-1-motion',
    level: 1,
    title: '커서 이동 마스터하기',
    description: 'Vim의 가장 기본적인 커서 이동 명령어를 배웁니다.',
    objectives: [
      'h, j, k, l로 커서 이동하기',
      'w, b로 단어 단위 이동하기',
      '0, $로 줄 시작/끝으로 이동하기',
    ],
    commands: [
      {
        key: 'h',
        description: '왼쪽으로 이동',
        example: 'h를 누르면 커서가 한 칸 왼쪽으로 이동합니다',
        category: 'motion',
      },
      {
        key: 'j',
        description: '아래로 이동',
        example: 'j를 누르면 커서가 한 줄 아래로 이동합니다',
        category: 'motion',
      },
      {
        key: 'k',
        description: '위로 이동',
        example: 'k를 누르면 커서가 한 줄 위로 이동합니다',
        category: 'motion',
      },
      {
        key: 'l',
        description: '오른쪽으로 이동',
        example: 'l을 누르면 커서가 한 칸 오른쪽으로 이동합니다',
        category: 'motion',
      },
    ],
    practice: {
      instructions: 'hjkl 키를 사용하여 커서를 "X" 위치로 이동시키세요.',
      initialText: 'Start here\n\nMove to X\n\nGood luck!',
      expectedActions: ['j', 'j', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l'],
    },
  },
  {
    id: 'level-2-insert',
    level: 2,
    title: '입력 모드 전환',
    description: 'Normal 모드에서 Insert 모드로 전환하는 다양한 방법을 학습합니다.',
    objectives: [
      'i, a로 입력 모드 진입하기',
      'I, A로 줄 시작/끝에서 입력하기',
      'o, O로 새 줄 만들기',
    ],
    commands: [
      {
        key: 'i',
        description: '커서 앞에서 입력 모드 시작',
        example: 'i를 누르면 현재 커서 위치에서 입력을 시작합니다',
        category: 'edit',
      },
      {
        key: 'a',
        description: '커서 뒤에서 입력 모드 시작',
        example: 'a를 누르면 커서 다음 위치에서 입력을 시작합니다',
        category: 'edit',
      },
      {
        key: 'o',
        description: '아래에 새 줄 만들고 입력 모드',
        example: 'o를 누르면 현재 줄 아래에 새 줄을 만들고 입력을 시작합니다',
        category: 'edit',
      },
    ],
    practice: {
      instructions: 'i를 눌러 입력 모드로 전환하고, "Hello"를 입력한 후 ESC로 돌아오세요.',
      initialText: '',
      expectedActions: ['i', 'H', 'e', 'l', 'l', 'o', '<Esc>'],
    },
  },
];

