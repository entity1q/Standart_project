/**
 * @file useGameState.js
 * @description Кастомний React-хук, що інкапсулює всю логіку гри Connect Four.
 * Керує станом поля, ходами гравців, перевіркою переможця та нічиєї.
 * @module hooks/useGameState
 */

import { useState } from "react";
import { useGameSettings } from "../context/GameSettingsContext";

/**
 * Кастомний хук для управління станом гри Connect Four.
 *
 * Забезпечує:
 * - Ігрове поле 6×7
 * - Чергування ходів між гравцями ("R" та "Y")
 * - Скидання фішки у стовпець з анімацією "падіння"
 * - Перевірку переможця по горизонталі, вертикалі та діагоналях
 * - Перевірку нічиєї (всі клітинки заповнені)
 * - Скидання гри до початкового стану
 *
 * @function useGameState
 * @returns {Object} Об'єкт стану гри
 * @returns {Array<Array<string|null>>} returns.board - Двовимірний масив 6×7 ігрового поля
 * @returns {string} returns.currentPlayer - Поточний гравець ("R" або "Y")
 * @returns {string|null} returns.winner - Ідентифікатор переможця або null
 * @returns {boolean} returns.isDraw - Прапорець нічиєї
 * @returns {Function} returns.dropDisc - Функція для скидання фішки у стовпець
 * @returns {Function} returns.resetGame - Функція для скидання стану гри
 *
 * @example
 * const { board, currentPlayer, winner, isDraw, dropDisc, resetGame } = useGameState();
 */
export function useGameState() {
    /** @constant {Array<Array<null>>} EMPTY_BOARD - Порожнє ігрове поле 6×7 */
    const EMPTY_BOARD = Array.from({ length: 6 }, () => Array(7).fill(null));

    const { settings } = useGameSettings();
    /** @type {number} winLength - Кількість фішок у ряд для перемоги (з налаштувань) */
    const winLength = settings.winLength;

    const [board, setBoard] = useState(EMPTY_BOARD);
    const [currentPlayer, setCurrentPlayer] = useState("R");
    const [winner, setWinner] = useState(null);
    const [isDraw, setIsDraw] = useState(false);

    /**
     * Скидає фішку поточного гравця у вказаний стовпець.
     * Фішка "падає" на найнижчу вільну позицію.
     * Після ходу перевіряє перемогу та нічию.
     *
     * @param {number} columnIndex - Індекс стовпця (0-6)
     */
    function dropDisc(columnIndex) {
        if (winner || isDraw) return;

        const newBoard = board.map((row) => [...row]);

        // Падіння фішки
        for (let row = 5; row >= 0; row--) {
            if (newBoard[row][columnIndex] === null) {
                newBoard[row][columnIndex] = currentPlayer;
                break;
            }
        }

        setBoard(newBoard);

        const win = checkWinner(newBoard);
        if (win) {
            setWinner(currentPlayer);
            return;
        }

        if (checkDraw(newBoard)) {
            setIsDraw(true);
            return;
        }

        setCurrentPlayer((p) => (p === "R" ? "Y" : "R"));
    }

    /**
     * Перевіряє, чи є нічия (всі клітинки заповнені).
     *
     * @param {Array<Array<string|null>>} board - Поточний стан ігрового поля
     * @returns {boolean} true, якщо всі клітинки заповнені
     */
    function checkDraw(board) {
        return board.every((row) => row.every((cell) => cell !== null));
    }

    /**
     * Перевіряє наявність переможця на ігровому полі.
     * Шукає послідовність з `winLength` фішок одного гравця у 4 напрямках:
     * горизонталь, вертикаль, діагональ вниз-вправо, діагональ вгору-вправо.
     *
     * @param {Array<Array<string|null>>} board - Поточний стан ігрового поля
     * @returns {string|null} Ідентифікатор переможця ("R" або "Y") або null
     */
    function checkWinner(board) {
        const directions = [
            { x: 1, y: 0 },   // горизонталь
            { x: 0, y: 1 },   // вертикаль
            { x: 1, y: 1 },   // діагональ вниз вправо
            { x: 1, y: -1 },  // діагональ вгору вправо
        ];

        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                const player = board[row][col];
                if (!player) continue;

                for (const { x, y } of directions) {
                    if (checkLine(board, row, col, x, y, player)) {
                        return player;
                    }
                }
            }
        }
        return null;
    }

    /**
     * Перевіряє лінію з `winLength` фішок одного гравця від заданої позиції.
     *
     * @param {Array<Array<string|null>>} board - Ігрове поле
     * @param {number} r - Початковий рядок
     * @param {number} c - Початковий стовпець
     * @param {number} dx - Зміщення по стовпцю на кожному кроці
     * @param {number} dy - Зміщення по рядку на кожному кроці
     * @param {string} player - Ідентифікатор гравця ("R" або "Y")
     * @returns {boolean} true, якщо знайдено лінію з `winLength` фішок
     */
    function checkLine(board, r, c, dx, dy, player) {
        for (let i = 1; i < winLength; i++) {
            const nr = r + dy * i;
            const nc = c + dx * i;

            if (nr < 0 || nr >= 6 || nc < 0 || nc >= 7) return false;
            if (board[nr][nc] !== player) return false;
        }
        return true;
    }

    /**
     * Скидає гру до початкового стану:
     * очищає поле, встановлює гравця "R" як поточного,
     * скидає переможця та прапорець нічиєї.
     */
    function resetGame() {
        setBoard(EMPTY_BOARD);
        setCurrentPlayer("R");
        setWinner(null);
        setIsDraw(false);
    }

    return {
        board,
        currentPlayer,
        winner,
        isDraw,
        dropDisc,
        resetGame,
    };
}
