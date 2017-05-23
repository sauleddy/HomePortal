import React, { Component } from 'react';

class Post extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
    	<article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div dangerouslySetInnerHTML={{__html: this.props.innerBody}}></div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Post;