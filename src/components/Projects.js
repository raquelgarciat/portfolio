function Projects() {
  return (
    <section className='projects' id='projects'>
      <section className='main_projects'>
        <div className='blurb'>
          <p>Thank you for stopping by!</p>
          <p>Here's some personal projects I'm currently working on.</p>
        </div>
        <ul>
          <li>
            <div className='project_img' id='blankimg'></div>
            <p>¡Oído cocina! A card game.</p>
            <p className='project_blurb'>
              Card game made in React.js, using a REST API for ingredient cards.
              User has to keep ingredient cards in their hand to create full
              dishes. Be careful of mice! :)
            </p>
            <p>- work in progress -</p>
          </li>
          <li>
            <div className='project_img' id='blankimg'></div>
            <p>Travel planner (Japan)</p>
            <p className='project_blurb'>
              Travel planner using React.js, personal project for the
              organisation of an upcoming group trip. User will be able to post
              tips, routes, places, and any info they find useful for the trip.
              Will feature a login for users, and a RESTful API for data
              keeping.
            </p>
            <p>- work in progress -</p>
          </li>
          <li>
            <div className='project_img' id='blankimg'></div>
            <p>Warhammer 40k REST API</p>
            <p className='project_blurb'>
              RESTful API for data keeping of the newest edition for the game
              Warhammer 40.000. Will feature data for all characters, weapons,
              factions and more. Data will be given in JSON format, and kept in
              MySQL.
            </p>
            <p>- work in progress -</p>
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
            <div class='container'>
              <div className='project_img' id='mod1-1'></div>
              <div class='middle'>
                <div class='text'>
                  <a href="https://www.w3schools.com/"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.w3schools.com/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
            </div>
            <p>Module 1 (HTML / CSS) - Final evaluation</p>
            <p className='project_blurb'>
              Evaluation exercise for skill testing on web design, using HTML5
              and CSS3, design given on separate Zeplin document.
            </p>
          </li>
          <li>
          <div class='container'>
            <div className='project_img' id='mod1-2'></div>
            <div class='middle'>
                <div class='text'>
                  <a href="https://www.w3schools.com/"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.w3schools.com/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
            </div>
            <p>Module 1 (HTML / CSS) - Group project</p>
            <p className='project_blurb'>
              Group project using HTML5 and CSS3, following a Zeplin given
              design, group of 6 students using Scrum and Agile.
            </p>
          </li>
          <li>
          <div class='container'>
            <div className='project_img' id='mod2-2'></div>
            <div class='middle'>
                <div class='text'>
                  <a href="https://www.w3schools.com/"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.w3schools.com/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
            </div>
            <p>Module 2 (JavaScript) - Mid-term evaluation</p>
            <p className='project_blurb'>
              Evaluation exercise for skill testing on JavaScript, consisting of
              a betting dice game, user has to guess a number from 1 to 6,
              betting a specific amount of given money.
            </p>
          </li>
          <li>
          <div class='container'>
            <div className='project_img' id='mod2-3'></div>
            <div class='middle'>
                <div class='text'>
                  <a href="https://www.w3schools.com/"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.w3schools.com/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
            </div>
            <p>Module 2 (JavaScript) - Final evaluation</p>
            <p className='project_blurb'>
              Disney character finder, retrieving data from an external API,
              using 'fetch' on JavaScript, and including a section for favorite
              characters. Keeps data on local storage.
            </p>
          </li>
          <li>
          <div class='container'>
            <div className='project_img' id='mod2-1'></div>
            <div class='middle'>
                <div class='text'>
                  <a href="https://www.w3schools.com/"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.w3schools.com/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
            </div>
            <p>Module 2 (JavaScript) - Group project</p>
            <p className='project_blurb'>
              Card creator with Animal Crossing visuals. User can create a card
              using different color palettes and their personal information,
              using a POST request on an external API.
            </p>
          </li>
          <li>
          <div class='container'>
            <div className='project_img' id='mod3-2'></div>
            <div class='middle'>
                <div class='text'>
                  <a href="https://www.w3schools.com/"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.w3schools.com/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
            </div>
            <p>Module 3 (React.js) - Mid-term evaluation</p>
            <p className='project_blurb'>
              Retrieving data from an external API, user can search for Friends
              quotes, and filter by character. Extra option for posting a new
              quote has been implemented, new quotes beting saved in local
              storage.
            </p>
          </li>
          <li>
          <div class='container'>
            <div className='project_img' id='mod3-1'></div>
            <div class='middle'>
                <div class='text'>
                  <a href="https://www.w3schools.com/"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.w3schools.com/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
            </div>
            <p>Module 3 (React.js) - Final evaluation</p>
            <p className='project_blurb'>
              Retrieving data from an external API, user can search for
              Rick&Morty characters by name and by species. Using React
              components and routing, clicking on a character opens a detail
              card with their info.
            </p>
          </li>
          <li>
          <div class='container'>
            <div className='project_img' id='mod3-3'></div>
            <div class='middle'>
                <div class='text'>
                  <a href="https://www.w3schools.com/"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.w3schools.com/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
            </div>
            <p>Module 3 (React.js) - Group project</p>
            <p className='project_blurb'>
              A page where user can post their project ideas, consisting of a
              form that sends the data to an external API via POST method.
              Changes are instantly implemented in a preview section.
            </p>
          </li>
          <li>
          <div class='container'>
            <div className='project_img' id='mod4'></div>
            <div class='middle'>
                <div class='text'>
                  <a href="https://www.w3schools.com/"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.w3schools.com/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
            </div>
            <p>Module 4 (back end) - Group project</p>
            <p className='project_blurb'>
              Using the same idea as the last project, this SPA implements back
              end with Express JS to create a server, in order for us to work
              with our own REST API. The data collected in the form is POSTed to
              a connected database in MySQL, feeding the API, and immediately
              READ in the projects list page.
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Projects;
