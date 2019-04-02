import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#4B89B9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
