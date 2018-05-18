import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import styles from 'Header_styles'

export default class Header extends Component {

  _handleBackPress() {
    console.log("back button pressed!")
  }

  _handleLogOut() {
    console.log("log out button pressed!")
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._handleBackPress()}>
          <Image
            style={styles.headerButtonIcon}
            source={require('../../assets/img/left-arrow.png')}
          />
        </TouchableHighlight>
        <Text>Flightdeck Mobile</Text>
        <TouchableHighlight>
          <Image
            style={styles.headerButtonIcon}
            source={require('../../assets/img/logout.png')}
          />
        </TouchableHighlight>
      </View>
    )
  }
}