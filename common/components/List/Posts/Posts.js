import React, {Component} from 'react'


class PostMeta extends Component {
  render() {
    return (
      <p className="post-meta">
        {this.props.postMeta}
      </p>
    );
  }
}

class PostSubTitle extends Component {
  render() {
    return (
      <h3 className="post-subtitle">
        {this.props.postSubTitle}
      </h3>
    );
  }
}

class PostTitle extends Component {
  render() {
    return (
      <div className="PostTitle">
        <h2 className="post-title">
          {this.props.postTitle}
        </h2>
      </div >
    );
  }
}

class PostPreview extends Component {
  render() {
    return (
      <div className="PostPreview">
        <div className="post-preview">
          <a href="post.html">
            <PostTitle postTitle={this.props.postTitle}/>
            <PostSubTitle postSubTitle={this.props.postSubTitle}/>
          </a>
          <PostMeta postMeta={this.props.postMeta}/>
        </div>
        <hr />
      </div>
    );
  }
}


class PostPreviewList extends Component {

  render() {
    var postPreviews = this.props.postPreviews.map(function(item, index) {
      let meta = `Posted by ${item.author} on ${item.date}`
      return <PostPreview key={item.key} postTitle={item.title} 
        postSubTitle={item.subtitle} postMeta={meta} />;
    });
    return (
      <div>
        {postPreviews}
      </div>
    );
  }
}

class Posts extends Component { 
  render() {
    return (
      <div className="Content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <PostPreviewList postPreviews={this.props.posts}/>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Posts;
