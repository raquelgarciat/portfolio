import '../styles/main.scss';

function App() {
  return (
    <div className='page'>
      <header className='header'>
        <div>&lt; Hello world! /&gt;</div>
        <div>
          I'm <span>Raquel García</span>
        </div>
        <div className='container'>
          <div className='typewriter'>a junior front-end developer.</div>
        </div>
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
          <div className='blurb'>
            <p>Thank you for stopping by!</p>
            <p>Here's some personal projects I'm currently working on.</p>
          </div>
          <ul>
            <li>
              <div className='project_img' id='blankimg'></div>
              <p>¡Oído cocina! Un juego de cartas.</p>
              <p className='project_blurb'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptates nemo vel dignissimos itaque suscipit atque.
              </p>
            </li>
            <li>
              <div className='project_img' id='blankimg'></div>
              <p>Japan travel planner</p>
              <p className='project_blurb'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptates nemo vel dignissimos itaque suscipit atque.
              </p>
            </li>
            <li>
              <div className='project_img' id='blankimg'></div>
              <p>Warhammer 40k API (RESTful)</p>
              <p className='project_blurb'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptates nemo vel dignissimos itaque suscipit atque.
              </p>
            </li>
          </ul>
        </section>
        <section className='main_projects'>
          <div className='blurb'>
            <p>
              ...and here's the projects I worked on while studying at Adalab.
            </p>
            <p>
              Some of them are evaluation exercises, and some others are group
              work.
            </p>
          </div>
          <ul>
            <li>
              <div className='project_img' id='mod1-1'></div>
              <p>Module 1 (HTML / CSS) - Final evaluation exercise</p>
              <p className='project_blurb'>
                Evaluation exercise for skill testing on web design, using HTML5
                and CSS3, design given on separate Zeplin document.
              </p>
            </li>
            <li>
              <div className='project_img' id='mod1-2'></div>
              <p>Module 1 (HTML / CSS) - Group project</p>
              <p className='project_blurb'>
                Group project using HTML5 and CSS3, following a Zeplin given
                design, group of 6 students using Scrum and Agile methodology.
              </p>
            </li>
            <li>
              <div className='project_img' id='blankimg'></div>
              <p>Módulo 2 - Evaluación intermedia</p>
              <p className='project_blurb'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptates nemo vel dignissimos itaque suscipit atque.
              </p>
            </li>
            <li>
              <div className='project_img' id='blankimg'></div>
              <p>Módulo 2 - Evaluación final</p>
              <p className='project_blurb'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptates nemo vel dignissimos itaque suscipit atque.
              </p>
            </li>
            <li>
              <div className='project_img' id='blankimg'></div>
              <p>Módulo 2 - Trabajo grupal</p>
              <p className='project_blurb'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptates nemo vel dignissimos itaque suscipit atque.
              </p>
            </li>
            <li>
              <div className='project_img' id='blankimg'></div>
              <p>Módulo 3 - Evaluación final</p>
              <p className='project_blurb'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptates nemo vel dignissimos itaque suscipit atque.
              </p>
            </li>
            <li>
              <div className='project_img' id='blankimg'></div>
              <p>Módulo 3 - Trabajo grupal</p>
              <p className='project_blurb'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptates nemo vel dignissimos itaque suscipit atque.
              </p>
            </li>
            <li>
              <div className='project_img' id='blankimg'></div>
              <p>Módulo 4 - Trabajo grupal</p>
              <p className='project_blurb'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptates nemo vel dignissimos itaque suscipit atque.
              </p>
            </li>
          </ul>
        </section>
        <section className='main_about'>
          <h3 className='main_title'>About me</h3>
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
