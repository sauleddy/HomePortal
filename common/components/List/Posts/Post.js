import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
// import ImageGallery from 'react-image-gallery';
import { css, StyleSheet } from 'aphrodite/no-important';
import Lightbox from 'react-images';

class Post extends Component {

  constructor() {
    super();
  
    this.state = {
      iFrameHeight: '0px',
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.images = [];

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);

  }
  
  componentDidMount(node) {
    console.log('componentDidMount');
    this.refs.googledoc.addEventListener('load', this.onIframeLoaded.bind(this));
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('componentWillUpdate');
    // console.log(nextProps);

    this.images.length = 0;
    let images = this.images;
    if(nextProps.resource) {
      // console.log(nextProps.images);
      nextProps.resource.forEach(function(value, key) {
        // images.push({original: value});
        images.push({ src: value.get('img'), thumbnail: value.get('thumbnail') });
      });
    }
  }

  onIframeLoaded() {
    var height = this.refs.googledoc.contentWindow.document.body.offsetHeight + 50;
    // const obj = ReactDOM.findDOMNode(this);
    // console.log(height);
    this.setState({
      "iFrameHeight": height + 'px'
    });
  }

  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext () {
    console.log(this.images);
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage () {
    if (this.state.currentImage === this.images.length - 1) return;

    this.gotoNext();
  }

  renderGallery () {
    const images = this.images;

    if (!images) return;

    // console.log(images);

    const gallery = images.map((obj, i) => {
      return (
        <a
          href={obj.src}
          className={css(classes.thumbnail, classes[obj.orientation])}
          key={i}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <img src={obj.thumbnail} className={css(classes.source)} />
        </a>
      );
    });

    // console.log('gallery');
    // console.log(gallery);

    return (
      <div className={css(classes.gallery)}>
        {gallery}
      </div>
    );
  }

  render() {
    return (
    	<article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              {/*
              <ImageGallery
                items={images}
                slideInterval={2000}
                showThumbnails={false}
              />
              */}
              <div>
                <style type="text/css" dangerouslySetInnerHTML={{__html: 
                  `body {
                    background-color: #FFFFFF;
                    margin: 0;
                  }
                  .iframe-wrapper {
                    margin: auto;
                    max-width: 834px;
                    width: 100%;
                    background: white;
                    box-shadow: 0 0 0 0pt #d1d1d1,0 0 0pt 0pt #ccc;
                    padding-top: 2px;
                  }
                  iframe {
                    margin: auto;
                    max-width: 794px;
                    width: 100%;
                    height: 100%;
                    border: none;
                    display: block;
                  }
                  p {
                    text-align: center;
                    padding: 15px;
                    margin: 0;
                    font-size: 12px;
                    font-family: 'Helvetica';
                    max-width: 700px;
                    margin: auto;
                    line-height: 1.4em;
                  }

                  p.warning {
                    font-size: 0.7em;
                  }

                  @media print {
                    body {
                      background: none;
                    }
                    p {
                      display: none;
                    }
                    .iframe-wrapper {
                      height: auto;
                      max-width: none;
                      box-shadow: none;
                      padding-top: 0;
                      width: 100%;
                    }
                    iframe {
                      width: 100%;
                    }
                  }` 
                }} />
                <div style={{height: this.state.iFrameHeight}} className="iframe-wrapper" >
                  <iframe ref="googledoc" src={this.props.docsUrl} />
                </div>
              </div>
            </div>
            {this.renderGallery()}
            <Lightbox
              currentImage={this.state.currentImage}
              images={this.images}
              isOpen={this.state.lightboxIsOpen}
              onClickImage={this.handleClickImage}
              onClickNext={this.gotoNext}
              onClickPrev={this.gotoPrevious}
              onClose={this.closeLightbox}
            />
          </div>
        </div>
      </article>
    );
  }
}

const gutter = {
  small: 2,
  large: 4,
};
const classes = StyleSheet.create({
  gallery: {
    marginRight: -gutter.small,
    overflow: 'hidden',

    '@media (min-width: 500px)': {
      marginRight: -gutter.large,
    },
  },

  // anchor
  thumbnail: {
    boxSizing: 'border-box',
    display: 'block',
    float: 'left',
    lineHeight: 0,
    paddingRight: gutter.small,
    paddingBottom: gutter.small,
    overflow: 'hidden',

    '@media (min-width: 500px)': {
      paddingRight: gutter.large,
      paddingBottom: gutter.large,
    },
  },

  // orientation
  landscape: {
    width: '30%',
  },
  square: {
    paddingBottom: 0,
    width: '40%',

    '@media (min-width: 500px)': {
      paddingBottom: 0,
    },
  },

  // actual <img />
  source: {
    border: 0,
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    width: 'auto',
  },
});

export default Post;