import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ForEveryone from './components/ForEveryone';
import Stores from './components/Stores';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'hi'

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Features lang={lang} />
      <HowItWorks lang={lang} />
      <ForEveryone lang={lang} />
      <Stores lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

export default App;