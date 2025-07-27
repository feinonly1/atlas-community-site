import React, { useEffect, useState } from "react";
import ServerList from "../components/ServerList";
import DiscordWidget from "../components/DiscordWidget";

function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <h1 className={`anim-fade-in-down${animate ? " anim-in" : ""}`}>
          Atlas Community
        </h1>
        <p className={`anim-fade-in-left${animate ? " anim-in" : ""}`}>
          Türkiye'nin en yenilikçi ve dinamik MTA & Garry's Mod roleplay topluluğu!
        </p>
      </section>

      <section className={`home-features anim-fade-in-up${animate ? " anim-in" : ""}`}>
        <h2>Öne Çıkanlar</h2>
        <div className="home-features-list">
          <div className="home-feature-card">
            <span className="home-feature-icon">🚀</span>
            <div>
              <div className="home-feature-title">Yüksek Performanslı Sunucular</div>
              <div className="home-feature-desc">
                Düşük ping, yüksek FPS ve kesintisiz oyun deneyimi.
              </div>
            </div>
          </div>
          <div className="home-feature-card">
            <span className="home-feature-icon">🎉</span>
            <div>
              <div className="home-feature-title">Eğlenceli Etkinlikler</div>
              <div className="home-feature-desc">
                Sık sık düzenlenen yarışmalar, ödüller ve topluluk aktiviteleri.
              </div>
            </div>
          </div>
          <div className="home-feature-card">
            <span className="home-feature-icon">🔒</span>
            <div>
              <div className="home-feature-title">Güvenli ve Adil Ortam</div>
              <div className="home-feature-desc">
                Profesyonel yönetim ve sıfır toleranslı hile koruması.
              </div>
            </div>
          </div>
          <div className="home-feature-card">
            <span className="home-feature-icon">🤝</span>
            <div>
              <div className="home-feature-title">Yardımsever Topluluk</div>
              <div className="home-feature-desc">
                Her zaman aktif destek ekibi ve samimi oyuncular.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`anim-fade-in-up${animate ? " anim-in" : ""}`}>
        <ServerList />
      </div>

      <section className={`home-community-invite anim-fade-in-up${animate ? " anim-in" : ""}`}>
        <h2>Topluluğumuza Katıl!</h2>
        <p>
          Atlas Community ailesine katılarak hem eğlenceli bir oyun ortamına hem de aktif bir sosyal topluluğa dahil olabilirsin.
        </p>
        <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center" }}>
          <DiscordWidget />
        </div>
      </section>
    </div>
  );
}

export default Home;
