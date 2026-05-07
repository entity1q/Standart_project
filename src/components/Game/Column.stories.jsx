import React from 'react';
import Column from './Column';

export default {
  title: 'GAME/Column',
  component: Column,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'Column clicked' },
    player1Color: { control: 'color' },
    player2Color: { control: 'color' },
  },
  args: {
    player1Color: '#e74c3c',
    player2Color: '#f1c40f',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '80px', background: '#34495e', padding: '10px', borderRadius: '10px' }}>
        <Story />
      </div>
    ),
  ],
};

export const EmptyColumn = {
  args: {
    column: [null, null, null, null, null, null],
  },
};

export const PartiallyFilled = {
  args: {
    column: [null, null, null, 'R', 'Y', 'R'],
  },
};

export const FullColumn = {
  args: {
    column: ['Y', 'R', 'Y', 'R', 'Y', 'R'],
  },
};
