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
    let post = this.props.post;
    let meta = `Posted by ${post.author} on ${post.date}`;
    return (
      <div className="PostPreview">
        <div className="post-preview">
          <a role='button' onClick={this.props.onPostClick.bind(null, post)}>
            <PostTitle postTitle={post.title}/>
            <PostSubTitle postSubTitle={post.subtitle}/>
          </a>
          <PostMeta postMeta={meta}/>
        </div>
        <hr />
      </div>
    );
  }
}


class PostPreviewList extends Component {

  render() {
    let posts = this.props.postPreviews;
    let pplistThis = this;
    var postPreviews = [];
    var values = [];
    Object.keys(posts).forEach(function (key) {
      values.push(posts[key]);
    });
    postPreviews = values.map(function(item, index) {
      return <PostPreview key={item.postid} post={item} onPostClick={pplistThis.props.onPostClick} />;
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
              <PostPreviewList postPreviews={this.props.posts} onPostClick={this.props.onPostClick}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
