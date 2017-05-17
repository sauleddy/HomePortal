import React, {Component} from 'react'

class NavBar extends Component {
    render() {
      return (
          // <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
          <nav className="navbar navbar-default navbar-custom">
          <div className="container-fluid">
            <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                Menu <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="/">Start Bootstrap</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="post.html">Sample Post</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
}

export default NavBar;