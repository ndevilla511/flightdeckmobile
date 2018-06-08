import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Header from '../components/Header/Header';
import LogIn from '../screens/LogIn/LogIn';
import OrderSearch from '../screens/OrderSearch/OrderSearch';
import OrderDetails from '../screens/OrderDetails/OrderDetails';

const RootStack = createStackNavigator(
  {
    LogIn: LogIn,
    OrderSearch: OrderSearch,
    OrderDetails: OrderDetails
  },
  {
    initialRouteName: 'LogIn'
  });

export default RootStack;