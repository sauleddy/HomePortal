import memjs from 'memjs';
import request from 'request';

let mc = memjs.Client.create((process.env.MEMCACHED_1_PORT || '').replace('tcp://', ''))

let instance = null;
const enforcer_valid = new Object();

class GoogleDocsHelper {
	constructor(enforcer) {
		if(enforcer != enforcer_valid) {
			throw new Error('Cannot constructor singleton');
		}
	}

	static get_instance() {
		if(instance == null) {
			instance = new GoogleDocsHelper(enforcer_valid);
		}
		return instance;
	}

	getDocsHtml(docsId) {
		return new Promise(function (resolve, reject) {
			getIframeContent(docsId, false, function(html) {
				// console.log(html);
				if(!html) reject(err);
				resolve(html);
		  });
	  });
	}
}

function getIframeContent(hash, useCache, callback) {
	if (useCache) {
    mc.get(hash, function(err, val) {
      if (val) {
        console.log('Read', hash);
        callback(val.toString())
      } else {
        generateIframe(hash, callback);
      }
    })
  } else {
    generateIframe(hash, callback);
  }	
}

function generateIframe(hash, callback) {
	request.get({url: 'https://docs.google.com/document/d/'+hash+'/pub', encoding: 'utf-8', followRedirect: false}, function(error, response, body) {
    if (response.statusCode >= 300) {
    	console.log(`[GoogleDocsHelper.js] Failed to download Google docs:${response.statusCode}`);
      return callback(null);
    }
    let result = processGoogleHTML(body);
    /*mc.set(hash, result, function(err, val) {
      console.log('Wrote', hash);
    }, 30);*/
    callback(result);
  }).end();
}


function processGoogleHTML(html) {
	return html
  .replace(/<a\s/ig, '<a target="_blank" ')
  .replace(/(<script[\s\S]+?<\/script>)/gi, '')
  .replace(/(<div id="header">[\s\S]+?<\/div>)/, '')
  .replace(/(<div id="footer">[\s\S]+?<\/div>)/, '')
}

export { GoogleDocsHelper }