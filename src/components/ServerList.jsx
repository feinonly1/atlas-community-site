import React, { useRef } from "react";

const servers = [
  {
    name: "Atlas MTA Roleplay",
    ip: "mtasa://123.45.67.89:22003",
    description: "Modern ve gelişmiş MTA Roleplay sunucusu.",
    type: "MTA"
  },
  {
    name: "Atlas Garry's Mod RP",
    ip: "gmod://123.45.67.89:27015",
    description: "Eğlenceli Garry's Mod Roleplay deneyimi.",
    type: "Garry's Mod"
  }
];

function ServerList() {
  // Her buton için ayrı ref ve state tutmak yerine, event'ten style veriyoruz
  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty(
      "--mouse-x",
      `${x}px`
    );
    btn.style.setProperty(
      "--mouse-y",
      `${y}px`
    );
  };

  const handleMouseLeave = (e) => {
    const btn = e.currentTarget;
    btn.style.removeProperty("--mouse-x");
    btn.style.removeProperty("--mouse-y");
  };

  return (
    <section className="server-list">
      <h2 className="server-list-title-centered">Sunucularımız</h2>
      <div className="server-cards">
        {servers.map((server, idx) => (
          <div className="server-card" key={idx}>
            <h3>{server.name}</h3>
            <p>{server.description}</p>
            <div className="server-type">{server.type}</div>
            <a
              href={server.ip}
              className="server-ip"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              Sunucuya Katıl
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServerList;
