import axios from 'axios';
import { ApiBase } from './ApiBase';

import {
  API_UTILITY_HTML_TO_JSX
} from '../constants/Apis';

class ApiUtility extends ApiBase {
  constructor() {
    super();
  }

  HtmlToJsx(html) {
    return new Promise(function (resolve, reject) {
      // console.log(html);
      axios.post(API_UTILITY_HTML_TO_JSX, {html})
      .then((response) => {
        resolve(response);
      })
      .catch(function(err) {
        reject(err);
      });
    });
  }
};

export { ApiUtility }