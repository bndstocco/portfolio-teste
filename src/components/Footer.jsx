import { useLanguage } from '../contexts/LanguageContext';
import { CONTACT_ICONS } from '../data/icons.jsx';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bndstocco/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/bndstocco', icon: 'github' },
];

export default function Footer() {
  const { t } = useLanguage();

  const getIcon = (iconName) => {
    const Icon = CONTACT_ICONS[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <footer>
      <p>Bernardo Stocco Silva &mdash; {t.footer}</p>
      <div className="footer-social">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener" aria-label={link.label}>
            {getIcon(link.icon)}
          </a>
        ))}
      </div>
    </footer>
  );
}
