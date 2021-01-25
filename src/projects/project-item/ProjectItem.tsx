import moment from 'moment';
import React from 'react';

import { nullProject, ProjectDto } from '../Projects.dto';
import './ProjectItem.scss';
import * as service from '../Projects.service';
import { useParams } from 'react-router-dom';

export function ProjectItem() {
  const { uri } = useParams<{uri: string}>();

  return <ProjectItemDetails uri={uri} />;
}

type ProjectItemDetailsProps = {
  uri: string,
};

type ProjectItemDetailsState = {
  project: ProjectDto,
  uri: string,
};

class ProjectItemDetails extends React.Component<ProjectItemDetailsProps, ProjectItemDetailsState> {
  state = {
    project: nullProject,
    uri: '',
  };

  static async getDerivedStateFromProps(nextProps: ProjectItemDetailsProps, prevState: ProjectItemDetailsState) {
    if (nextProps.uri !== prevState.uri) {
      return {
        uri: nextProps.uri,
      }
    }

    return null;
  }

  async componentDidUpdate(prevProps: ProjectItemDetailsProps) {
    if (this.props.uri !== prevProps.uri) {
      this.componentDidMount();
    }
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({
      project: await service.getItem(this.props.uri).toPromise(),
    });
  }

  render() {
    const project = this.state.project;

    return (
      <section className="project-item">
        <h1>{project.title}</h1>
        <div className="card">
          <img alt={project.title} src={`/projects/${project.image}`} />
          <div className="card-content">
            <div className="content-main">
              <p>{project.description}</p>
              <h4>Company Information:</h4>
              <p className="final">{project.company}</p>
            </div>
            <div className="content-side">
              <h4>Location:</h4>
              <p>{project.location}</p>
              <h4>Web Address:</h4>
              <p><a href={project.url} rel="noopener noreferrer" target="_blank">{project.url}</a></p>
              <h4>Project Completion:</h4>
              <p>{moment(project.date).format('MMMM YYYY')}</p>
              <h4>Skills Used:</h4>
              <ul>
                {project.skills.map((skill: string) => <li>{skill}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectItem;
