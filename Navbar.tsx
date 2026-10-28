import { useEffect, useState } from 'react';
import { COMPANY_NAME, NAV_LINKS } from '../data/site';
import SoundToggleButton from './SoundToggleButton';

interface NavbarProps {
  isSoundEnabled: boolean;
  onSoundToggle: () => void;
}

const SCROLL_THRESHOLD = 20;

const Navbar = ({ isSoundEnabled, onSoundToggle }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className={`font-black text-xl tracking-tighter ${isScrolled ? 'text-[#003865]' : 'text-white'}`}>
            {COMPANY_NAME}
          </span>
        </a>

        {/* Menu desktop */}
        <div
          className={`hidden md:flex items-center space-x-8 font-semibold uppercase text-xs tracking-widest ${
            isScrolled ? 'text-slate-600' : 'text-white/90'
          }`}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="hover:text-blue-500 transition-colors">
              {label}
            </a>
          ))}
          <SoundToggleButton
            isEnabled={isSoundEnabled}
            onToggle={onSoundToggle}
            className="border-current/30 hover:bg-blue-500/15 transition-colors"
          />
        </div>

        {/* Controles mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <SoundToggleButton
            isEnabled={isSoundEnabled}
            onToggle={onSoundToggle}
            className={isScrolled ? 'text-[#003865] border-[#003865]/30' : 'text-white border-white/40'}
          />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={isScrolled ? 'text-[#003865]' : 'text-white'}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-slate-100 py-6 px-4 flex flex-col space-y-4 font-bold text-slate-800">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={closeMobileMenu} className="hover:text-blue-600">
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
