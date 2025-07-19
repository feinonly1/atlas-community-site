import React, { useEffect, useState } from "react";

const team = [
	{
		name: "Tuncay (feinonly)",
		role: "Kurucu & Developer",
		desc: "Topluluğun vizyonunu belirler, yenilikçi projeleri yönetir.",
		avatar:
			"https://cdn.discordapp.com/avatars/676793498640580608/479c48abe7347248b2d4dbe775b48005?size=1024",
	},
  {
		name: "Yamaç (asuwup)",
		role: "Kurucu",
		desc: "Topluluğun vizyonunu belirler, yenilikçi projeleri yönetir.",
		avatar:
			"https://cdn.discordapp.com/avatars/458611579798421505/abf65e06958f87969ab1c226405146df?size=1024",
	},
  {
		name: "Can (c4nko)",
		role: "Ceo & Proje Yöneticisi",
		desc: "Topluluğun vizyonunu belirler, yenilikçi projeleri yönetir.",
		avatar:
			"https://cdn.discordapp.com/avatars/770260411990671386/8d14821b35f357ac9b79f673a6d8eab2?size=1024",
	},
  	{
		name: "Halil (halilfirarda)",
		role: "Developer & Proje Yöneticisi",
		desc: "Topluluğun vizyonunu belirler, yenilikçi projeleri yönetir.",
		avatar:
			"https://cdn.discordapp.com/avatars/1103659555793141800/51bd29842c3f30eb13e56ad3d281baa9?size=1024",
	},
];

function About() {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setAnimate(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="about">
			<h2
				className={`anim-fade-in-down${
					animate ? " anim-in" : ""
				}`}
			>
				Atlas Community Hakkında
			</h2>
			<p
				className={`anim-fade-in-left${
					animate ? " anim-in" : ""
				}`}
			>
				<b>Atlas Community</b>, yenilikçi ve dinamik yapısıyla MTA ve Garry's Mod
				plattformlarında modern roleplay deneyimi sunmak için kuruldu. Amacımız,
				oyuncularımıza sadece bir oyun ortamı değil, aynı zamanda güvenli ve eğlenceli
				bir topluluk sunmak.
			</p>
			<div
				className={`about-section anim-fade-in-up${
					animate ? " anim-in" : ""
				}`}
			>
				<h3>Vizyonumuz</h3>
				<p>
					Türkiye'nin en yenilikçi ve kapsayıcı roleplay topluluğu olmak; oyunculara
					özgür, adil ve sürdürülebilir bir oyun ekosistemi sağlamak.
				</p>
				<h3>Misyonumuz</h3>
				<ul>
					<li>
						Her seviyeden oyuncuya uygun, kaliteli ve güncel sunucular sunmak.
					</li>
					<li>Topluluk içi etkileşimi ve dayanışmayı teşvik etmek.</li>
					<li>Yenilikçi etkinlikler ve projelerle sürekli gelişmek.</li>
					<li>
						Güvenli, saygılı ve eğlenceli bir ortam oluşturmak.
					</li>
				</ul>
			</div>
			<div
				className={`about-section anim-fade-in-up${
					animate ? " anim-in" : ""
				}`}
				style={{ marginTop: "2.5rem" }}
			>
				<h3>Ekibimiz</h3>
				<div className="about-team">
					{team.map((member, i) => (
						<div className="about-team-card" key={i}>
							<img
								src={member.avatar}
								alt={member.name}
								className="about-team-avatar"
							/>
							<div>
								<div className="about-team-name">{member.name}</div>
								<div className="about-team-role">{member.role}</div>
								<div className="about-team-desc">{member.desc}</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div
				className={`about-section anim-fade-in-up${
					animate ? " anim-in" : ""
				}`}
				style={{ marginTop: "2.5rem" }}
			>
				<h3>Neden Atlas Community?</h3>
				<ul>
					<li>Yaratıcı ve aktif yönetim ekibi</li>
					<li>Güncel ve optimize edilmiş sunucu altyapısı</li>
					<li>Oyuncu odaklı etkinlikler ve ödüller</li>
					<li>
						Her zaman ulaşılabilir destek ve şeffaf iletişim
					</li>
				</ul>
			</div>
		</div>
	);
}

export default About;
