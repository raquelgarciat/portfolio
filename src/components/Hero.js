function Hero() {
  return (
    <section>
      <article className='hero'>
        <div>&lt; Hello world! /&gt;</div>
        <div>
          I'm <span>Raquel García</span>
        </div>
        <div className='container'>
          <div className='typewriter'>a junior front-end developer.</div>
        </div>
      </article>
      <a href='#projects' className='scroll'>
        <i class='fa-solid fa-angles-down' aria-hidden='true'></i>
        <p>scroll down</p>
      </a>
    </section>
  );
}

export default Hero;
