/**
 * @file Column.jsx
 * @description Компонент стовпця ігрового поля Connect Four.
 * Відображає вертикальний ряд клітинок та обробляє клік для скидання фішки.
 * @module components/Game/Column
 */

import Cell from "./Cell";

/**
 * Стовпець ігрового поля.
 * Рендерить масив клітинок ({@link Cell}) і реагує на клік для скидання фішки у стовпець.
 *
 * @function Column
 * @param {Object} props - Властивості компонента
 * @param {Array<string|null>} props.column - Масив значень клітинок у стовпці (зверху вниз)
 * @param {Function} props.onClick - Обробник кліку по стовпцю (скидання фішки)
 * @param {string} props.player1Color - CSS-колір фішки гравця 1
 * @param {string} props.player2Color - CSS-колір фішки гравця 2
 * @returns {React.ReactElement} Div зі списком компонентів Cell
 */
export default function Column({ column, onClick, player1Color, player2Color }) {
    return (
        <div onClick={onClick}>
            {column.map((value, index) => (
                <Cell
                    key={index}
                    value={value}
                    player1Color={player1Color}
                    player2Color={player2Color}
                />
            ))}
        </div>
    );
}
