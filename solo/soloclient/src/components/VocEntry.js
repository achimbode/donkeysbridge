import React, { Component } from 'react';
import './VocEntry.css';
import $ from "jquery";

class VocEntry extends Component {
  constructor(props) {
    super(props);
  }
  onChange(e){
    var term = e.target.value;
    console.log(e.target.value);
    $('#term').text(term);
  }
  render() {
    return (
      <div className="VocEntry">
        <input id="orig" className="vocabulary" type="text"
         placeholder="the word" onChange={this.onChange}/>
        <input id="trans" className="vocabulary" type="text"
         placeholder="the translation" onChange={this.onChange}/>
        <p className="VocEntry-intro">
          VocEntry <span id="term">initial</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  var langs = state.app.langs; // {orig:'de', trans:'es'}
  var voc = state.app.voc;
  return ({
    word: state.voc[langs.orig],
    arrWordTranslations: state.voc[langs.trans],
    langs: langs,
    sentences: state.voc.sentences
  });
}

const mapDispatchToProps = (dispatch) => ({
  addVoc: { type: 'ADD_VOC'
})

export default connect(mapStateToProps, mapDispatchToProps)(VocEntry);
