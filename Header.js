import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Ingresa una tarea" 
            style={styles.input}
            onChangeText={this.props.cambiarTexto}
            onSubmitEditing={this.props.agregar}
            value={this.props.texto}>
        </TextInput>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#A7E1FA',
      justifyContent:'center',
    },
    text: {
        color:'white',
        paddingVertical: 10,
        fontSize: 24
    },
    input: {
        paddingHorizontal: 16,
        backgroundColor: '#E2F7FF',
        paddingVertical: 10,
        fontSize: 24
    }
  });
  