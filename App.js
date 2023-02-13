import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    
    this.state={
      mensagem: 'Logou'
    }
  }

  mudouMensagem = msg => {
    this.setState({mensagem : msg});
  }


  render(){
    const {mensagem} = this.state
    return (
      <View style={styles.container}>
        {Platform.OS === 'android' ? (
        <Text>Android</Text>):
        (<Text style={styles.text}>FIAP</Text>)}
  
        
        <Text style={[styles.text, styles.textcolor]}>Portal do aluno</Text>
        <StatusBar style="auto" />
        <TextInput placeholder='Login' style = {styles.textInput} onChangeText={this.mudouMensagem}/> 
        <TextInput placeholder='Password' style ={styles.textInput}/>
        <Button title='Clique' onPress={()=> alert(mensagem)} color='violet'/>
      </View>
  
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,


  },

  text:{
    fontSize: 25,
    ...Platform.select({
      ios:{
        color: 'red'
      },
      android:{
        color:'green'
      }
    })
  },
  textcolor:{
    color: 'purple'
  }
});
