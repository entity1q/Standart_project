/**
 * @file GameOverModal.jsx
 * @description Модальне вікно завершення раунду або матчу.
 * Показує результат гри (перемога / нічия), рахунок та кнопки навігації.
 * @module components/Game/GameOverModal
 */

import Modal from "../Modal/Modal";

/**
 * Модальне вікно завершення гри.
 * Відображає різний вміст залежно від того, завершився раунд чи весь матч.
 *
 * @function GameOverModal
 * @param {Object} props - Властивості компонента
 * @param {string|null} props.winner - Ідентифікатор переможця ("R" або "Y"), або null при нічиїй
 * @param {boolean} props.isDraw - Прапорець нічиєї
 * @param {Object} props.wins - Об'єкт з кількістю перемог кожного гравця
 * @param {number} props.wins.R - Кількість перемог гравця R
 * @param {number} props.wins.Y - Кількість перемог гравця Y
 * @param {boolean} props.isFinal - Прапорець фінального завершення матчу (досягнуто maxWins)
 * @param {Function} props.onNextRound - Колбек для початку наступного раунду
 * @param {Function} props.onRestart - Колбек для повернення в головне меню
 * @returns {React.ReactElement} Модальне вікно з результатом гри
 */
export default function GameOverModal({
                                          winner,
                                          isDraw,
                                          wins,
                                          isFinal,
                                          onNextRound,
                                          onRestart,
                                      }) {
    const scoreText = `R — ${wins.R} | Y — ${wins.Y}`;

    return (
        <Modal>
            {isFinal ? (
                <>
                    <h2>Матч завершено!</h2>
                    <p>🏆 Переміг гравець: {winner}</p>
                    <p style={{ fontWeight: "bold" }}>Фінальний рахунок: {scoreText}</p>
                    <button onClick={onRestart}>Повернутися в меню</button>
                </>
            ) : (
                <>
                    <h2>Гру завершено</h2>
                    <p>{isDraw ? "Нічия!" : `Переміг гравець: ${winner}`}</p>
                    <p style={{ fontWeight: "bold" }}>Рахунок: {scoreText}</p>

                    <button onClick={onNextRound}>Наступний тур</button>
                    <button onClick={onRestart}>Повернутися в меню</button>
                </>
            )}
        </Modal>
    );
}
