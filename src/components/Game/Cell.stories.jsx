import React from 'react';
import Cell from './Cell';

export default {
  title: 'GAME/Cell',
  component: Cell,
  tags: ['autodocs'],
  argTypes: {
    player1Color: { control: 'color' },
    player2Color: { control: 'color' },
  },
  args: {
    player1Color: '#e74c3c',
    player2Color: '#f1c40f',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '60px', height: '60px', background: '#34495e', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export const EmptyCell = {
  args: {
    value: null,
  },
};

export const RedPlayerCell = {
  args: {
    value: 'R',
  },
};

export const YellowPlayerCell = {
  args: {
    value: 'Y',
  },
};
