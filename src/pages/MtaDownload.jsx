import React, { useEffect, useState } from "react";
import DiscordWidget from "../components/DiscordWidget";

function MtaDownload() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mta-download-page">
      <h2 className={`anim-fade-in-down${animate ? " anim-in" : ""}`}>
        MTA & GTA:SA İndir
      </h2>
      <p className={`anim-fade-in-left${animate ? " anim-in" : ""}`}>
        Atlas Community sunucusunda sorunsuz oynayabilmek için gerekli dosyaları buradan indirebilirsin. Kurulum ve bağlantı çok kolay!
      </p>

      <section className={`home-features anim-fade-in-up${animate ? " anim-in" : ""}`}>
        <h3>Avantajlarımız</h3>
        <div className="home-features-list">
          <div className="home-feature-card">
            <span className="home-feature-icon">⚡</span>
            <div>
              <div className="home-feature-title">Hızlı İndirme</div>
              <div className="home-feature-desc">
                Dosyalarımız güncel ve yüksek hızlı sunucularda barındırılır.
              </div>
            </div>
          </div>
          <div className="home-feature-card">
            <span className="home-feature-icon">🛡️</span>
            <div>
              <div className="home-feature-title">Güvenli Kaynaklar</div>
              <div className="home-feature-desc">
                Orijinal ve güvenilir indirme bağlantıları ile sorunsuz kurulum.
              </div>
            </div>
          </div>
          <div className="home-feature-card">
            <span className="home-feature-icon">📖</span>
            <div>
              <div className="home-feature-title">Adım Adım Rehber</div>
              <div className="home-feature-desc">
                Kurulumda takılırsan detaylı rehber ve destek ekibi yanında!
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`anim-fade-in-up${animate ? " anim-in" : ""}`}
        style={{ display: "flex", gap: "1.2rem", justifyContent: "center", flexWrap: "wrap" }}
      >
        <a
          className="download-btn"
          href="https://mtasa.com/download/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MTA:SA Son Sürüm İndir
        </a>
        <a
          className="download-btn"
          href="https://drive.google.com/drive/folders/1mMlbLvtuEKZn-aBZ7Qq8FdB3NIipelHg"
          target="_blank"
          rel="noopener noreferrer"
        >
          GTA:SA İndir
        </a>
      </div>

      <div className={`mta-guide anim-fade-in-up${animate ? " anim-in" : ""}`}>
        <h3>Kurulum Rehberi</h3>
        <ol>
          <li>GTA:SA'yı bilgisayarına kur. <b>GTA:SA olmadan MTA oynanamaz.</b></li>
          <li>MTA:SA dosyasını indirip kurulumunu tamamla.</li>
          <li>Kurulum tamamlandıktan sonra Atlas Community sunucu IP'si ile oyuna bağlanabilirsin.</li>
          <li>Herhangi bir sorun yaşarsan <b>Discord</b> sunucumuzdan destek alabilirsin.</li>
        </ol>
        <div style={{ marginTop: "1rem", color: "#ffb347", fontWeight: "bold" }}>
          * GTA:SA olmadan MTA oynanamaz.
        </div>
      </div>

      <section className={`home-community-invite anim-fade-in-up${animate ? " anim-in" : ""}`}>
        <h2>Yardıma mı ihtiyacın var?</h2>
        <p>
          Kurulumda sorun yaşarsan veya destek almak istersen Discord topluluğumuzdan yardım alabilirsin.
        </p>
        <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center" }}>
          <DiscordWidget />
        </div>
      </section>
    </div>
  );
}

export default MtaDownload;
