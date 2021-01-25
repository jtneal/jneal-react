import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

import ProjectItem from './project-item/ProjectItem';
import ProjectList from './project-list/ProjectList';

function Projects() {
  const history = useHistory();
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <ProjectList history={history} />
      </Route>
      <Route path={`${path}/:uri`}>
        <ProjectItem />
      </Route>
    </Switch>
  );
}

export default Projects;
