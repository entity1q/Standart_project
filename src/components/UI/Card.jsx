/**
 * @file Card.jsx
 * @description UI-компонент картки-контейнера.
 * Слугує обгорткою для групування вмісту з візуальним оформленням.
 * @module components/UI/Card
 */

import "./Card.css";

/**
 * Компонент картки (Card) — контейнер для вмісту.
 *
 * @function Card
 * @param {Object} props - Властивості компонента
 * @param {React.ReactNode} props.children - Дочірні елементи для відображення всередині картки
 * @returns {React.ReactElement} Div-контейнер з CSS-класом `card`
 *
 * @example
 * <Card>
 *   <h3>Заголовок</h3>
 *   <p>Вміст картки</p>
 * </Card>
 */
export default function Card({ children }) {
  return <div className="card">{children}</div>;
}
