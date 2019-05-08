/**
 * @format
 */

    //Only this App component usese the
    // AppRegistery, this file must have all the
    //stuff we're going to use in other compoents

//import a library to help create a component
import React from 'react';  //brings from node_modules
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';  //have to declare location
import AlbumList from './src/components/AlbumList';

//Create a registerComponent

const App = () => (
  //flex 1 for scrollable, makes fit entire device
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>   //view tag allows for returning of 2 variables
  );
//Render it to the device

AppRegistry.registerComponent('albums', () => App);
/*
import { AppRegistry } from 'react-native';
import App from './App';
//import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/
