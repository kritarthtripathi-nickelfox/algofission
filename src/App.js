/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ProjectPage from 'pages/ProjectPage';
import ProjectDetailPage from 'pages/ProjectDetailPage';
import ServiceDetailPage from 'pages/ServiceDetailPage';
import TeamPage from 'pages/TeamPage';
import DiscussProjectPage from 'pages/DiscussProjectPage';
import NotFoundPage from 'pages/NotFoundPage';
import Categories from 'pages/Categories'
import AboutUs from 'parts/AboutUs';

import 'assets/css/styles.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/project" component={ProjectPage} />
      <Route exact path="/project/:id" component={ProjectDetailPage} />
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/services" component={TeamPage} />
      <Route exact path="/service/:id" component={ServiceDetailPage} />
      <Route exact path="/technologies" component={TeamPage} />
      <Route exact path="/discuss-project" component={DiscussProjectPage} />
      <Route exact path="/categories/:id" component={Categories} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
