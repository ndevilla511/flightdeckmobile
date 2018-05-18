import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import Header from '../../components/Header/Header';
import OrderSearchForm from '../../components/OrderSearchForm/OrderSearchForm';
import DetailsCard from '../../components/DetailsCard/DetailsCard';

export default class OrderSearch extends Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
      <View>
        <Header />
        <OrderSearchForm />
        <Text>Results</Text>
        <FlatList />
      </View>
    )
  }
}