/**
 * @file Button.jsx
 * @description Універсальний UI-компонент кнопки.
 * Використовується на всіх сторінках додатку для дій користувача.
 * @module components/UI/Button
 */

import "./Button.css";

/**
 * Компонент кнопки загального призначення.
 *
 * @function Button
 * @param {Object} props - Властивості компонента
 * @param {React.ReactNode} props.children - Текст або елементи всередині кнопки
 * @param {Function} props.onClick - Обробник натискання на кнопку
 * @returns {React.ReactElement} Кнопка з CSS-класом `ui-btn`
 *
 * @example
 * <Button onClick={() => console.log("Натиснуто!")}>Почати гру</Button>
 */
export default function Button({ children, onClick }) {
  return (
    <button className="ui-btn" onClick={onClick}>
      {children}
    </button>
  );
}
