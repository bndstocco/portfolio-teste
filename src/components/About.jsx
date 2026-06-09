import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';
import { CERT_ICONS } from '../data/icons.jsx';

export default function About() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const { t } = useLanguage();
  const about = t.about;

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

      const leftEls = leftRef.current?.querySelectorAll('p, .about-tags');
      if (leftEls?.length) {
        ScrollTrigger.create({
          trigger: leftRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(leftEls, { y: isMobile ? 15 : 30, opacity: 0 }, { y: 0, opacity: 1, duration: isMobile ? 0.5 : 0.6, stagger: isMobile ? 0.1 : 0.12, ease: 'power2.out' });
          },
          once: true,
        });
      }

      const certItems = rightRef.current?.querySelectorAll('.cert-item');
      if (certItems?.length) {
        ScrollTrigger.create({
          trigger: rightRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(
              certItems,
              isMobile
                ? { y: 15, opacity: 0 }
                : { x: -20, opacity: 0, scale: 0.95, rotateY: -5 },
              isMobile
                ? { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
                : { x: 0, opacity: 1, scale: 1, rotateY: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.2)' }
            );
          },
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (iconName) => {
    const Icon = CERT_ICONS[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <section id="about" ref={sectionRef}>
      <div className="about-orb" />
      <div className="section-header">
        <div>
          <div className="section-tag">{about.tag}</div>
          <h2 className="section-title">{about.title}</h2>
        </div>
        <p className="section-desc">{about.desc}</p>
      </div>

      <div className="about-grid">
        <div className="about-text" ref={leftRef}>
          <p className="about-highlight">{about.highlight}</p>
          {about.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <div className="about-tags">
            {about.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="about-certs" ref={rightRef}>
          <div className="about-certs-header">
            {about.certsHeader}
          </div>
          {about.certs.map((cert, i) => (
            <div className="cert-item" key={i}>
              <div className="cert-item-icon">
                {getIcon(cert.icon)}
              </div>
              <div className="cert-item-info">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-provider">{cert.provider}</div>
              </div>
              <div className="cert-year">{cert.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
