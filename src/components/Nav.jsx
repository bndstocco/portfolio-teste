import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';
import { HexIcon } from '../data/icons.jsx';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const progressRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const nav = document.querySelector('nav');

    ScrollTrigger.create({
      start: 'top -80',
      onToggle: (self) => {
        nav.classList.toggle('scrolled', self.isActive);
      },
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (progressRef.current) {
          progressRef.current.style.width = self.progress * 100 + '%';
        }
      },
    });

    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    const linkText = 'var(--text)';

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          let current = '';
          sections.forEach((s) => {
            if (window.scrollY >= s.offsetTop - 200) current = s.id;
          });
          links.forEach((a) => {
            a.style.color = a.getAttribute('href') === '#' + current ? linkText : '';
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="progress-bar" ref={progressRef} />
      <nav>
        <div className="nav-logo">
          <HexIcon />
          <span>//</span> BSS.dev
        </div>
        <ul className="nav-links">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-controls">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
