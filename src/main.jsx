/**
 * @file main.jsx
 * @description Точка входу React-додатку Connect Four.
 * Монтує кореневий компонент App у DOM, обгортаючи його у BrowserRouter та GameSettingsProvider.
 * @module main
 * @author Піхало Антон Миколайович
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GameSettingsProvider } from "./context/GameSettingsContext";

/**
 * Ініціалізація React-додатку.
 * Рендерить компонент {@link App} всередині StrictMode, BrowserRouter та GameSettingsProvider.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <GameSettingsProvider>
                <App />
            </GameSettingsProvider>
        </BrowserRouter>
    </React.StrictMode>
);
