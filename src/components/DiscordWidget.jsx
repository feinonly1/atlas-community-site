import React, { useEffect, useState } from "react";

const WIDGET_URL = "https://discord.com/api/guilds/1340640018460442654/widget.json";

function DiscordWidget() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(WIDGET_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Discord widget verisi alınamadı.");
        return res.json();
      })
      .then(setData)
      .catch(setErr)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="discord-widget">
        <div className="discord-widget-loading">Discord verileri yükleniyor...</div>
      </div>
    );
  }

  if (err || !data) {
    return (
      <div className="discord-widget">
        <div className="discord-widget-error">Discord verisi alınamadı.</div>
      </div>
    );
  }

  return (
    <div className="discord-widget">
      <div className="discord-widget-header">
        <img
          src="https://cdn.discordapp.com/icons/1390223144949780541/decf2c956b215933ea80941ad636cd3a.webp"
          alt="Discord Sunucu"
          className="discord-widget-icon"
        />
        <div>
          <div className="discord-widget-name">{data.name}</div>
          <div className="discord-widget-online">
            <span className="discord-widget-dot" /> {data.presence_count} çevrimiçi
          </div>
        </div>
      </div>
      <div className="discord-widget-users">
        {data.members.map((user) => (
          <div className="discord-widget-user" key={user.id} title={user.username + (user.bot ? " (Bot)" : "")}>
            <img src={user.avatar_url} alt={user.username} className="discord-widget-avatar" />
            <span className="discord-widget-username">{user.username}</span>
            {user.bot && <span className="discord-widget-bot">BOT</span>}
          </div>
        ))}
      </div>
      <a
        className="discord-widget-join"
        href="https://discord.gg/atlascommunity"
        target="_blank"
        rel="noopener noreferrer"
      >
        Discord'a Katıl
      </a>
    </div>
  );
}

export default DiscordWidget;
