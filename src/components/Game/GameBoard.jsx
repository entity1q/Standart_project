/**
 * @file GameBoard.jsx
 * @description Компонент ігрової дошки Connect Four.
 * Рендерить сітку 6×7 з клітинок, організованих по стовпцях.
 * @module components/Game/GameBoard
 */

import Column from "./Column";
import "./GameBoard.css";
import { useGameSettings } from "../../context/GameSettingsContext";

/**
 * Ігрова дошка Connect Four (6 рядків × 7 стовпців).
 * Отримує стан поля та колбек для скидання фішки, рендерить стовпці ({@link Column}).
 * Кольори гравців беруться з {@link module:context/GameSettingsContext}.
 *
 * @function GameBoard
 * @param {Object} props - Властивості компонента
 * @param {Array<Array<string|null>>} props.board - Двовимірний масив 6×7, що представляє ігрове поле
 * @param {Function} props.onDrop - Колбек для скидання фішки у стовпець, приймає індекс стовпця
 * @returns {React.ReactElement} Сітка ігрового поля
 */
export default function GameBoard({ board, onDrop }) {
    const { settings } = useGameSettings();

    return (
        <div className="game-board">
            {board[0].map((_, columnIndex) => (
                <Column
                    key={columnIndex}
                    column={board.map((row) => row[columnIndex])}
                    onClick={() => onDrop(columnIndex)}
                    player1Color={settings.player1Color}
                    player2Color={settings.player2Color}
                />
            ))}
        </div>
    );
}
