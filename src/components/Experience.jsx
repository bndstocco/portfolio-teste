import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';
import { ZapIcon } from '../data/icons.jsx';

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);
  const sidebarRef = useRef(null);
  const { t } = useLanguage();
  const exp = t.experience;

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

      const progress = timelineRef.current?.querySelector('.timeline-progress');
      if (progress) {
        ScrollTrigger.create({
          trigger: timelineRef.current,
          start: 'top 75%',
          end: 'bottom 30%',
          onEnter: () => {
            gsap.to(progress, { height: '100%', duration: isMobile ? 0.8 : 1.5, ease: 'power3.out' });
            gsap.fromTo(
              itemsRef.current,
              isMobile
                ? { y: 20, opacity: 0 }
                : { x: -40, opacity: 0, scale: 0.95 },
              isMobile
                ? { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' }
                : { x: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.2, delay: 0.3, ease: 'power3.out' }
            );
          },
          once: true,
        });
      }

      if (sidebarRef.current) {
        ScrollTrigger.create({
          trigger: sidebarRef.current,
          start: 'top 80%',
          onEnter: () => {
            const cards = sidebarRef.current.querySelectorAll('.exp-sidebar-card');
            gsap.fromTo(
              cards,
              isMobile
                ? { y: 15, opacity: 0 }
                : { y: 40, opacity: 0, scale: 0.9, rotateX: 10 },
              isMobile
                ? { y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: 'power2.out' }
                : { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(1.3)' }
            );
          },
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const allSkills = [...new Set(exp.items.flatMap((e) => e.skills))];

  return (
    <section id="experience" ref={sectionRef}>
      <div className="section-header">
        <div>
          <div className="section-tag">{exp.tag}</div>
          <h2 className="section-title">{exp.title}</h2>
        </div>
        <p className="section-desc">{exp.desc}</p>
      </div>

      <div className="experience-layout">
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-progress" />

          {exp.items.map((item, i) => (
            <div
              className="timeline-item"
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
            >
              <div className="timeline-dot" />
              <div className="timeline-meta">
                <span className="timeline-period">{item.period}</span>
                <span className="timeline-type">{item.type}</span>
              </div>
              <div className="timeline-company">
                <span className="gradient-text">{item.company}</span>
              </div>
              <div className="timeline-position">{item.position}</div>
              <div className="timeline-body">
                {item.bullets.map((b, j) => (
                  <div className="timeline-item-bullet" key={j}>{b}</div>
                ))}
              </div>
              <div className="timeline-skills">
                {item.skills.map((s) => (
                  <span className="skill-pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="exp-sidebar" ref={sidebarRef}>
          <div className="exp-sidebar-card">
            <div className="exp-sidebar-label">
              <ZapIcon /> {exp.totalLabel}
            </div>
            <div className="exp-sidebar-value">
              3 <span>+</span>
            </div>
            <div className="exp-sidebar-sub">
              {exp.totalSub}
            </div>
          </div>
          <div className="exp-sidebar-card">
            <div className="exp-sidebar-label">
              <ZapIcon /> {exp.companies}
            </div>
            <div className="exp-sidebar-value">
              {exp.items.length} <span>+</span>
            </div>
            <div className="exp-sidebar-sub">
              {exp.items.map(i => i.company).join(' · ')}
            </div>
          </div>
          <div className="exp-sidebar-card">
            <div className="exp-sidebar-label">
              <ZapIcon /> {exp.mainStack}
            </div>
            <div className="exp-sidebar-sub" style={{ marginTop: 0 }}>
              {allSkills.slice(0, 6).join(' · ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
