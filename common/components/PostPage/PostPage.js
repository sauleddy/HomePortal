import React, { Component } from 'react';
import { PostContainer } from '../../containers/PostsContainer';

class PostPage extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <PostContainer />
      </div>
    );
  }
}

export default PostPage;
