import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="profile picture" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>Two-time International Brazilian Jiu-Jitsu Gold Medalist whose fierce competitive drive 
                is ever present in her personal and professional endeavors. Intrinsically motivated and 
                dedicated to continuous personal and professional development. An analytical thinker who's 
                pragmatic and logical in approach when faced with challenges but also has a deeply creative 
                spirit that draws her toward classical music and the arts when leisure calls. Effective at 
                multi-tasking and managing heavy work-loads as evidenced by her simultaneous pursuit of a 
                graduate degree in Computer Science and Professional web development for her clients.
                <br></br>
                <br></br>
                My experience as a freelancer has significantly sharpened my leadership abilities, drive, 
                discipline, resourcefulness, and resiliency.  I utilize my resources, work with teams, and 
                triple-check my code to ensure maximum efficiency and a user-friendly product for my clients.
                </p>
                
                <h2>Current Project</h2>
                <p>Working on a full stack web and mobile application for personalized gifts/wish lists using Django 
                REST, Heroku, and React. Check it out on <a href="https://github.com/CrystalCo/Gift ">GitHub</a>.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span> {resumeData.name} </span><br />
                    <span> {resumeData.location} </span> <br />
                    <span> {resumeData.phone} </span><br />
                    <span> <a href="mailto:crystal.contr@gmail.com" > {resumeData.email} </a> </span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="data/Contreras Developer Resume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
};
