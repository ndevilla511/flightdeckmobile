import React, { Component } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import DetailsCard from '../../components/DetailsCard/DetailsCard'

export default class OrderDetails extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <View>
        <Text>Order Details</Text>
        <DetailsCard />
        <Text>Jobs</Text>
        <FlatList />
      </View>
    )
  }
}