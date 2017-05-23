import axios from 'axios';
import { HttpHelperBase } from './HttpHelperBase';

import {
  STATUS_OK,
  STATUS_EXEPTION
} from '../../constants/Status';

import {
  ModalResponse
} from '../../constants/Models';

class HttpHelper extends HttpHelperBase {
	
	constructor() {
		super();
	}

  /*
    [IN]
    url 
    
    [OUT]
    {status: status_code, data: ''}
  */
	DownloadFile(url) {
    return new Promise(function (resolve, reject) {
      
      let response = ModalResponse.toJS();

      try {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(e) {
          if (xhr.readyState === 4) {
            response.status = xhr.status;
            if (xhr.status === STATUS_OK) response.data = xhr.responseText;
            resolve(response);
          }
        };
        //xhr.open('GET', url, true);
        xhr.open('GET', url);
        xhr.setRequestHeader('Authorization', 'Bearer ya29.GltTBFC-ryLuGK1oMCoe-xStYeFbIb-lZNC-aeyVii99_JR6jBooCrrhB09TUP9Le-pINznyUjtNbsOaagqZbAZxs08qm2nef4wjEGkD40uei_Xv6FXINOGCCGim'); 
        
        xhr.send();
      } catch(e) {
        console.log(`[HttpHelper.js] DownloadFile exception:${e.message}`);
        response.status = STATUS_EXEPTION;
        resolve(response);
      }
    });
  }

  /*
    [IN]
    apiInfo
    =>
    url:
    params:
    
    [OUT]
    {status: status_code, data: {}}
  */
  PostApi(apiInfo) {
    return new Promise(function (resolve, reject) {
      axios.post(apiInfo.url, apiInfo.params)
      .then((resp) => {
        resolve(resp);
      })
      .catch(function(e) {
        console.log(`[HttpHelper.js] PostApi exception:${e.message}`);
        let response = ModalResponse.toJS();
        response.status = STATUS_EXEPTION;
        resolve(response);
      });
    });
  }

}

export { HttpHelper }