import React, { Component } from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';

export default class OrderSearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: "Customer Name"
    }
  }

  _handleSearch() {
    console.log("search button pressed!")
  }

  _handlePickerChange() {
    console.log("picker value changed!")
  }

  render() {
    return (
      <View>
        <Text>Search Orders</Text>
        <TextInput
          placeholder={''}
        />
        <Text>Search By</Text>
        <Picker
          selectedValue={this.state.pickerSelection}
          onValueChange={this._handlePickerChange}
        >
          <Picker.item label="Customer Name" value="Customer Name" />
          <Picker.item label="Phone Number" value="Phone Number" />
          <Picker.item label="Email" value="Email" />
        </Picker>
        <Button
          onPress={this._handleSearch}
          title={'Search'}
        />
      </View>
    )
  }
}