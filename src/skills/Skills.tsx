import React from 'react';

import { SkillDto } from './Skills.dto';
import './Skills.scss';
import * as service from './Skills.service';

type SkillsProps = {};
type SkillsState = {
  skills: SkillDto[],
};

class Skills extends React.Component<SkillsProps, SkillsState> {
  state = {
    skills: [],
  };

  async componentDidMount() {
    this.setState({
      skills: await service.get().toPromise(),
    });
  }

  render() {
    return (
      <section className="skills">
        <h1>Skills</h1>
        <div className="cards">
          {this.state.skills.map((group: SkillDto) => {
            return (
              <div className="card-column">
                <div className="card">
                  <div className="card-header">
                    <h2>{group.category}</h2>
                  </div>
                  <ul>
                    {group.skills.map((skill) => <li>{skill}</li>)}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Skills;
