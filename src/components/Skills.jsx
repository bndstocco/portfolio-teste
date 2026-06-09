import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';
import { SKILL_ICONS } from '../data/icons.jsx';

export default function Skills() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const { t } = useLanguage();
  const skills = t.skills;

  useEffect(() => {
    const isMobile = window.innerWidth < 900;
    const ctx = gsap.context(() => {
      const tag = sectionRef.current.querySelector('.section-tag');
      const title = sectionRef.current.querySelector('.section-title');
      const desc = sectionRef.current.querySelector('.section-desc');

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(tag, { y: isMobile ? 15 : 20, opacity: 0 }, { y: 0, opacity: 1, duration: isMobile ? 0.5 : 0.5, ease: 'power2.out' });
          gsap.fromTo(title, { y: isMobile ? 20 : 40, opacity: 0 }, { y: 0, opacity: 1, duration: isMobile ? 0.6 : 0.6, delay: 0.15, ease: 'power2.out' });
          gsap.fromTo(desc, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: isMobile ? 0.5 : 0.5, delay: isMobile ? 0.2 : 0.25, ease: 'power2.out' });
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector('.skills-grid'),
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            cardsRef.current,
            isMobile
              ? { y: 20, opacity: 0 }
              : { y: 50, opacity: 0, scale: 0.9, rotateX: 10 },
              isMobile
                ? { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
              : { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 0.6, stagger: 0.08, ease: 'back.out(1.4)' }
          );

          if (!isMobile) {
            cardsRef.current.forEach((card) => {
              if (!card) return;
              const items = card.querySelectorAll('.skill-list li');
              gsap.fromTo(items, { opacity: 0, x: -15 }, {
                opacity: 1, x: 0, duration: 0.3, stagger: 0.03, delay: 0.5, ease: 'power2.out',
              });
            });
          }
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const iconKeys = ['backend', 'wordpress', 'frontend', 'integrations', 'performance', 'devops'];

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-header">
        <div>
          <div className="section-tag">{skills.tag}</div>
          <h2 className="section-title">{skills.title}</h2>
        </div>
        <p className="section-desc">{skills.desc}</p>
      </div>

      <div className="skills-grid">
        {skills.cards.map((card, i) => {
          const Icon = SKILL_ICONS[iconKeys[i]];
          return (
            <div
              className="skill-card"
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className="skill-card-icon">
                {Icon ? <Icon /> : null}
              </div>
              <div className="skill-card-title">{card.title}</div>
              <ul className="skill-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
