import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
              <h3>I'm a Chicago based <span>{resumeData.role}</span>, specializing in <span>HTML, CSS, React, </span> and <span>WordPress</span>. 
                I have 2 years of experience in Frontend and 1 year of experience in backend (<span>Python, Flask, </span> and <span>Django</span>).
                Creating effective webdesigns for companies of all sizes around the globe is my talent. <a className="smoothscroll" href="#about">Scroll down </a>
                to learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                <li><a href={resumeData.hrefemail}><i className="fa fa-google-plus" /></a></li>
                <li><a href={resumeData.linkedIn}><i className="fa fa-linkedin" /></a></li>
                <li><a href={resumeData.instagram}><i className="fa fa-instagram" /></a></li>
                <li><a href={resumeData.github}><i className="fa fa-github" /></a></li>
                <li><a href={resumeData.skype}><i className="fa fa-skype" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
