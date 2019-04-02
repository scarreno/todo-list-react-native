import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      tareas: [],
      texto:''
    };
  }

  establecerTexto  = (value) =>{    
    this.setState({texto:value});
  }

  agregarTarea =(tarea)=>{
    this.setState({
      tareas: [...this.state.tareas, tarea],
      texto:''
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header 
          cambiarTexto={this.establecerTexto} 
          agregar={this.agregarTarea}
          texto={this.state.texto}
          />
          <Text>{this.state.tareas.length}</Text>
        <Body/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  },
});

