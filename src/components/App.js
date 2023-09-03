import '../styles/main.scss';
import Hero from './Hero';
import Nav from './Nav';
import Projects from './Projects';
import Stack from './Stack';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className='page'>
      <header className='header' id='home'>
        <Nav />
        <Hero />
      </header>
      <main className='main'>
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      <footer className='footer'>©Raquel García | 2023</footer>
    </div>
  );
}

export default App;
