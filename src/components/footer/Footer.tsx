import React from 'react';
import { Link } from 'react-router-dom';

import { ProjectDto } from '../../projects/Projects.dto';
import * as service from '../../projects/Projects.service';
import './Footer.scss';

type FooterProps = {};
type FooterState = {
  projects: ProjectDto[],
};

class Footer extends React.Component<FooterProps, FooterState> {
  state = {
    projects: [],
  };

  async componentDidMount() {
    this.setState({
      projects: await service.getLatest().toPromise(),
    });
  }

  render() {
    return (
      <footer>
        <div className="footer centered-column">
          <section className="friends">
            <h3>Friends</h3>
            <ul>
              <li><a href="https://www.quickenloans.com/" rel="noopener noreferrer" target="_blank">Quicken Loans</a></li>
              <li><a href="https://www.epandcompany.com/" rel="noopener noreferrer" target="_blank">EP+Co</a></li>
              <li><a href="https://www.hannush.com/" rel="noopener noreferrer" target="_blank">Hannush Web</a></li>
              <li><a href="https://qconferences.com/" rel="noopener noreferrer" target="_blank">QCon</a></li>
              <li><a href="https://www.oreilly.com/conferences/oscon.html" rel="noopener noreferrer" target="_blank">OSCON</a></li>
              <li><a href="https://www.restfest.org/" rel="noopener noreferrer" target="_blank">REST Fest</a></li>
            </ul>
          </section>
          <section className="technology">
            <h3>Favorite Tech</h3>
            <ul>
              <li><a href="https://angular.io/" rel="noopener noreferrer" target="_blank">Angular</a></li>
              <li><a href="https://nestjs.com/" rel="noopener noreferrer" target="_blank">NestJS</a></li>
              <li><a href="https://www.typescriptlang.org/" rel="noopener noreferrer" target="_blank">TypeScript</a></li>
              <li><a href="https://www.docker.com/" rel="noopener noreferrer" target="_blank">Docker</a></li>
              <li><a href="https://aws.amazon.com/" rel="noopener noreferrer" target="_blank">AWS</a></li>
              <li><a href="https://www.terraform.io/" rel="noopener noreferrer" target="_blank">Terraform</a></li>
            </ul>
          </section>
          <section className="work">
            <h3>Recent Work</h3>
            <ul>
              {this.state.projects.map((project: ProjectDto) => <li><Link to={`/projects/${project.uri}`}>{project.title}</Link></li>)}
            </ul>
          </section>
          <section className="contact">
            <h3>Contact Info</h3>
            <p>
              Jason Neal<br />
              760 Coralbell Way<br />
              Tega Cay, SC 29708
            </p>
            <p className="final">
              864.275.2885<br />
              <a href="mailto:jason@jneal.com">jason@jneal.com</a>
            </p>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
