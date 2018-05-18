import React, { Component } from 'react';
import { View } from 'react-native';
import styles from 'DetailsCard_styles'

export default class DetailsCard extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
};