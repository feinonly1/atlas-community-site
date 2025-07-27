import React, { useEffect, useState } from "react";

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
