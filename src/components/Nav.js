function Nav() {
  return (
    <nav role='navigation' className='navbar'>
    <div id='menuToggle'>
      <input type='checkbox' />
      <span></span>
      <span></span>
      <span></span>
      <ul id='menu'>
        <a href='#home'>
          <li>Home</li>
        </a>
        <a href='#projects'>
          <li>Projects</li>
        </a>
        <a href='#about'>
          <li>About me</li>
        </a>
        <a href='#contact'>
          <li>Contact</li>
        </a>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;
