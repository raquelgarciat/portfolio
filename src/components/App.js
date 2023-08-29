import '../styles/main.scss';
import '../fonts/lumios.otf';
import headerpic from '../images/header.png';

function App() {
  return (
    <div className='page'>
      <header className='header'>
        <img src={headerpic} alt='logo' className='header_logo' />
      </header>
      <main className='main'>
        <nav className='main_nav'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <section className='main_about'>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            nostrum reiciendis quidem labore exercitationem corporis
            reprehenderit optio fugiat, eveniet ad voluptatibus quos totam quia
            quo, modi, voluptatum eligendi facere architecto!
          </p>
        </section>
        <section className='main_projects'>
          <div>
            <h3>Personal projects</h3>
            <ul></ul>
          </div>
          <div>
            <h3>Projects with Adalab</h3>
            <ul></ul>
          </div>
        </section>
      </main>
      <footer className='footer'>©Raquel García | 2023</footer>
    </div>
  );
}

export default App;
