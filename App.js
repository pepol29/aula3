import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform, Button, Image, ImageBackground, TouchableOpacity, Switch, ActivityIndicator, ScrollView } from 'react-native';
import imagem from '/imagem.jpg';
export default class App extends React.Component {

  constructor(props){
    super(props);
    
    this.state={
      mensagem: 'Logou',
      isEnabled: false
    }
  }

  mudouMensagem = msg => {
    this.setState({mensagem : msg});
  }


  render(){
    const {mensagem, isEnabled} = this.state
    return (
    <ScrollView>
       <ImageBackground source={{uri : 'https://img.freepik.com/vetores-gratis/fundo-abstrato-azul_1393-339.jpg'}} style={styles.imgb}>
     
        {Platform.OS === 'android' ? (
        <Text>Android</Text>):
        (<Text style={styles.text}>FIAP</Text>)}
  
        
        <Text style={[styles.text, styles.textcolor]}>Portal do aluno</Text>
        
        <TextInput placeholder='Login' style = {styles.textInput} onChangeText={this.mudouMensagem}/> 
        <TextInput placeholder='Password' style ={styles.textInput}/>
        <Button title='Clique' onPress={()=> alert(mensagem)} color='violet'/><br/>
        <TouchableOpacity style={styles.button} onPress={()=> alert(`Esqueci minha senha`)}>
          <Text style={styles.txtbutton}>Esqueci minha senha</Text>
        </TouchableOpacity >
        
        <Switch  value={this.state.isEnabled} onValueChange={()=>this.setState({ isEnabled: !this.state.isEnabled})}/>
        {this.state.isEnabled ? (
        <ActivityIndicator color='white'/>
        ) : <></>}
         <Image
      source={imagem} style={styles.image}/>
      
      <Image 
      source={{uri : 'https://cdn.motor1.com/images/mgl/W89egj/s3/2023-audi-r8-v10-gt-rwd-exterior.jpg'}}style={styles.image} />
     
      
      </ImageBackground>
  
    </ScrollView>
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
    borderColor: 'white',
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
    color: '#7B68EE'
  },
  image:{
  width: 250,
  height: 150,
  margin: 40
  },
  imgb:{
  flex: 1
  },
  
  button :{
  backgroundColor: 'violet',
  color: 'white',
  padding: 10,
  borderRadius: 10,
  },
  txtbutton : {
  fontSize: 15,
  color:'white',
  textAlign: 'center'
  }
});
