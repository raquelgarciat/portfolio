function About() {
  return (
    <section className='main_about' id='about'>
      <article className='about'>
        <div className='about_img'></div>
        <div className='about_text'>
          <ul>
            <li>
              Hi! My name is Raquel!{' '}
              <i class='fa-regular fa-face-smile-beam'></i>
            </li>
            <li>
              I'm based in Madrid, Spain <i class='fa-solid fa-globe'></i>
            </li>
            <li>
              I speak Spanish, Catalan and English{' '}
              <i class='fa-solid fa-language'></i>
            </li>
            <li>
              I love working with JavaScript, React.js and MySQL{' '}
              <i class="fa-brands fa-react"></i>
            </li>
            <li>
              I'm currently interested in Python as well{' '}
              <i class="fa-brands fa-python"></i>
            </li>
            <li>
              I never want to stop learning! {' '}
              <i class="fa-solid fa-graduation-cap"></i>
            </li>
            <li>
              I prefer to work remotely <i class='fa-solid fa-house-laptop'></i>
            </li>
            <li>
              I'm available for working immediately{' '}
              <i class='fa-regular fa-thumbs-up'></i>
            </li>
          </ul>
        </div>
      </article>
      <div className='stack'>
        <ul>
          <li>logo</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
