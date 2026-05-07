import React from 'react';
import Card from './Card';
import Button from './Button';
import { fn } from '@storybook/test';

export default {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
};


export const StartMenuPanel = {
  args: {
    children: (
      <div style={{ textAlign: 'center', padding: '10px' }}>
        <h2 style={{ marginBottom: '15px' }}>Ласкаво просимо!</h2>
        <p style={{ marginBottom: '20px' }}>Натисніть кнопку нижче, щоб розпочати гру.</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <Button onClick={fn()}>Почати гру</Button>
          <Button onClick={fn()}>Налаштування</Button>
        </div>
      </div>
    ),
  },
};


export const GameInfoPanel = {
  args: {
    children: (
      <div style={{ textAlign: 'center', padding: '10px' }}>
        <h3 style={{ margin: '0 0 15px 0' }}>Статистика матчу</h3>
        <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '15px 0', color: '#e74c3c' }}>
          Хід гравця: R
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0', background: '#f8f9fa', padding: '10px', borderRadius: '8px' }}>
          <div>
            <strong style={{ color: '#e74c3c' }}>Гравець R (Червоний)</strong>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>2</div>
          </div>
          <div>
            <strong style={{ color: '#f1c40f' }}>Гравець Y (Жовтий)</strong>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>1</div>
          </div>
        </div>
        <Button onClick={fn()}>Скинути гру</Button>
      </div>
    ),
  },
};