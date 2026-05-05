import React from "react";
import CookieConsent from "react-cookie-consent";
import { Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage.jsx";
import GamePage from "./pages/GamePage/GamePage.jsx";

function App() {
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
        buttonText="Зрозуміло"
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
      </CookieConsent>
    </>
  );
}

export default App;