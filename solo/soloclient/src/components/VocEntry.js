import React, { Component } from 'react';
import { connect } from 'react-redux';
import cloneDeep from 'clone-deep';
import $ from 'jquery';

import './VocEntry.css';

class VocEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: {
        local: 'Ich glaubs nicht - man kann es bearbeiten!',
        foreign: 'I don\'t believe it - it\'s editable!!!'
      }
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState( cloneDeep(newProps) );
    console.log('componentWillReceiveProps: ',this.state);
  }
  onAddButtonClicked(e){
    var term = e.target.value || $('#local').value;
    console.log(term);
    $('#term').text(term);
    console.log(e.target);
  }
  onChange(e){
    console.log(e.target.value);
    // a form field without an `onChange` handler
    // ... will render a read-only field
    let word = {}; word[e.target.id] = e.target.value;
    this.setState({'word':word});
  }
  render() {
    return (
      <div className="VocEntry">
        <textarea id="local" className="vocabulary" type="text"
         placeholder="the word" onChange={this.onChange.bind(this)}
         value={this.state.word.local}/>
        <input id="foreign" className="vocabulary" type="text"
         placeholder="the translation" onChange={this.onChange.bind(this)}
         value={this.state.word.foreign}/>
        <p className="VocEntry-intro">
          VocEntry <span id="term">initial</span>
        </p>
        <button onClick={this.onAddButtonClicked}>add word</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    word: state.voc
  });
}

const mapDispatchToProps = (dispatch) => ({
  addVoc: (local, foreign) => dispatch({ type: 'ADD_VOC', currentVoc: cloneDeep(this.state) })
})

export default connect(mapStateToProps, mapDispatchToProps)(VocEntry);
