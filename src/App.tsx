import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import About from './about/About';
import './App.scss';
import Awards from './awards/Awards';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Experience from './experience/Experience';
import NotFound from './not-found/NotFound';
import Projects from './projects/Projects';
import Skills from './skills/Skills';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="centered-column">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/awards">
            <Awards />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Route path="*">
            <Redirect to={{ pathname: '/404' }}></Redirect>
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
