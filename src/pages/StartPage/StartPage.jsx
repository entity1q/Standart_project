/**
 * @file StartPage.jsx
 * @description Стартова сторінка додатку Connect Four.
 * Відображає привітання, кнопку старту гри та кнопку налаштувань.
 * @module pages/StartPage/StartPage
 */

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";
import Button from "../../components/UI/Button.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import SettingsForm from "./SettingsForm.jsx";
import styles from "./StartPage.module.css";

/**
 * Компонент стартової сторінки.
 * Надає кнопку для початку гри та відкриття модального вікна налаштувань.
 * Використовує URL-параметр `userId` для формування маршруту до сторінки гри.
 *
 * @function StartPage
 * @returns {React.ReactElement} Сторінка привітання з кнопками навігації
 */
export default function StartPage() {
    const [showSettings, setShowSettings] = useState(false);
    const navigate = useNavigate();
    const { userId } = useParams();

    /**
     * Переходить на сторінку гри для поточного користувача.
     */
    function handleStartGame() {
        navigate(`/user/${userId}/game`);
    }

    return (
        <Layout>
            <div className={styles.startScreen}>
                <h2>Ласкаво просимо!</h2>
                <p>Натисніть кнопку нижче, щоб розпочати гру.</p>

                <Button onClick={handleStartGame}>Почати гру</Button>
                <Button onClick={() => setShowSettings(true)}>Налаштування</Button>
            </div>

            {showSettings && (
                <Modal>
                    <SettingsForm onClose={() => setShowSettings(false)} />
                </Modal>
            )}
        </Layout>
    );
}
