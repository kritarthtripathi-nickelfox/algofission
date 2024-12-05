/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ProjectPage from 'pages/ProjectPage';
import ProjectDetailPage from 'pages/ProjectDetailPage';
import TeamPage from 'pages/TeamPage';
import DiscussProjectPage from 'pages/DiscussProjectPage';
import NotFoundPage from 'pages/NotFoundPage';
import Categories from 'pages/Categories'
import AboutUs from 'parts/AboutUs';
import TechnologiesPage from 'parts/TechnologiesPage'
import ServiceDetails from 'parts/ServiceDetails';
import CategoryDetailPage from 'parts/CategoryDetailPage'
import ServicesPage from 'parts/ServicesPage';
import Blogs from 'parts/Blogs';
import BlogDetails from 'parts/BlogDetails';
import ScrollToTop from 'ScrollToTop';

import 'assets/css/styles.css';

function App() {
  return (
    <>
    <ScrollToTop />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/project" component={ProjectPage} />
      <Route exact path="/project/:id" component={ProjectDetailPage} />
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/technologies" component={TechnologiesPage} />
      <Route exact path="/category/:name" component={CategoryDetailPage} />
      <Route exact path="/services" component={TeamPage} />
      <Route exact path="/services/:serviceName" component={ServiceDetails} />
      {/* <Route exact path="/technologies" component={TeamPage} /> */}
      <Route exact path="/servicespage" component={ServicesPage} />
      <Route exact path="/discuss-project" component={DiscussProjectPage} />
      <Route exact path="/categories/:id" component={Categories} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/blogs/:id" component={BlogDetails} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    </>
  );
}

export default App;
