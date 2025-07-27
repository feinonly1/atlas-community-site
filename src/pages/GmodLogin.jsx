import React, { useEffect } from 'react';
import './GmodLogin.css';

const GmodLogin = () => {
  useEffect(() => {
    // Redirect to the Garry's Mod login page after a short delay
    const timer = setTimeout(() => {
      window.location.href = '/gmod/login.html';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="gmod-redirect-container">
      <div className="gmod-redirect-content">
        <h2 className="gmod-redirect-title">
          Garry's Mod Sunucusuna Yönlendiriliyor...
        </h2>
        <div className="gmod-loading-spinner"></div>
        <p className="gmod-redirect-text">
          Lütfen bekleyin, Garry's Mod loading ekranına yönlendiriliyorsunuz...
        </p>
      </div>
    </div>
  );
};

export default GmodLogin;
