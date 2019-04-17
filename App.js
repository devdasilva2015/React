/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu \n' +
    'So it works',
});


export default class App extends Component{
  state = {
    placeName:""
  }
  
// placeNameChangedHandler = (event) => {
  placeNameChangedHandler = val => {
  // alert(event);
  this.setState({
    placeName: val
  });
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>VVelcome to React Native!</Text>
        <TextInput 
          style={{width: 300, borderColor:"black", borderWidth:1}}
          placeholder="Type an Awesome Place!!!"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          title="Button :)"
        />
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    alignItems: "center",
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
