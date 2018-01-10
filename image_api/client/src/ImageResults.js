import React, { Component } from 'react';
import './ImageResults.css';
import UnsplashImageSearch from './services/UnsplashImageSearch.js';

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
    this.dataProvider.getPromise()
  		.then(res => res.json())
  		.then(data => {
        console.log(data[0].links.self);
        console.log(data[0].description);
  			console.log(data);
        this.setState({ imgs: data }); // data[0].links.self
        console.log('this.state: ', this.state);
  		})
  		.catch(err => {
  			console.log('Error happened during fetching!', err);
  		});
  }
  renderList() {
    console.log('renderList: ', this.state.imgs.length);
    console.log('renderList: ', this.state.imgs[0]);
    if(!this.state.imgs[0]) return <p>no imgs</p>
    const items = this.state.imgs.map((img, i) => (
      <div className="image_result" key={i}>
        <img src={img.urls.thumb} />
        <span className="image_description">{img.description}</span>
      </div>
    ));
    return <div className="image_resultlist">{items}</div>;
  }
  render() {
    //var imgList = this.renderList();
    return (
      <div className="image_results">
        {this.renderList()}
      </div>
    );
  }
}

export default ImageResults;
