class UnsplashImageSearch {

  constructor(config) {
    this.get_local = config.get_local || true;
    this.local_api = config.local_api || 'unsplash_demo_call.json';
    this.unsplash_api = 'https://api.unsplash.com/photos/?client_id=53277b4a8317b3343b7f50f877114bc33135187e3cf5a2276dcfb9bb5bd6e96a';
  }

  getPromise() {
    const fetchUrl = this.get_local ? this.local_api : this.unsplash_api;
    return fetch(fetchUrl, { mode: 'no-cors' })
  }

}

export default UnsplashImageSearch;
