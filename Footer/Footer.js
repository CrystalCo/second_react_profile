import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <footer>
                    <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                        <li><a href="mailto:crystal.contr@gmail.com"><i className="fa fa-google-plus" /></a></li>
                        <li><a href={resumeData.linkedIn}><i className="fa fa-linkedin" /></a></li>
                        <li><a href={resumeData.instagram}><i className="fa fa-instagram" /></a></li>
                        <li><a href={resumeData.github}><i className="fa fa-github" /></a></li>
                        <li><a href={resumeData.skype}><i className="fa fa-skype" /></a></li>
                        </ul>
                        <ul className="copyright">
                        <li>© Copyright 2019 CrystalCoding</li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </footer> 
            </React.Fragment>
        );
    }
};
