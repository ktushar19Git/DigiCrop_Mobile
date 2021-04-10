import React from 'react';
import { 
    StyleSheet, 
    Text,
     View,
    TextInput,
TouchableOpacity,
Button,
Picker,
 } from 'react-native';
 
 import  firebase from '../firebase';
 import "firebase/auth";

 
 
 

 
 
export default class Regform extends React. Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      nameError:'',
      emailError:'',
      
      password:'',
    }
  }

  Submit(){
    let rjx=/^[a-zA-Z]+$/;
    let isValid=rjx.test(this.state.name)
    console.warn(this.isValid)
    if(!isValid){
      this.setState({nameError:"name field must be alphabatic"})
    }
    else{
      this.setState({nameError:""})
      firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password);
      alert("user added");

     
    }
  }
  emailValidator()
  {
    if(this.state.email=="")
    {
      this.setState({emailError:"email field cannot be empty"})
    }
    else{
      this.setState({emailError:""})
     
     
    }
  }


 
    render(){
  return (
    <View style={styles.Regform}>
      
      <Text style={styles.header}>Registration Form</Text>
      <TextInput style={styles.textinput} placeholder="your name"
      
      onChangeText={(text)=>{this.setState({name:text})}}
      underlineColorAndroid={'transparent'} />
       <Text style={{color:'red'}}>{this.state.nameError}</Text>
      

      <TextInput style={styles.textinput} placeholder="your email"
      onBlur={()=>this.emailValidator()}
      onChangeText={(text)=>{this.setState({email:text})}}
      underlineColorAndroid={'transparent'} />
      <Text style={{color:'red'}}>{this.state.emailError}</Text>

     <TextInput style={styles.textinput} placeholder="password" secureTextEntry={true}
      keyboardType="numeric"
      
      
      underlineColorAndroid={'transparent'} />

     <TextInput style={styles.textinput} placeholder="mobileno" keyboardType={'phone-pad'}
      underlineColorAndroid={'transparent'} />

      
          <Button  title="Submit"    onPress={()=>{this.Submit()}}/>
          
         
    </View>
  );
}
}

const styles = StyleSheet.create({
  Regform: {
   
   backgroundColor: '#36485f',
   margin:60,
   padding:20
  },
  header:{
      fontSize:26,
      color:'#fff',
      
      paddingBottom:10,
      marginBottom: 40,
      borderBottomColor:'#199187',
      borderBottomWidth: 2,
  },
  textinput: {
      alignSelf: 'stretch',
      height:40,
      marginBottom:30,
      color: '#fff',
      borderColor: '#f8f8f8',
      borderWidth:1,
      padding:8,
      margin:10,
      

  },
  Button:
  {
      alignItems:'stretch',
      alignItems:'center',

      padding:20,
      backgroundColor:'#55cbbd',
      marginTop: 30,
  },
  btntxt:
  {
      color:'#fff',
  },


});
