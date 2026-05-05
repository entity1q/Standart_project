import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' }
  },
};

export const StartGame = {
  args: {
    children: 'Почати гру',
  },
};

export const Settings = {
  args: {
    children: 'Налаштування',
  },
};