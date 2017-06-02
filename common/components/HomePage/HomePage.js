import React, { Component } from 'react';
import { PostsContainer } from '../../containers/PostsContainer';

class HomePage extends Component {

  constructor(props) {
    super(props);
    console.log("[HomePage] constructor");
  }

  componentWillMount() {
    console.log("[HomePage] componentWillMount");
    this.props.onComponentWillMount();
  }

  componentDidMount(node) {
    console.log("[HomePage] componentDidMount");
    this.props.onComponentDidMount(node);
  }

  render() {
    return (
      <div>
				<PostsContainer />
			</div>
    )
  }
}

export default HomePage;
