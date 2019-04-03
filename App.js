import React from 'react';
import { View, StyleSheet, AsyncStorage, Button } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      tareas: [],
      texto:'',
      cargando: true
    };
  }

  establecerTexto  = (value) =>{    
    this.setState({texto:value});
  }

  agregarTarea =()=>{
    const nuevasTareas = [...this.state.tareas, {texto: this.state.texto, key: Date.now()}];
    this.setState({
      tareas: nuevasTareas,
      texto:''
    });
    this.guardarEnTelefono(nuevasTareas);  
    
    nuevasTareas.forEach(element => {
      console.log(element);
    });
  }

  guardarEnTelefono = (tareas)=> {
    AsyncStorage.setItem('@AppCursoUdemy:array',JSON.stringify(tareas))
    .then((valor)=>{
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  recuperarDeTelefono =()=>{
    AsyncStorage.getItem('@AppCursoUdemy:array')
    .then((valor)=>{
      setTimeout(()=>{
        this.setState({
          cargando: false
        });
      },5000);
      
      if(valor==null)
        return null;
      
      const tareas = JSON.parse(valor);
      this.setState({
        tareas: tareas  
      });
      
    })
    .catch((err)=> {
      console.log('error al obtrener valor');
      console.log(err);
      this.setState({
        cargando: false
      });
    })
  }

  eliminarTarea =(id) => {
    const nuevasTareas = this.state.tareas.filter((tarea)=>{
        return tarea.key !== id;
    });

    this.setState({
      tareas: nuevasTareas
    });

    this.guardarEnTelefono(nuevasTareas);
  }

  componentDidMount(){
    this.recuperarDeTelefono();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header 
          cambiarTexto={this.establecerTexto} 
          agregar={this.agregarTarea}
          texto={this.state.texto}
          />
        <Body tareas={this.state.tareas} 
          eliminar={this.eliminarTarea}
          cargando={this.state.cargando}
          />
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

