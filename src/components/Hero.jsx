import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../contexts/LanguageContext';
import { HexIcon } from '../data/icons.jsx';

export default function Hero() {
  const heroRef = useRef(null);
  const linesRef = useRef([]);
  const roleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const eyebrowRef = useRef(null);
  const { t } = useLanguage();
  const hero = t.hero;

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      linesRef.current,
      { y: '120%', rotateX: 35, scale: 0.9 },
      { y: '0%', rotateX: 0, scale: 1, duration: 1, stagger: 0.15, ease: 'back.out(1.7)' }
    )
    .fromTo(
      roleRef.current,
      { y: 40, opacity: 0, scale: 0.95, filter: 'blur(8px)' },
      { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.9 },
      '-=0.3'
    )
    .fromTo(
      eyebrowRef.current,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 },
      '-=0.7'
    )
    .fromTo(
      ctaRef.current.children,
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(2)' },
      '-=0.2'
    )
    .fromTo(
      statsRef.current.children,
      { x: 40, opacity: 0, rotateY: 15 },
      { x: 0, opacity: 1, rotateY: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      '-=0.5'
    );

    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (!isTouch) {
      const particles = heroRef.current.querySelector('.hero-particles');
      if (particles) {
        for (let i = 0; i < 40; i++) {
          const dot = document.createElement('div');
          dot.className = 'hero-particle';
          dot.style.left = Math.random() * 100 + '%';
          dot.style.top = Math.random() * 100 + '%';
          const size = 2 + Math.random() * 3;
          dot.style.width = size + 'px';
          dot.style.height = size + 'px';
          dot.style.opacity = 0.1 + Math.random() * 0.3;
          particles.appendChild(dot);

          gsap.to(dot, {
            y: -(50 + Math.random() * 150),
            x: (Math.random() - 0.5) * 80,
            opacity: 0,
            duration: 4 + Math.random() * 8,
            repeat: -1,
            delay: Math.random() * 4,
            ease: 'power1.out',
          });
        }
      }
    }

    const handleMouse = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      gsap.to(heroRef.current.querySelector('.hero-content'), {
        x: x * 0.5, y: y * 0.5, duration: 1, ease: 'power2.out',
      });
      gsap.to(heroRef.current.querySelectorAll('.hero-orb, .hero-orb-2, .hero-orb-3'), {
        x: x * 1.5, y: y * 1.5, duration: 1.5, ease: 'power2.out',
      });
    };

    if (!isTouch) {
      window.addEventListener('mousemove', handleMouse);
    }

    return () => {
      tl.kill();
      if (!isTouch) window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const formattedRole = hero.role
    .replace(hero.roleAccent[0], `<strong>${hero.roleAccent[0]}</strong>`)
    .replace(hero.roleAccent[1], `<strong>${hero.roleAccent[1]}</strong>`);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-grid-bg" />
      <div className="hero-orb" />
      <div className="hero-orb-2" />
      <div className="hero-orb-3" />
      <div className="hero-particles" />
      <div className="hero-number">03</div>

      <div className="hero-content">
        <div className="hero-eyebrow" ref={eyebrowRef}>
          <HexIcon />
          {hero.eyebrow}
        </div>

        <h1 className="hero-name">
          <span className="line" ref={(el) => (linesRef.current[0] = el)}>
            {hero.name[0]} {hero.name[1]}
          </span>
          <span className="line" ref={(el) => (linesRef.current[1] = el)}>
            <span className="accent">{hero.name[2]}</span>
          </span>
        </h1>

        <p className="hero-role" ref={roleRef} dangerouslySetInnerHTML={{ __html: formattedRole }} />

        <div className="hero-cta" ref={ctaRef}>
          <a href="#experience" className="btn-primary" data-hover>
            {hero.cta1} &rarr;
          </a>
          <a href="#contact" className="btn-secondary" data-hover>
            {hero.cta2}
          </a>
        </div>
      </div>

      <div className="hero-stats" ref={statsRef}>
        {hero.stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">{stat.num}<span>{stat.suffix}</span></div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

    </section>
  );
}
