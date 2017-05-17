import React, { Component } from 'react';

class Post extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
    	<div key={this.props.key} className="post-preview col-xs-10 no-gutter">
    		<div>
    			<h2>
    				<a role='button' title={'The Animals'}>
    					'The Animals'
            </a>
          </h2>
        </div>
        <p>'This is my introductions'</p>
			</div>
    );
  }
}

export default Post;