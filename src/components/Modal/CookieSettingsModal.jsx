/**
 * @file CookieSettingsModal.jsx
 * @description Модальне вікно для налаштування згоди на файли cookie (GDPR).
 * @module components/Modal/CookieSettingsModal
 */

import { useState } from "react";
import Modal from "./Modal";
import Button from "../UI/Button";
import "./CookieSettingsModal.css";

/**
 * Компонент модального вікна налаштувань cookie.
 * @function CookieSettingsModal
 * @param {Object} props
 * @param {Function} props.onClose - Закриття вікна без збереження
 * @param {Function} props.onSave - Збереження налаштувань
 */
export default function CookieSettingsModal({ onClose, onSave }) {
    const [prefs, setPrefs] = useState({
        necessary: true,
        analytics: false,
        marketing: false
    });

    const handleToggle = (key) => {
        if (key === "necessary") return;
        setPrefs(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <Modal>
            <div className="cookie-settings">
                <h2>Налаштування файлів cookie</h2>
                <p>Виберіть, які файли cookie ви погоджуєтесь використовувати.</p>
                
                <label>
                    <input type="checkbox" checked={prefs.necessary} readOnly />
                    <div>
                        <strong>Необхідні</strong>
                        <div style={{fontSize: "12px", color: "#666"}}>Ці файли cookie потрібні для роботи сайту і не можуть бути вимкнені.</div>
                    </div>
                </label>
                
                <label>
                    <input type="checkbox" checked={prefs.analytics} onChange={() => handleToggle("analytics")} />
                    <div>
                        <strong>Аналітичні</strong>
                        <div style={{fontSize: "12px", color: "#666"}}>Допомагають нам зрозуміти, як відвідувачі взаємодіють із сайтом.</div>
                    </div>
                </label>

                <label>
                    <input type="checkbox" checked={prefs.marketing} onChange={() => handleToggle("marketing")} />
                    <div>
                        <strong>Маркетингові</strong>
                        <div style={{fontSize: "12px", color: "#666"}}>Використовуються для відстеження відвідувачів з метою показу релевантної реклами.</div>
                    </div>
                </label>

                <div className="actions">
                    <Button onClick={onClose}>Скасувати</Button>
                    <Button onClick={() => onSave(prefs)}>Зберегти налаштування</Button>
                </div>
            </div>
        </Modal>
    );
}
