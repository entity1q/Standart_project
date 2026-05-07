/**
 * @file Cell.jsx
 * @description Компонент окремої клітинки ігрового поля Connect Four.
 * Відображає фішку гравця або порожню клітинку відповідного кольору.
 * @module components/Game/Cell
 */

import "./Cell.css";

/**
 * Клітинка ігрового поля.
 * Колір визначається на основі значення: "R" — гравець 1, "Y" — гравець 2, null — порожня (біла).
 *
 * @function Cell
 * @param {Object} props - Властивості компонента
 * @param {string|null} props.value - Значення клітинки: "R" (гравець 1), "Y" (гравець 2) або null (порожня)
 * @param {string} props.player1Color - CSS-колір фішки гравця 1
 * @param {string} props.player2Color - CSS-колір фішки гравця 2
 * @returns {React.ReactElement} Div з фоновим кольором відповідного гравця
 */
export default function Cell({ value, player1Color, player2Color }) {
    let color = "white";

    if (value === "R") color = player1Color;
    if (value === "Y") color = player2Color;

    return (
        <div
            className="cell"
            style={{
                background: color,
            }}
        />
    );
}
