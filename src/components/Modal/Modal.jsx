/**
 * @file Modal.jsx
 * @description Компонент модального вікна на основі React Portal.
 * Рендерить вміст у окремий DOM-вузол `#modal-root` поза основним деревом компонентів.
 * @module components/Modal/Modal
 */

import { createPortal } from "react-dom";
import "./Modal.css";

/**
 * Універсальний компонент модального вікна.
 * Використовує `createPortal` для рендерингу вмісту в DOM-елемент `#modal-root`.
 *
 * @function Modal
 * @param {Object} props - Властивості компонента
 * @param {React.ReactNode} props.children - Вміст модального вікна
 * @returns {React.ReactPortal} Портал з overlay та вмістом модального вікна
 *
 * @example
 * <Modal>
 *   <h2>Заголовок</h2>
 *   <p>Вміст модального вікна</p>
 * </Modal>
 */
export default function Modal({ children }) {
    return createPortal(
        <div className="modal-overlay">
            <div className="modal">{children}</div>
        </div>,
        document.getElementById("modal-root")
    );
}
