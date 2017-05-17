
import TourBase from './TourBase'

class Tour extends TourBase {
	
	constructor(storage) {
		super(storage);
	}

	getTours(url) {
		return new Promise(function (resolve, reject) {
			try {
				let xhr = new XMLHttpRequest();
	      xhr.onreadystatechange = function(e) {
	        if (xhr.readyState == 4 && xhr.status == 200) {
	          // console.log(xhr.responseText);
	          // let response = JSON.parse(xhr.responseText);
	          // console.log(response.tours[0]);
	          resolve(xhr.responseText);
	        } else if(xhr.readyState == 4 && xhr.status != 200) {
	        	reject(new Error(`${xhr.status}`));
	        }
	      };
	      xhr.open('GET', url, true);
	      xhr.send();	
			} catch(e) {
				reject(new Error('500'));	
			}
	  });
	}
}

module.exports = Tour;