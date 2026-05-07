import React from 'react';
import GameOverModal from './GameOverModal';

export default {
  title: 'MODALS/GameOverModal',
  component: GameOverModal,
  tags: ['autodocs'],
  argTypes: {
    onNextRound: { action: 'Next round clicked' },
    onRestart: { action: 'Restart clicked' },
  },
};

export const PlayerRWinsRound = {
  args: {
    winner: 'R',
    isDraw: false,
    wins: { R: 1, Y: 0 },
    isFinal: false,
  },
};

export const MatchWonByPlayerY = {
  args: {
    winner: 'Y',
    isDraw: false,
    wins: { R: 1, Y: 3 },
    isFinal: true,
  },
};

export const DrawRound = {
  args: {
    winner: null,
    isDraw: true,
    wins: { R: 1, Y: 1 },
    isFinal: false,
  },
};
