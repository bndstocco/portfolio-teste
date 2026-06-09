import { useLanguage } from '../contexts/LanguageContext';

const flags = {
  'pt-BR': (
    <svg viewBox="0 0 36 36" width="20" height="20">
      <rect width="36" height="36" fill="#009739"/>
      <polygon points="18,6 30,18 18,30 6,18" fill="#FEDD00"/>
      <circle cx="18" cy="18" r="5" fill="#002776"/>
    </svg>
  ),
  'en-US': (
    <svg viewBox="0 0 36 36" width="20" height="20">
      <rect width="36" height="36" fill="#FFF"/>
      <rect y="0" width="36" height="4" fill="#B22234"/>
      <rect y="8" width="36" height="4" fill="#B22234"/>
      <rect y="16" width="36" height="4" fill="#B22234"/>
      <rect y="24" width="36" height="4" fill="#B22234"/>
      <rect y="32" width="36" height="4" fill="#B22234"/>
      <rect width="18" height="20" fill="#3C3B6E"/>
    </svg>
  ),
  'es-ES': (
    <svg viewBox="0 0 36 36" width="20" height="20">
      <rect width="36" height="36" fill="#C60B1E"/>
      <rect y="9" width="36" height="18" fill="#FFC400"/>
    </svg>
  ),
};

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const languages = ['pt-BR', 'en-US', 'es-ES'];

  return (
    <div className="lang-switcher">
      {languages.map(l => (
        <button
          key={l}
          className={`lang-btn ${lang === l ? 'active' : ''}`}
          onClick={() => setLang(l)}
          aria-label={l}
        >
          {flags[l]}
        </button>
      ))}
    </div>
  );
}
