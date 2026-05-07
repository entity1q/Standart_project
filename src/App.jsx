/**
 * @file App.jsx
 * @description Кореневий компонент додатку Connect Four.
 * Визначає маршрути додатку та відображає Cookie Consent банер відповідно до GDPR.
 * @module App
 * @author Піхало Антон Миколайович
 */

import React, { useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage.jsx";
import GamePage from "./pages/GamePage/GamePage.jsx";
import CookieSettingsModal from "./components/Modal/CookieSettingsModal.jsx";

/**
 * Кореневий компонент додатку.
 * Містить налаштування маршрутизації (react-router-dom) та Cookie Consent банер (GDPR).
 *
 * Маршрути:
 * - `/` → редірект на `/user/guest/start`
 * - `/user/:userId/start` → {@link StartPage}
 * - `/user/:userId/game` → {@link GamePage}
 * - `*` → 404 сторінка
 *
 * @function App
 * @returns {React.ReactElement} Кореневий JSX-елемент додатку
 */
function App() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  const handleSaveCookieSettings = (prefs) => {
    localStorage.setItem("cookie-prefs", JSON.stringify(prefs));
    document.cookie = "ConnectFourCookies=true; max-age=12960000; path=/";
    setShowCookieSettings(false);
    window.location.reload(); // Перезавантажити, щоб приховати банер
  };

  return (
    <>
      <Routes>
        {/* редірект з кореня */}
        <Route path="/" element={<Navigate to="/user/guest/start" replace />} />

        {/* стартова сторінка з id користувача */}
        <Route path="/user/:userId/start" element={<StartPage />} />

        {/* сторінка гри */}
        <Route path="/user/:userId/game" element={<GamePage />} />

        {/* 404 — сторінка не знайдена */}
        <Route path="*" element={<h2>404 — Сторінку не знайдено</h2>} />
      </Routes>

      <CookieConsent
        location="bottom"
        buttonText="Прийняти всі"
        enableDeclineButton
        declineButtonText="Відхилити"
        cookieName="ConnectFourCookies"
        style={{ 
          background: "#2B373B", 
          color: "#fff", 
          textAlign: "left",
          fontSize: "14px" 
        }}
        buttonStyle={{
          background: "#ffd700",
          color: "#4e503b",
          fontSize: "13px",
          fontWeight: "bold",
          borderRadius: "5px",
          padding: "10px 20px"
        }}
        declineButtonStyle={{
          background: "transparent",
          color: "#ffd700",
          border: "1px solid #ffd700",
          fontSize: "13px",
          fontWeight: "bold",
          borderRadius: "5px",
          padding: "10px 20px"
        }}
        expires={150}
      >
        Ми використовуємо файли cookie, щоб забезпечити найкращий досвід на нашому сайті. 
        Згідно з GDPR, ви можете ознайомитись з нашою{" "}
        <a 
          href="/PRIVACY_POLICY.md" 
          target="_blank" 
          rel="noreferrer" 
          style={{ color: "#ffd700", textDecoration: "underline" }}
        >
          Політикою конфіденційності
        </a>.
        <button 
          onClick={() => setShowCookieSettings(true)}
          style={{ 
            background: "transparent", 
            color: "#fff", 
            border: "1px solid #fff", 
            padding: "8px 15px", 
            borderRadius: "5px", 
            marginLeft: "15px", 
            cursor: "pointer", 
            fontSize: "13px" 
          }}
        >
          Налаштувати
        </button>
      </CookieConsent>

      {showCookieSettings && (
        <CookieSettingsModal 
          onClose={() => setShowCookieSettings(false)} 
          onSave={handleSaveCookieSettings} 
        />
      )}
    </>
  );
}

export default App;