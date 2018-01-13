// idea was to load everything from the frontend
// ... and have an implementation each in one of the services file
// NOT IN USE ANYMORE
// These implementations have moved to the backend

// just a test - the npm package sounded rewarding...!

import GoogleImageSearch from 'free-google-image-search'
const doSearchGoogle = false; // will otherwise start as soon as this file is requested

if(doSearchGoogle) {
  GoogleImageSearch.searchImage("cats")
  .then((res) => {
    console.log('GoogleImageSearch', res); // This will return array of image URLs
  });
}

/*
ERROR in Browser:
index.js:19 GET https://crossorigin.me/https://www.google.com.ua/search?source=lnms&sa=X&gbv=1&tbm=isch&q=cats net::ERR_ABORTED

➜  client git:(master) ✗ npm install -S jquery jsdom
npm WARN deprecated content-type-parser@1.0.2: This package has been renamed whatwg-mimetype; please upgrade.
+ jquery@3.2.1
+ jsdom@11.5.1
added 16 packages, removed 1 package, updated 5 packages and moved 2 packages in 28.198s
➜  client git:(master) ✗ npm install -S underscore
+ underscore@1.8.3
added 1 package in 14.793s
➜  client git:(master) ✗ npm install -S lodash
+ lodash@4.17.4
updated 1 package in 17.178s
➜  client git:(master) ✗ npm uninstall -S underscore
removed 1 package in 11.306s
➜  client git:(master) ✗
*/
