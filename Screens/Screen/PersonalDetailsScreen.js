import React, {Component}  from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView,Button}  from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../../Apps/firebase';



export default class PersonalDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            Firstname:'',
            Lastname:'',
            Middlename:'',
            Age:'',
            Mobileno:'',
            Gender:'',
            Aadharno:'',
            Address:'',
            City:'',
            State:'',
            Country:'',
            PINCode:'',
            PANno:'',
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.validate=this.validate.bind(this)
    }
    render(){
        return(
            <View style={styles.Submit} >
                 <ScrollView>
                <Text style={styles.update} >Update your Personal Details</Text>
                
                <TextInput  style={styles.textinput}  placeholder="Firstname"
               name="Firstname"
               value={this.state.Firstname} 
                onChangeText={Firstname=>this.setState({Firstname})}/>

           <TextInput  style={styles.textinput}  placeholder="Lastname"
           name="Lastname"
           value={this.state.Lastname} 
           onChangeText={Lastname=>this.setState({Lastname})}/>

          <TextInput  style={styles.textinput}  placeholder="Middlename"
         name="Middlename"
         value={this.state.Middlename} 
         onChangeText={Middlename=>this.setState({Middlename})}/>


       <TextInput  style={styles.textinput}  placeholder="Age"
         name="Age"
         value={this.state.Age} 
         onChangeText={Age=>this.setState({Age})}/>

       <TextInput  style={styles.textinput}  placeholder="Mobileno"
         name="Mobileno"
         value={this.state.Mobileno} 
         onChangeText={Mobileno=>this.setState({Mobileno})}/>

       <TextInput  style={styles.textinput}  placeholder="Aadharno"
         name="Aadharno"
         value={this.state.Aadharno} 
         onChangeText={Aadharno=>this.setState({Aadharno})}/>

        <TextInput  style={styles.textinput}  placeholder="Address"
         name="Address"
         value={this.state.Address} 
         onChangeText={Address=>this.setState({Address})}/>

<TextInput  style={styles.textinput}  placeholder="City"
         name="City"
         value={this.state.City} 
         onChangeText={City=>this.setState({City})}/>

<TextInput  style={styles.textinput}  placeholder="State"
         name="State"
         
        value={this.state.State} 
         onChangeText={State=>this.setState({State})}/>

<TextInput  style={styles.textinput}  placeholder="Country"
         name="country"
         
        value={this.state.Country} 
         onChangeText={Country=>this.setState({Country})}/>

<TextInput  style={styles.textinput}  placeholder="PINCode"
         name="PINCode"
         
        value={this.state.PINCode} 
         onChangeText={PINCode=>this.setState({PINCode})}/>

<TextInput  style={styles.textinput}  placeholder="PANno"
         name="PANno"
         
        value={this.state.PANno} 
         onChangeText={PANno=>this.setState({PANno})}/>

<Button title="SAVE">

<Icon
name="exit-to-app"
color="black"
marginTop="30"
size={20}  /> SUBMIT 
    </Button>
    


</ScrollView>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    Submit: {
     
     
     
     padding:20,
    // backgroundColor:'#009387',
    backgroundColor:'red',
     
      //marginTop:5,

      margin:0
     
     
    },
    update:{
        fontSize:20,
        color:'green',
        
       // paddingBottom:10,
        marginBottom: 25,
        borderBottomColor:'#fff',
        borderBottomWidth: 2,
        marginLeft:10,
        marginEnd:10,
    },
    textinput: {
        alignSelf: 'stretch',
        height:40,
        marginBottom:10,
        color: 'black',
        borderColor: '#fff',
        borderWidth:1,
        padding:6,
        margin:10,
        backgroundColor:'white',
        fontWeight:"bold",
        marginEnd:10,
        marginLeft:10,
  
    },
    btntxt:
    {
        color:'black',
        textAlign:'center',
        fontWeight:'bold',
        
    },
    })