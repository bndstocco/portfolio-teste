import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';
import { CERT_ICONS } from '../data/icons.jsx';

export default function Certifications() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const { t } = useLanguage();
  const cert = t.certifications;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tag = sectionRef.current.querySelector('.section-tag');
      const title = sectionRef.current.querySelector('.section-title');
      const desc = sectionRef.current.querySelector('.section-desc');

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(tag, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
          gsap.fromTo(title, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.15 });
          gsap.fromTo(desc, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.3 });
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector('.cert-grid'),
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo(
            cardsRef.current,
            { y: 30, opacity: 0, rotateX: -10 },
            { y: 0, opacity: 1, rotateX: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out' }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (iconName) => {
    const Icon = CERT_ICONS[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <section id="certifications" ref={sectionRef}>
      <div className="section-header">
        <div>
          <div className="section-tag">{cert.tag}</div>
          <h2 className="section-title">{cert.title}</h2>
        </div>
        <p className="section-desc">{cert.desc}</p>
      </div>

      <div className="cert-grid">
        {cert.items.map((item, i) => (
          <div
            className="cert-card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className="cert-card-icon">
              {getIcon(item.icon)}
            </div>
            <div className="cert-card-label">{item.label}</div>
            <div className="cert-card-name">{item.name}</div>
            <div className="cert-card-meta">{item.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
