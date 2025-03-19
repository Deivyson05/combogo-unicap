
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css'
import {Header} from './components/Header';
import {Home} from './sections/Home';
import {About} from './sections/About';
import {Projects} from './sections/Projects';
import {Footer} from './components/Footer';



function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About />
      <Projects/>
      <Footer />
    </>
  )
}

export default App
