import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Tarea from './Tarea';

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      {this.props.cargando && 
        <ActivityIndicator size='large'
          color='#640064'
        />
      }        

      {!this.props.cargando && 
          <FlatList data={this.props.tareas}
            renderItem={({item})=> {
            return <Tarea item={item} eliminar={this.props.eliminar} />;
          }} 
          keyExtractor={(item)=> item.key.toString()}
        />
      }        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#BADFEF'
    },
});
