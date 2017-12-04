import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
  state = {
   albums: []
  }
  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
      response => {
        this.setState({
          albums: response.data
        });
      }
     );
  }
  render() {
    return (
      <ScrollView>
        {this.state.albums.map(album => <AlbumDetails album={album} key={album.title} />)}
      </ScrollView>
    );
  }
}

export default AlbumList;
