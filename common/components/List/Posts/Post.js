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
              <div>
                <style type="text/css" dangerouslySetInnerHTML={{__html: 
                  `body {
                    background-color: #FFFFFF;
                    margin: 0;
                  }
                  .iframe-wrapper {
                    height: 500vh;
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
                <div className="iframe-wrapper">
                  <iframe id="googledoc" src={this.props.docsUrl} />
                </div>
                <div dangerouslySetInnerHTML={{__html: 
                  `<script type="text/javascript">
                    console.log('XXXXXXXXXXXXXXXXXXXx');
                    var iframe = document.getElementById('googledoc');
                    iframe.addEventListener('load', function(e){
                      console.log('OOOOOOOOOOOOOOOOOO');
                    
                      document.title = iframe.contentWindow.document.title;
                      setTimeout(function(){
                        var height = iframe.contentWindow.document.body.offsetHeight+50;
                        document.getElementsByClassName('iframe-wrapper')[0].setAttribute('style', 'height: '+height+'px;');
                      }, 1000);
                    });

                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

                    ga('create', 'UA-36223212-9', 'auto');
                    ga('send', 'pageview');

                  </script>`
                }} />

              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Post;