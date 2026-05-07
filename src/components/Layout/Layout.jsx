/**
 * @file Layout.jsx
 * @description Компонент обгортки (Layout) додатку.
 * Включає заголовок "Connect Four" та контейнер для основного вмісту сторінки.
 * @module components/Layout/Layout
 */

import "./Layout.css";

/**
 * Компонент макету сторінки.
 * Обгортає контент сторінки у стандартну структуру з header та main.
 *
 * @function Layout
 * @param {Object} props - Властивості компонента
 * @param {React.ReactNode} props.children - Дочірні елементи, що рендеряться у `<main>`
 * @returns {React.ReactElement} Layout з хедером та основним контентом
 *
 * @example
 * <Layout>
 *   <h2>Ласкаво просимо!</h2>
 * </Layout>
 */
export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout-header">Connect Four</header>
      <main className="layout-main">{children}</main>
    </div>
  );
}
