import { Link } from 'react-router-dom';

import logo from '../../assets/images/jason-neal-logo.png';
import github from '../../assets/images/social-github.png';
import linkedIn from '../../assets/images/social-linked-in.png';
import './Header.scss';
import Nav from './nav/Nav';

function Header() {
  return (
    <header>
      <div className="masthead centered-column">
        <div className="logo">
          <Link to="/"><img alt="Jason Neal" src={logo} /></Link>
        </div>
        <div className="social">
          <a href="https://github.com/jtneal" rel="noopener noreferrer" target="_blank">
            <img alt="GitHub" src={github} />
          </a>
          <a href="https://www.linkedin.com/in/jasontneal" rel="noopener noreferrer" target="_blank">
            <img alt="LinkedIn" src={linkedIn} />
          </a>
        </div>
        <div className="navigation">
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
