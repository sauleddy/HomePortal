import { ApiBase } from './ApiBase';
import Tour from '../utils/Tour/Tour'
import StorageAWS from '../utils/Storage/StorageAWS'

import { 
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY
} from '../constants/Credential';

import {
  STORAGE_TOURS_CONFIG
} from '../constants/Urls';

import {
  Warning
} from '../constants/Strings';

import { 
  ActionHomePage,
  ActionModalNormal
} from '../actions';

class ApiStorage extends ApiBase {
  constructor() {
    super();

    let authInfo = { accessKeyId:AWS_ACCESS_KEY_ID, secretAccessKey:AWS_SECRET_ACCESS_KEY };
    this.myStorageAWS = new StorageAWS(authInfo);
    this.myTour = new Tour(this.myStorageAWS);

  }

  GetPosts(dispatch, type) {
    console.log(`[ApiStorage] GetPosts:${type}`);
    
    let tours = [
      { "key":"20170515_九份_平溪"
        , "title":"九份、平溪一日遊"
        , "subtitle":"硯傑絜晽今天園遊會補假，好久沒到九份以及平溪走走，可惜媽媽要回診無法同行 T.T。"
        , "date":"May 15, 2017"
        , "author": "Ed"
      },
      { "key":"20170410_竹子湖"
        , "title":"竹子湖賞海芋"
        , "subtitle":"又到了一年一度的海芋季，對住在北投的我們來說竹子湖可是近在咫尺，當然不能錯過這場饗宴囉。"
        , "date":"April 10, 2017"
        , "author": "Ed"
      }
    ];
    dispatch(ActionHomePage.UpdatePosts({ posts: tours }));

    /*
    this.myTour.getTours(STORAGE_TOURS_CONFIG)
      .then(function (data) {
        let tours = JSON.parse(data).tours;
        console.log(tours);
        dispatch(ActionHomePage.UpdatePosts({ posts: tours }));
      }).catch(function(err) {
        // console.log(`Failed to getTours:${err}`);
        dispatch(ActionModalNormal.Show({ title: Warning, content:err.toString() }));
    });
    */
  }
};

let ApiStorageIns = new ApiStorage();

export { ApiStorage, ApiStorageIns }