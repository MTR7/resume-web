import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
          <div>
            <a href="https://github.com/oparkins"><img src="./github.png" alt="GitHub" style={{width:"36px", paddingRight: "1em"}}/></a>
            <a href="https://keybase.io/oparkins"><img src="./keybase.svg" alt="Keybase" style={{width:"36px"}}/></a>
          </div>

           <p>
              &copy; Copyright 2019 Owen Parkins
              <br/>
              Made with React. See <a href="https://github.com/oparkins/resume-web">GitHub</a> for source<br/>
              Template idea from <a href="https://github.com/tbakerx/react-resume-template">Tim Baker</a>
           </p>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;