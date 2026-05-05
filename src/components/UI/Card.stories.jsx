import Card from './Card';

export default {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
};


export const Default = {
  args: {
    children: 'Це базова картка з контентом всередині.',
  },
};


export const LargeContent = {
  args: {
    children: (
      <div>
        <h3>Заголовок картки</h3>
        <p>Тут може бути опис гри, результати раунду або будь-яка інша інформація.</p>
      </div>
    ),
  },
};