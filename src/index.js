import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
// creating new HTML component
// Must instert generated html and place on page (in the DOM)
//key for searching youtube
const API_KEY = "AIzaSyC3zqAwQrmlc_NBpvYlUWHdL-Szbziz2RI";
//downwards data flow
//most parent component for fetching videos therefore index.js should do it.
//index.js is top level component



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {videos: [] };
//updates the list of videos with every search using this.state.videos
    YTSearch({key: API_KEY, term: 'Golden State Warriors'}, (videos) => {
      this.setState({ videos }); //same name ({videos: videos})
    });
  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }

}
//PLacing in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
