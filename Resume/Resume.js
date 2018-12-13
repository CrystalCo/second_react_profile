import React, { Component } from 'react';

export default class Resume extends Component {
    render () {
      let resumeData = this.props.resumeData;
      return (
          <React.Fragment>
              <section id="resume">
                <div>
                    <div className="row education">
                        <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                            <h3>DePaul University</h3>
                            <p className="info">Master of Science, Computer Science <span>•</span> <em className="date">May 2020</em></p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                            </p>
                            </div>
                        </div> {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                            <h3>Saint Xavier University</h3>
                            <p className="info">B.A., International Relations and Political Science <span>•</span> <em className="date">May 2013</em></p>
                            <p>
                                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                            </p>
                            </div>
                        </div> {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                            <h3>Elgin Community College</h3>
                            <p className="info">Paralegal Program <span>•</span> <em className="date">May 2009</em></p>
                            <p>
                                This is Photoshop's version  of Lorem Ipsum. Proin a ornare odio. Sed non  mauris vitae erat
                            </p>
                            </div>
                        </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
                    ----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                            <h3>Frontend Web Developer</h3>
                            <p className="info">Digital Alpha <span>•</span> <em className="date">August 2018 - November 2018</em></p>
                            <p> 
                                I collaborated with Digital Alpha to help create and launch a new website for C3 Fund in under a week 
                                using custom CSS code and psd file materials provided by the client.  After that we revamped their sister site 
                                Renovo Financial. I was in charge of reformatting the CSS to fit the client’s mockup for the site.
                                <br />
                                <a href="http://www.c3.fund"> www.c3.fund</a> | <a href="https://www.renovofinancial.com">www.renovofinancial.com </a>
                            </p>
                            </div>
                        </div> {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                            <h3></h3>
                            <p className="info">HiFi Personal Fitness <span>•</span> <em className="date">April 2018 - August 2018</em></p>
                            <p>
                                The owners of a personal training facility wanted to revamp their website to a more modern feel with updated 
                                search engine optimization and key features such as trainer profiles. After surveying their needs, I created a timeline 
                                and mockups for the client to choose from.  I transitioned their host provider and rebuilt their site using customized code 
                                to increase SEO.  I implemented a Trainer User Registration form and created Trainer Profiles.  I applied security measures to prevent the 
                                site from getting hacked in the future, such as verifying the site through search console, submitting a sitemap, constantly updating plugins, 
                                injecting .htaccess file with code to reduce risk of getting hacked, and installing and managing their Sucuri plugin and firewall.
                            </p>
                            <a href="https://www.hififitness.com/">www.hififitness.com/</a>
                            </div>
                        </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Skills
                    ----------------------------------------------- */}
                    <div className="row skill">
                        <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                        <p> My strongest skills are in frontend.  I used JavaScript and React to build projects such as: a copy of the game Minesweeper 
                            from scratch; a fully-realized Yelp clone; and a Spotify Playlist Generator app.  The Yelp clone and Spotify Playlist 
                            Generator were both created in React and requested the API’s of their respective counterparts. I am currently collaborating 
                            with a team to build a full stack wish list application. Users will be able to create a personal profile, add retail items 
                            onto their wish list, and have a social media platform for their friends to access these items.  We are using Django, React, 
                            and a Heroku database to develop the beta version of this project.
                        </p>
                        <div className="bars">
                            <ul className="skills">
                            <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                            <li><span className="bar-expand illustrator" /><em>Premier</em></li>
                            <li><span className="bar-expand css" /><em>Wordpress</em></li>
                            <li><span className="bar-expand html5" /><em>CSS</em></li>
                            <li><span className="bar-expand css" /><em>HTML5</em></li>
                            <li><span className="bar-expand html5" /><em>JavaScript</em></li>
                            <li><span className="bar-expand css" /><em>React</em></li>
                            <li><span className="bar-expand jquery" /><em>Python</em></li>
                            <li><span className="bar-expand jquery" /><em>Git</em></li>
                            <li><span className="bar-expand css" /><em>Spanish</em></li>
                            </ul>
                        </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </div>
            </section>
        </React.Fragment>
      );
    }
};