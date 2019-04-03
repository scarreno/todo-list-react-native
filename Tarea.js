import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Tarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}> {this.props.item.texto} </Text>
        <TouchableOpacity onPress={()=> {this.props.eliminar(this.props.item.key)}}>
            <Ionicons name="md-trash" size={24} color="gray" />
        </TouchableOpacity>        
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D7FFFF',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 5,
      paddingHorizontal: 16,
      height: 50
    },
    texto: {
        fontSize: 24
    }
  });
  