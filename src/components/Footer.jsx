import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copyright">
          © {new Date().getFullYear()} Atlas Community | MTA & Garry's Mod Sunucuları
        </div>
        <div className="footer-powered">
          Powered by Leva Yazılım
        </div>
      </div>
    </footer>
  );
}

export default Footer;
