import { useRef, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import WhatsAppButton from './components/WhatsAppButton';
import { ASSETS } from './data/site';

const App = () => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSoundToggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isSoundEnabled) {
      audio.pause();
      setIsSoundEnabled(false);
      return;
    }

    try {
      await audio.play();
      setIsSoundEnabled(true);
    } catch {
      // O navegador pode bloquear a reprodução; o botão permanece desligado.
      setIsSoundEnabled(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <audio ref={audioRef} src={ASSETS.backgroundTrack} loop preload="none" />
      <Navbar isSoundEnabled={isSoundEnabled} onSoundToggle={handleSoundToggle} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
