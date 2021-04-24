
import React, {Component}  from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView,Button, Picker,TouchableOpacity}  from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../../Apps/firebase';


export default class TabScreen1 extends Component{
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
    }

    validate(){
        let isValid=true;
        let mobileerror=""
        let Ageerror=""
        if(this.state.Age!="undefined"){
            var patteren=new RegExp(/^[0-9\b]+$/);
            if(!patteren.test(this.state.Age)){
                isValid=false;
                Ageerror="Please enter the age in number"
                alert(Ageerror)
                this.setState({
                    Age:""
                })
            }

            else if(this.state.Mobileno!="undefined"){
                var patteren=new RegExp(/^[6-9][0-9]{9}$/);
                if(!patteren.test(this.state.Mobileno)){
                    isValid=false;
                    mobileerror="please enter valid mobile number"
                    alert(mobileerror)
                    this.setState({
                        Mobileno:""
                    })
                }

                else if(this.state.Aadharno!="undefined"){
                    var patteren=new RegExp(/^[2-9]{1}[0-9]{11}$/);
                    if(!patteren.test(this.state.Aadharno)){
                        isValid=false;
                        alert("please enter valid Aadhar number")
                        
                        this.setState({
                            Aadharno:""
                        })
                    }
    
                    else if(this.state.PANno!="undefined"){
                        var patteren=new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
                        if(!patteren.test(this.state.PANno)){
                            isValid=false;
                            alert("please enter valid PAN number")
                            
                            this.setState({
                                PANno:""
                            })
                        }


                        else if(this.state.PINCode!="undefined"){
                            var patteren=new RegExp(/^[1-9]{1}[0-9]{5}$/)
                            if(!patteren.test(this.state.PINCode)){
                                isValid=false;
                                alert("please enter valid PIN code")
                                
                                this.setState({
                                    PINCode:""
                                })
                            }
                        }

            }
        }
    }
      return isValid;
}
    }

    handleSubmit=()=>{
        let error=""
        if(this.state.Firstname==""||this.state.Lastname==""||this.state.Middlename==""||
        this.state.Age==""||this.state.Mobileno==""||this.state.Gender==""||this.state.Address==""
        ||this.state.City==""||this.state.State==""||this.state.Country==""||this.state.PINCode==""||this.state.PANno==""){
            error="Please fill all the Fields"
        }
        if(!error==""){
            alert(error);
        }
        else if(this.validate()){
           
            const db=firebase.firestore();
            db.collection("UserData").add({
                Firstname:this.state.Firstname,
                Lastname:this.state.Lastname,
                Middlename:this.state.Middlename,
                Age:this.state.Age,
                Mobileno:this.state.Mobileno,
                Gender:this.state.Gender,
                Address:this.state.Address,
                City:this.state.City,
                State:this.state.State,
                Country:this.state.Country,
                PINCode:this.state.PINCode,
                Aadharno:this.state.Aadharno,
                PANno:this.state.PANno



            })

            alert("user added");
           
        }
       
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

<View style={styles.textInput}>
       <Picker  
       
         selectedValue={this.state.Gender} onValueChange={Gender=>this.setState({Gender})} >
            <Picker.Item label="Gender" value="" />
           <Picker.Item  label="Male" value={1}  />
           <Picker.Item  label="Female" value={2} />
          
       </Picker>
       </View>




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



                     <View>
                     <TouchableOpacity
                           style={[styles.Button,{
                               borderColor:'#009387',
                               borderWidth:1,
                               marginTop:10,
                               backgroundColor:'green',
                               padding:8,
                               marginLeft:10,
                               marginEnd:10,
                           }]} onPress={()=>{this.handleSubmit()}}>

            
        
                         <Text style={styles.btntxt}>

                     <Icon
                     name="check"
                     color="white"
                     marginTop="30"
                     size={20}  /> SAVE 
                         </Text>
                          </TouchableOpacity>
                          </View>
    


</ScrollView>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    Submit: {
     
     //backgroundColor: '#1520A6',
     backgroundColor:'#009387',
     padding:20,
     //backgroundColor:'black',
      //marginTop:5,

      margin:0
     
     
    },
    update:{
        fontSize:20,
        color:'blue',
        
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
    textInput: {
        alignSelf: 'stretch',
        height:40,
        marginBottom:25,
        color: 'black',
        borderColor: '#fff',
        borderWidth:1,
        
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


