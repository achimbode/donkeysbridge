import React, { Component } from 'react';
import './ImageResults.css';
import UnsplashImageSearch from './services/UnsplashImageSearch.js';
//import GoogleImageSearch from './services/GoogleImageSearch.js'; // Test deactivated...

class ImageResults extends Component {
  constructor(props) {
    super(props);
    this.dataProvider = new UnsplashImageSearch({get_local:true});
    this.state = {
      imgs: []
    };
    this.render = this.render.bind(this);
    this.renderList = this.renderList.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    // this.dataProvider.getPromise()
    fetch('http://localhost:3001/unsplash')
      //.then(res => console.log('componentDidMount: from server = ', res))
      .then(res => res.json())
  		.then(data => {
        console.log('componentDidMount: res.json() = ', data);
        this.setState({ imgs: data });
  		})
  		.catch(err => {
  			console.log('Error happened during fetching!', err);
  		});
  }
  renderList() {
    if(!this.state.imgs[0]) return <p>no imgs</p>
    const items = this.state.imgs.map((img, i) => (
      <div className="image_result" key={i}>
        <img src={img.thumb} />
        <span className="image_description">{img.description}</span>
      </div>
    ));
    return <div className="image_resultlist">{items}</div>;
  }
  render() {
    console.log('this.state.imgs = ' + this.state.imgs);
    return (
      <div className="image_results">
        {this.renderList()}
      </div>
    );
  }
}

export default ImageResults;
