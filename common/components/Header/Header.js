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
          className="hero-image intro-header" role="banner"  
          style={{backgroundImage: `url(${this.props.image})`
                , backgroundSize: '100% cover', overflow: 'hidden'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                  <div className="site-heading">
                    <h1>{this.props.title}</h1>
                    <hr className="small" />
                    <span className="subheading">{this.props.subtitle}</span>
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
