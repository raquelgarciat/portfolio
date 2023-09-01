import '../styles/main.scss';
import '../fonts/lumios.otf';
import headerpic from '../images/header.png';

function App() {
  return (
    <div className='page'>
      <header className='header'>
        <img src={headerpic} alt='logo' className='header_logo' />
      </header>
      <nav role='navigation' className='navbar'>
        <div id='menuToggle'>
          <input type='checkbox' />
          <span></span>
          <span></span>
          <span></span>
          <ul id='menu'>
            <a href='/'>
              <li>Home</li>
            </a>
            <a href='/'>
              <li>Projects</li>
            </a>
            <a href='/'>
              <li>About me</li>
            </a>
            <a href='/'>
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
      <main className='main'>
        <section className='main_projects'>
          <h3 className='main_title'>Proyectos personales</h3>
          <ul>
            <li>¡Oído cocina! Un juego de cartas.</li>
            <li>Japan travel planner</li>
            <li>Warhammer 40k API (RESTful)</li>
          </ul>
        </section>
        <section className='main_projects'>
          <h3 className='main_title'>Proyectos en Adalab</h3>
          <ul>
            <li>Módulo 1 - Evaluación final</li>
            <li>Módulo 1 - Trabajo grupal</li>
            <li>Módulo 2 - Evaluación intermedia</li>
            <li>Módulo 2 - Evaluación final</li>
            <li>Módulo 2 - Trabajo grupal</li>
            <li>Módulo 3 - Evaluación final</li>
            <li>Módulo 3 - Trabajo grupal</li>
            <li>Módulo 4 - Trabajo grupal</li>
          </ul>
        </section>
        <section className='main_about'>
          <h3 className='main_title'>About</h3>
          <p>
            Motivated and eager to embark on a dynamic career in web
            development, I am a Junior Front-end Developer who recently
            completed the intensive AdaLab programming bootcamp, comprising 680
            hours of immersive learning.
          </p>
          <p>
            After six years of office work, I wholeheartedly decided to pursue
            my passion for programming, an interest that has captivated me for
            years. The Adalab course has been instrumental in honing my skills
            in creating captivating and user-friendly web experiences. While my
            focus has been primarily on front-end development, my curiosity has
            led me to explore the intricacies of back-end programming, and I am
            currently immersing myself in learning Python.
          </p>
          <p>
            Driven by a passion for continuous learning and innovation, I am
            excited to contribute my creativity to a dynamic team where I can
            collaborate in developing cutting-edge solutions that elevate user
            experiences to new heights.
          </p>
        </section>
      </main>
      <footer className='footer'>©Raquel García | 2023</footer>
    </div>
  );
}

export default App;
