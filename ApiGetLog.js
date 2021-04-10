import React, { Component } from "react";
class ApiGetLog extends Component {
  constructor(props) {
    super(props);
    this.getLog = this.getLog.bind(this);
  }


  static getLog(){

      //fetch('https://api.github.com/repos/merpxm/interview/commits').then((response) =>
        //    response.json()).then((json) => {
          //    console.log("&&&&&&&--- JSON : " + json)
            //  return json;
            //}).catch((error) => {
              //console.error(error);
            //})
      //}

      // create new XMLHttpRequest object
      const xhr = new XMLHttpRequest();

      // Github endpoint
      const url ='https://api.github.com/repos/merpxm/interview/commits'

      //return Promise
      return new Promise( function(resolve, reject){
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4){
            if (xhr.status >= 300){
              console.log("failure");
              reject("Error, status code = " + xhr.status);
            } else {
              console.log("success");
              response = JSON.parse(xhr.responseText);
              console.log("Response: " + response);
              resolve(response);
            }
          }
        }
        xhr.open('GET',url, true);
        xhr.send();
      });


  }

}

export default ApiGetLog;
