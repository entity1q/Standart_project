/**
 * @file GameSettingsContext.jsx
 * @description React Context для зберігання та управління налаштуваннями гри.
 * Зберігає параметри у localStorage для збереження між сесіями.
 * @module context/GameSettingsContext
 */

import { createContext, useContext, useState, useEffect } from "react";

/**
 * @constant {React.Context} GameSettingsContext
 * @description Контекст для розповсюдження налаштувань гри по дереву компонентів.
 */
const GameSettingsContext = createContext();

/**
 * Провайдер налаштувань гри.
 * Завантажує налаштування з localStorage при ініціалізації та автоматично зберігає зміни.
 *
 * Налаштування за замовчуванням:
 * - `winLength` — 4 (кількість фішок для перемоги)
 * - `maxWins` — 3 (кількість перемог для виграшу матчу)
 * - `player1Color` — "red" (колір гравця 1)
 * - `player2Color` — "yellow" (колір гравця 2)
 *
 * @function GameSettingsProvider
 * @param {Object} props - Властивості компонента
 * @param {React.ReactNode} props.children - Дочірні компоненти, що отримують доступ до контексту
 * @returns {React.ReactElement} Provider з контекстом налаштувань
 */
export function GameSettingsProvider({ children }) {
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem("game-settings");
        return saved
            ? JSON.parse(saved)
            : {
                winLength: 4,
                maxWins: 3,
                player1Color: "red",
                player2Color: "yellow",
            };
    });

    useEffect(() => {
        localStorage.setItem("game-settings", JSON.stringify(settings));
    }, [settings]);

    return (
        <GameSettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </GameSettingsContext.Provider>
    );
}

/**
 * Хук для доступу до контексту налаштувань гри.
 *
 * @function useGameSettings
 * @returns {{ settings: Object, setSettings: Function }} Об'єкт з налаштуваннями та сеттером
 *
 * @example
 * const { settings, setSettings } = useGameSettings();
 * console.log(settings.winLength); // 4
 */
export const useGameSettings = () => useContext(GameSettingsContext);
