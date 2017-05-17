import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <header
          className="intro-header"
          style={{backgroundImage: 'url(https://homeportal.s3.amazonaws.com/album/post-sample-image.jpg)'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                  <div className="site-heading">
                    <h1>Ed's Family</h1>
                    <hr className="small" />
                    <span className="subheading">Welcome to Ed's family.</span>
                  </div>
                </div>
              </div>
            </div>
        </header>
      </div >
    )
  }
}

export default Header;
