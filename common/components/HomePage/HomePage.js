import React, { Component } from 'react';
import { PostsContainer } from '../../containers/PostsContainer';
import DropzoneComponent from 'react-dropzone-component';
import StorageAWS from '../../utils/Storage/StorageAWS'
import Tour from '../../utils/Tour/Tour'

import { 
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY
} from '../../constants/Credential';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.djsConfig = {
        addRemoveLinks: true,
        acceptedFiles: "image/jpeg,image/png,image/gif,text/html",
        autoProcessQueue: false
    };

    this.componentConfig = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        postUrl: '/uploadHandler'
    };

    let authInfo = { accessKeyId:AWS_ACCESS_KEY_ID, secretAccessKey:AWS_SECRET_ACCESS_KEY };
    this.myStorageAWS = new StorageAWS(authInfo);

    this.dropzone = null;
  }

  handleFileAdded(file) {
      console.log(file);

      /*let fReader  = new FileReader();
      fReader.addEventListener("load", function () {
        console.log(fReader.result);
        let myFile = File.createFromFileName('file:///home/eddy/Ed_Project/Home_Portal/public/cleanblog/img/home-bg.jpg');
        console.log(myFile);

      }, false);

      if (file) {
        fReader.readAsText(file, "UTF-8");
      }*/

      /*let bucket = 'eajsfamilyportal';
      let fileinfos = [{Key:`public/${file.name}`, Body:file}];
      this.myStorageAWS.uploadFiles(bucket, fileinfos, function(err, data) {
        if(err) console.log(`Failed to uploadFiles:${err}`);
        else {
          console.log(`Succeed to uploadFiles:${data[0].Key},`);
          console.log(data[0].Res);
        }
      });*/

      /*let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
          console.log(xhr.responseText);
          let response = JSON.parse(xhr.responseText);
          console.log(response.tours[0]);
        }
      };
      xhr.open('GET', "https://s3-ap-northeast-1.amazonaws.com/eajsfamilyportal/tours/config.json", true);
      xhr.send();*/

      let myTour = new Tour(this.myStorageAWS);
      myTour.getTours("https://s3-ap-northeast-1.amazonaws.com/eajsfamilyportal/tours/config.json")
      .then(function (data) {
        console.log(data);
        //let response = JSON.parse(xhr.responseText);
      }).catch(function(err) {
        console.log(`Failed to getTours:${err}`);
      });
      
      //console.log(this.dropzone.getQueuedFiles());
  }

  handleFileRemoved(file) {
      console.log(file);

      let bucket = 'eajsfamilyportal';
      let fileinfos = [{Key:`public/${file.name}`}];
      this.myStorageAWS.deleteFiles(bucket, fileinfos, function(err, data) {
        if(err) console.log(`Failed to deleteFiles:${err}`);
        else {
          console.log('Succeed to deleteFiles:');
          console.log(data);
        }
      });
  }

  render() {
    var postPreviews= [{postTitle:"Post Title1" ,postSubTitle:"Post Subtitle1", postMeta:"Post Meta1"},{postTitle:"Post Title2" ,postSubTitle:"Post Subtitle2", postMeta:"Post Meta2"},{postTitle:"Post Title3" ,postSubTitle:"Post Subtitle3", postMeta:"Post Meta3"}]

    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
        init: dz => this.dropzone = dz,
        addedfile: this.handleFileAdded.bind(this),
        removedfile: this.handleFileRemoved.bind(this)
    }


    return (
      <div>
				<DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />

        <PostsContainer postPreviews={postPreviews}/>


			</div>
    )
  }
}

export default HomePage;
