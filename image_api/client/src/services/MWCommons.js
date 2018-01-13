// idea was to load everything from the frontend
// ... and have an implementation each in one of the services file
// NOT IN USE ANYMORE
// These implementations have moved to the backend

import {mapValues} from 'lodash';

class CommonsImageSearch {

  constructor(config) {
    this.get_local = config.get_local || true;
    // this.local_api = config.local_api || 'unsplash_demo_call.json';
    this.local_api = config.local_api || 'unsplash_demo_beachgirls.json';
    this.unsplash_api = 'https://api.unsplash.com/photos/?client_id=';
  }

  getPromise() {
    const fetchUrl = this.get_local ? this.local_api : this.unsplash_api;
    return fetch(fetchUrl, { mode: 'no-cors' }).then(res => res.json())
  }

  formatToMatchInterface(originalPlainObject) {
    const convertedObj = mapValues(originalPlainObject, function(img) {
      return {
        description: img.description,
        thumb: img.urls.thumb,
        img: img.urls.thumb // thumbs sind gross genug...
      }
    })
    return Object.values(convertedObj);
  }

}

export default CommonsImageSearch;
