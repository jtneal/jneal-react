import React from 'react';
import { NavLink } from 'react-router-dom';

import menu from '../../../assets/images/menu-icon.png';
import './Nav.scss';

type NavProps = {};

type NavState = {
  showMenu: boolean,
};

class Nav extends React.Component<NavProps, NavState> {
  state = {
    showMenu: false,
  };

  showMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  hideMenu() {
    this.setState({
      showMenu: false,
    });
  }

  render() {
    const closeButton = this.state.showMenu ? <a className="close-button" onClick={() => this.hideMenu()} href="#nogo">&#10005;</a> : '';
    const navButton = this.state.showMenu ? <div className="nav-mask" onClick={() => this.hideMenu()}></div> : '';

    return (
      <nav>
        <a className="mobile-menu" onClick={() => this.showMenu()} href="#nogo"><img alt="Menu Icon" src={menu} /></a>
        <ul className={this.state.showMenu ? 'show-menu': ''}>
          <li><NavLink activeClassName="current" exact onClick={() => this.hideMenu()} to="/">About</NavLink></li>
          <li><NavLink activeClassName="current" onClick={() => this.hideMenu()} to="/experience">Experience</NavLink></li>
          <li><NavLink activeClassName="current" onClick={() => this.hideMenu()} to="/projects">Projects</NavLink></li>
          <li><NavLink activeClassName="current" onClick={() => this.hideMenu()} to="/skills">Skills</NavLink></li>
          <li><NavLink activeClassName="current" onClick={() => this.hideMenu()} to="/awards">Awards</NavLink></li>
          <li><a href="https://blog.jneal.com/" rel="noopener noreferrer" target="_blank">Blog</a></li>
          <li><a href="/resume-jason-neal.pdf" rel="noopener noreferrer" target="_blank">Resume</a></li>
        </ul>
        {closeButton}
        {navButton}
      </nav>
    );
  }
}

export default Nav;
