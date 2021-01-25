import React from 'react';

import { ExperienceDto } from './Experience.dto';
import './Experience.scss';
import * as service from './Experience.service';

type ExperienceProps = {};
type ExperienceState = {
  experiences: ExperienceDto[],
};

class Experience extends React.Component<ExperienceProps, ExperienceState> {
  state = {
    experiences: [],
  };

  async componentDidMount() {
    this.setState({
      experiences: await service.get().toPromise(),
    });
  }

  render() {
    return (
      <section className="experience">
        <h1>Experience</h1>
        {this.state.experiences.map((experience: ExperienceDto) => {
          return (
            <div className="card">
              <div className="card-header">
                <h2>{experience.company}</h2>
              </div>
              <div className="card-subtitle">
                <h4>{experience.title}</h4>
                {experience.dates} &bull; {experience.location}
              </div>
              {experience.description ? <p><em>{experience.description}</em></p> : ''}
              <ul>
                {experience.details.map((detail) => <li>{detail}</li>)}
              </ul>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Experience;
