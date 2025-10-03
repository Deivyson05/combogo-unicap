

// import './App.css'
import {Header} from './components/Header';
import {Home} from './sections/Home';
import {About} from './sections/About';
import {Projects} from './sections/Projects';
import {Footer} from './components/Footer';
import {Idioma} from './components/Idioma';

import { useState } from 'react';



function App() {
  const [lang, setLang] = useState("pt");

  const handleLang = (l) => {
    setLang(l);
  }

  return (
    <>
      <Header/>
      <Home/>
      <About />
      <Projects lang={lang}/>
      <Footer />
      <Idioma onSendData={handleLang}/>
    </>
  )
}

export default App
