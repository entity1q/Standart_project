import React from 'react';
import GameBoard from './GameBoard';
import { GameSettingsProvider } from '../../context/GameSettingsContext';

const emptyBoard = Array(6).fill(Array(7).fill(null));

const inProgressBoard = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, 'R', null, null, null],
  [null, null, 'Y', 'Y', null, null, null],
  [null, 'R', 'R', 'Y', 'R', null, null],
];

const winBoard = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, 'R', null, null, null, null],
  [null, null, 'R', 'Y', null, null, null],
  [null, 'Y', 'R', 'Y', null, null, null],
  ['Y', 'R', 'R', 'Y', 'R', null, null],
];

export default {
  title: 'GAME/GameBoard',
  component: GameBoard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GameSettingsProvider>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <Story />
        </div>
      </GameSettingsProvider>
    ),
  ],
  argTypes: {
    onDrop: { action: 'Column dropped' },
  },
};

export const EmptyBoard = {
  args: {
    board: emptyBoard,
  },
};

export const GameInProgress = {
  args: {
    board: inProgressBoard,
  },
};

export const WinningState = {
  args: {
    board: winBoard,
  },
};
