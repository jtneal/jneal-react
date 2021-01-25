import { History } from 'history';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

import { ProjectDto } from '../Projects.dto';
import './ProjectList.scss';
import * as service from '../Projects.service';

type ProjectsProps = {
  history: History,
};

type ProjectsState = {
  projects: ProjectDto[],
};

class ProjectList extends React.Component<ProjectsProps, ProjectsState> {
  state = {
    projects: [],
  };

  async componentDidMount() {
    this.setState({
      projects: await service.get().toPromise(),
    });
  }

  viewProject(project: ProjectDto) {
    this.props.history.push(`/projects/${project.uri}`);
  }

  render() {
    return (
      <section className="project-list">
        <h1>Projects</h1>
        <div className="cards">
          {this.state.projects.map((project: ProjectDto) => {
            return (
              <div className="card-column">
                <Link to={`/projects/${project.uri}`}>
                  <div className="card card-teaser">
                    <img alt={project.title} src={`/projects/${project.image}`} />
                    <div className="card-subtitle card-teaser-content">
                      <h4>{project.title}</h4>
                      <span>{moment(project.date).format('MMMM YYYY')} &bull; {project.location}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default ProjectList;
