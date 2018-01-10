import React, { Component } from 'react';
import './ImageResults.css';

class ImageResults extends Component {
  constructor(props) {
    super(props);
    this.testmode = true;
    this.local_api = 'unsplash_demo_call.json';
    this.unsplash_api = 'https://api.unsplash.com/photos/?client_id=53277b4a8317b3343b7f50f877114bc33135187e3cf5a2276dcfb9bb5bd6e96a';
    this.state = {
      imgs: []
    };
    this.render = this.render.bind(this);
    this.renderList = this.renderList.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    const fetchUrl = this.testmode ? this.local_api : this.unsplash_api;
  	fetch(fetchUrl, { mode: 'no-cors' })
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
