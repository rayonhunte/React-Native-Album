/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';

//import components

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


export default class App extends Component<{}> {
  state = {
    headerText: 'Albums'
  }
  render() {
    return  (
        <View style={{ flex: 1 }}>
          <Header headerText={this.state.headerText} /> 
          <AlbumList />
        </View>
    );
  }
}
