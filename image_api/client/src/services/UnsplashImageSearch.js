import {mapValues} from 'lodash';
import unsplash from '../secrets/unsplash.js';

class UnsplashImageSearch {

  constructor(config) {
    this.get_local = config.get_local || true;
    // this.local_api = config.local_api || 'unsplash_demo_call.json';
    this.local_api = config.local_api || 'http://localhost:3001/unsplash';
    this.unsplash_api = 'https://api.unsplash.com/photos/?client_id=' + unsplash.client_id;
  }

  getPromise() {
    const fetchUrl = this.get_local ? this.local_api : this.unsplash_api;
    return fetch(fetchUrl, { mode: 'no-cors' });
  }

  // being transferred to backend at the moment
  formatToMatchInterface(originalPlainObject) {
    // return reduce() ???
    // path: https://lodash.com/docs/4.17.4#at
    // path: https://lodash.com/docs/4.17.4#get
    // https://lodash.com/docs/4.17.4#mapValues -> !
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

export default UnsplashImageSearch;
