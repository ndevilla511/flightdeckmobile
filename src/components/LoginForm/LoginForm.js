import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
  }



  _handleLogIn() {
    console.log("Log in button pressed!")
  }

  render() {
    return (
      <View>
        <View>
          <TextInput placeholder={"Username"}/>
        </View>
        <View>
          <TextInput placeholder={"Password"}/>
        </View>
        <Button
          onPress={this._handleLogIn}
          title={"Login"}
        />
      </View>
    )
  }
};