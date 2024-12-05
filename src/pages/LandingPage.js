/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Service from 'parts/Service';
import Portfolio from 'parts/Portfolio';
import Advantage from 'parts/Advantage';
import Testimonial from 'parts/Testimonial';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import NumberofProject from 'parts/NumberofProject';
import OurServices from 'parts/OurServices'

import Data from 'json/landingPage.json';
import Projectdetail from 'json/projectdetail.json';
import BlogLanding from 'parts/BlogLanding';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero {...this.props} />
        <Service data={Data.service} />
        <Portfolio data={Data.portfolio} />
        <OurServices data={Data.ourservices} />
        <NumberofProject data={Projectdetail.projectdetail} />
        <BlogLanding data={Data.blogs} />
        <Advantage data={Data.advantage} />
        <Testimonial data={Data.testimonial} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
