import React, { useEffect, useRef } from 'react';

function WaveBackground() {
  const waveRef = useRef(null);

  useEffect(() => {
    console.log('Atmospheric background mounted');
    
    const updateMousePosition = (x, y) => {
      if (!waveRef.current) return;
      
      const mouseX = (x / window.innerWidth) * 100;
      const mouseY = (y / window.innerHeight) * 100;
      
      waveRef.current.style.setProperty('--mouse-x', `${mouseX}%`);
      waveRef.current.style.setProperty('--mouse-y', `${mouseY}%`);
    };

    const createFloatingParticle = () => {
      if (!waveRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      
      // Rastgele başlangıç pozisyonu
      const startX = Math.random() * window.innerWidth;
      const drift = (Math.random() - 0.5) * 100; // -50px to +50px drift
      const duration = 6 + Math.random() * 8; // 6-14 saniye arası
      
      particle.style.left = startX + 'px';
      particle.style.setProperty('--drift', drift + 'px');
      particle.style.animationDuration = duration + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      waveRef.current.appendChild(particle);
      
      // Particle'ı animasyon bitince kaldır
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, (duration + 2) * 1000);
    };

    const handleMouseMove = (e) => {
      updateMousePosition(e.clientX, e.clientY);
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    // Continuous particle generation - çok daha sık particle
    const particleInterval = setInterval(createFloatingParticle, 200);
    
    // İlk particle'ları oluştur - çok daha fazla başlangıç particle'ı
    for (let i = 0; i < 40; i++) {
      setTimeout(createFloatingParticle, i * 100);
    }
    
    // İlk mouse pozisyonu
    updateMousePosition(window.innerWidth / 2, window.innerHeight / 2);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div 
      ref={waveRef} 
      className="wave-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    ></div>
  );
}

export default WaveBackground;
