import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


// ./ import from same directory
class AlbumList extends Component {
  //declares initial empty state
  state = { albums: [] };

  componentWillMount() {  //a hook will make component run
  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  //  fetch('https://rallycoding.herokuapp.com/api/music_albums')
  //    .then(response => response.json())
//      .then(data => this.setState({ albums: data}));
  }
//    .then(data => this.setState({albums: data}));
    //changes state to new value

//key is a unique value that stays the same during re-renders
renderAlbums() {
  return this.state.albums.map(album =>
    <AlbumDetail key={album.title} album={album} />  //new variable = album
  );
}

  render() {
    console.log(this.state);
    //ScrollView = scrollable, flex 1 is required
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
