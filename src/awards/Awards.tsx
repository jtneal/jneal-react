import React from 'react';

import { AwardDto } from './Awards.dto';
import './Awards.scss';
import * as service from './Awards.service';

type AwardsProps = {};
type AwardsState = {
  awards: AwardDto[],
};

class Awards extends React.Component<AwardsProps, AwardsState> {
  state = {
    awards: [],
  };

  async componentDidMount() {
    this.setState({
      awards: await service.get().toPromise(),
    });
  }

  render() {
    return (
      <section className="awards">
        <h1>Awards</h1>
        {this.state.awards.map((award: AwardDto) => {
          return (
            <div className="card">
              <div className="card-header">
                <h2>{award.type}</h2>
              </div>
              <div className="card-subtitle">
                <h4>{award.title}</h4>
                {award.date}
              </div>
              <ul>
                {award.descriptions.map((description) => <li>{description}</li>)}
              </ul>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Awards;
