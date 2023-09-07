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
              I speak Spanish, Catalan and English fluently{' '}
              <i class='fa-solid fa-language'></i>
            </li>
            <li>
              I love working with JavaScript, React.js and MySQL{' '}
              <i class='fa-brands fa-react'></i>
            </li>
            <li>
              I'm currently interested in Python as well{' '}
              <i class='fa-brands fa-python'></i>
            </li>
            <li>
              I never want to stop learning!{' '}
              <i class='fa-solid fa-graduation-cap'></i>
            </li>
            <li>
              I prefer to work remotely <i class='fa-solid fa-house-laptop'></i>
            </li>
            <li>
              I'm available for working immediately{' '}
              <i class='fa-regular fa-thumbs-up'></i>
            </li>
          </ul>
          <div className='about_links'>
            <a target="blank" 
              href='http://www.linkedin.com/in/raquel-g-881b20285'
            >
              <i class='fa-brands fa-linkedin'></i>
            </a>
            <a target="blank" 
              href='http://github.com/raquelgarciat'
            >
            <i class='fa-brands fa-square-github'></i></a>
            <a target="blank" title="Download my CV!"
              href='https://pdfhost.io/v/Ld~~o.Q1h_Raquel_Garcia_Torrejon_Resume'
            >
            <i class='fa-solid fa-file-arrow-down'></i></a>
          </div>
        </div>
      </article>
      <div className='stack'>
        <ul>
          <li id="stack_html" title="HTML5"></li>
          <li id="stack_css" title="CSS3"></li>
          <li id="stack_sass" title="SASS"></li>
          <li id="stack_js" title="JavaScript"></li>
          <li id="stack_react" title="React.js"></li>
          <li id="stack_jest" title="Jest"></li>
          <li id="stack_express" title="Espress JS"></li>
          <li id="stack_node" title="Node JS"></li>
          <li id="stack_mysql" title="MySQL"></li>
          <li id="stack_mongodb" title="MongoDB"></li>
          <li id="stack_json" title=".JSON format"></li>
          <li id="stack_vscode" title="Visual Studio Code"></li>
          <li id="stack_git" title="Git"></li>
          <li id="stack_github" title="GitHub"></li>
          <li id="stack_scrum" title="Scrum"></li>
        </ul>
      </div>
    </section>
  );
}

export default About;
