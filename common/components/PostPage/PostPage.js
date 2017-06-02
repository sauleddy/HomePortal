import React, { Component } from 'react';
import { PostContainer } from '../../containers/PostsContainer';

class PostPage extends Component {

  constructor() {
    super();
  }

  componentDidMount(node) {
    console.log('[PostPage] componentDidMount');
    this.props.onComponentDidMount(this.props.post);
  }

  componentWillMount(nextProps, nextState) {
    console.log('[PostPage] componentWillMount');
  }

  /*componentWillUpdate(nextProps, nextState) {
    console.log('[PostPage] componentWillUpdate');
    console.log(nextProps);
    console.log(nextState);
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('[PostPage] componentWillReceiveProps');
    console.log(nextProps);
  }*/
  
  render() {
    return (
      <div>
        <PostContainer />
      </div>
    );
  }
}

export default PostPage;
