import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LoginForm from '../../components/LoginForm/LoginForm';

export default class LogIn extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <View>
        <Text>Flightdeck Mobile</Text>
        <LoginForm />
      </View>
    )
  }
}