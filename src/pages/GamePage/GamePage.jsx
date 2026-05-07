/**
 * @file GamePage.jsx
 * @description Сторінка гри Connect Four.
 * Відображає ігрове поле, інформацію про поточний хід, рахунок та модальне вікно завершення.
 * @module pages/GamePage/GamePage
 */

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import GameBoard from "../../components/Game/GameBoard";
import Button from "../../components/UI/Button";
import { useGameState } from "../../hooks/useGameState";
import GameOverModal from "../../components/Game/GameOverModal";
import { useGameSettings } from "../../context/GameSettingsContext";

import styles from "./GamePage.module.css"; //

/**
 * Компонент сторінки гри Connect Four.
 * Управляє процесом гри: відображає ігрове поле ({@link GameBoard}),
 * відстежує рахунок перемог по раундах, визначає фінального переможця матчу
 * та показує модальне вікно результату ({@link GameOverModal}).
 *
 * @function GamePage
 * @returns {React.ReactElement} Сторінка з ігровим полем та елементами управління
 */
export default function GamePage() {
    const navigate = useNavigate();
    const { userId } = useParams();

    const game = useGameState();
    const { settings } = useGameSettings();

    /** @type {Object} wins - Об'єкт з кількістю перемог кожного гравця у поточному матчі */
    const [wins, setWins] = useState({ R: 0, Y: 0 });
    /** @type {string|null} finalWinner - Ідентифікатор фінального переможця матчу */
    const [finalWinner, setFinalWinner] = useState(null);

    /**
     * Ефект відстеження перемоги.
     * При кожній перемозі оновлює лічильник та перевіряє досягнення maxWins.
     */
    useEffect(() => {
        if (game.winner) {
            setWins((prev) => {
                const updated = {
                    ...prev,
                    [game.winner]: prev[game.winner] + 1,
                };

                if (updated[game.winner] >= settings.maxWins) {
                    setFinalWinner(game.winner);
                }

                return updated;
            });
        }
    }, [game.winner, settings.maxWins]);

    /**
     * Повертає користувача до стартової сторінки.
     */
    function returnToMenu() {
        navigate(`/user/${userId}/start`);
    }

    return (
        <Layout>
            {(game.winner || game.isDraw || finalWinner) && (
                <GameOverModal
                    winner={finalWinner || game.winner}
                    isDraw={game.isDraw}
                    wins={wins}
                    isFinal={!!finalWinner}
                    onNextRound={() => game.resetGame()}
                    onRestart={returnToMenu}
                />
            )}

            <div className={styles.gamePage}>
                <p className={styles.playerTurn}>
                    Хід гравця: {game.currentPlayer}
                </p>

                <GameBoard board={game.board} onDrop={game.dropDisc} />

                <div className={styles.resetButton}>
                    <Button onClick={game.resetGame}>Скинути гру</Button>
                </div>
            </div>
        </Layout>
    );
}
