import { useLanguage } from '../contexts/LanguageContext';

const flags = {
  'pt-BR': (
    <svg viewBox="0 0 36 36" width="20" height="20">
      <rect width="36" height="36" fill="#009739" rx="2"/>
      <polygon points="18,7 29,18 18,29 7,18" fill="#FEDD00"/>
      <circle cx="18" cy="18" r="5.5" fill="#002776"/>
      <rect x="16" y="11" width="4" height="14" fill="#FFF" opacity=".15" transform="rotate(-20 18 18)"/>
    </svg>
  ),
  'en-US': (
    <svg viewBox="0 0 36 36" width="20" height="20">
      <rect width="36" height="36" fill="#FFF" rx="2"/>
      <g fill="#B22234">
        <rect y="3" width="36" height="3"/>
        <rect y="9" width="36" height="3"/>
        <rect y="15" width="36" height="3"/>
        <rect y="21" width="36" height="3"/>
        <rect y="27" width="36" height="3"/>
        <rect y="33" width="36" height="3"/>
      </g>
      <rect width="16" height="19" fill="#3C3B6E" rx="1"/>
      <g fill="#FFF" opacity=".9">
        {[6,10,14].map(y => (
          <g key={y}>
            {[3,7,11].map(x => <circle key={x} cx={x} cy={y} r="1"/>)}
          </g>
        ))}
        {[4,8,12,16].map(y => (
          <g key={y}>
            {[1,5,9,13].map(x => <circle key={x} cx={x} cy={y} r="1"/>)}
          </g>
        ))}
      </g>
    </svg>
  ),
  'es-ES': (
    <svg viewBox="0 0 36 36" width="20" height="20">
      <rect width="36" height="36" fill="#C60B1E" rx="2"/>
      <rect y="9" width="36" height="18" fill="#FFC400"/>
      <rect x="12" y="9" width="2" height="18" fill="#C60B1E" opacity=".4"/>
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
