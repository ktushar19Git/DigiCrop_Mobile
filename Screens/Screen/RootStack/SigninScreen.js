import { View, Text, StyleSheet, Alert, StatusBar, TextInput, TouchableOpacity, Platform, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather';
import React, { Component } from 'react'
import firebase from '../../../Apps/firebase'
import "firebase/auth"
import Maintabscreen from '../../../Screens/Screen/Maintabscreen';


class Signinscreen extends Component {
    constructor(props) {
        super(props)
        // this.validate=this.validate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fnForgotPassword=this.fnForgotPassword.bind(this)
        this.state = {
            email: '',
            password: '',
            icEye: 'visibility-off',
            showPassword: true,
            
        }
    }

    handleSubmit = () => {
        try
        {
            //alert(this.state.Email)
 
            let strErr = "";   
         if(this.state.email=="")
         {
             strErr = strErr + "Please enter Email Address\n";   
 
         }
         if(this.state.password=="")
         {
             strErr = strErr + "Please enter Password\n";   
 
         }
         
         if(strErr!="")
         {
             alert(strErr);
         }
         else
         {
             firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((user) => {
                 // Signed in 
                 // ...
                 
                 //alert(firebase.auth().currentUser.uid);
                 
                
                 //history.push("/SubmitData");
                
                
                // alert("You are logged in. Please Click on SubmitData to proceed.");
                alert("you are logged in successfully");
                this.props.navigation.navigate('Drawerscreen');
               
 
 
                // alert(user.credential.name);
 
             
             })
                 .catch(function(error) {
                 // Handle Errors here.
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 if (errorCode === 'auth/wrong-password') {
                     alert('Wrong password.');
                 } else {
                     alert(errorMessage);
                 }
                 console.log(error);
                 });
 
         }
        }
        catch (error) 
        {
         alert(error.message);
         }
 
       }


        changePass = () => {
        let newState;
        if (this.state.showPassword) {
            newState = {
                icEye: 'visibility',
                showPassword: false,
                password: this.state.password
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                showPassword: true,
                password: this.state.password
            }
        }
        this.setState(newState)
    }

   

    handlePass=(password)=>{
        let newState={
            icEye:this.state.icEye,
            showPassword:this.state.showPassword,
            password:password
        }
        this.setState(newState);
    };


    fnForgotPassword=()=>{

        try{
            let strErr = "";   
            if(this.state.email=="")
            {
                strErr = strErr + "Please enter Email Address\n";   
    
            }

            if(strErr!="")
            {
                alert(strErr);
            }
            else{
               var auth=firebase.auth();
               var emailAddr=(this.state.email)
               auth.sendPasswordResetEmail(emailAddr).then(function(){
                   alert("email link as been sent");
               })
            }
        }
        catch(error){
            alert(error.message);
        }

    }


   
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text_header}>
                        WELCOME TO DIGICROP AGRICULTURE
        </Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>
                    <ScrollView>
                        <Text style={styles.text_footer}>email-id
                        </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color='#05375a'
                                size={20} />
                            <TextInput
                                placeholder="Your email"
                                placeholderTextColor="#666666"
                                keyboardType={'email-address'}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(text) => { this.setState({ email: text }) }} />
                        </View>
                        <Icon style={styles.icon} name={this.state.icEye} size={30} onPress={this.changePass} />
                        
                        <Text style={[styles.text_footer, {
                            marginTop: 35
                        }]}>Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color='#05375a'
                                size={20} />
                            <TextInput
                                placeholder="Your password"
                                placeholderTextColor="#666666"
                                value={this.state.password}
                                secureTextEntry={this.state.showPassword}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={this.handlePass} />
                        </View>
                       
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.signin}
                                onPress={() => { }}>
                                <LinearGradient
                                    colors={['#08d4c4', '#01ab9d']}
                                    style={styles.signin}>
                                    <Text style={[styles.textsign, {
                                        color: '#fff',
                                        textAlign:'center'
                                    }]}
                                        onPress={() => { this.handleSubmit() }}>Sign In</Text>
                                        
                                </LinearGradient>
                            </TouchableOpacity>
                            <Text style={styles.forgot} onPress={()=>{this.fnForgotPassword()}}>Forgot Password?</Text>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.goBack() }}
                                style={[styles.signin, {
                                    borderColor: '#009387',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}>
                                <Text style={[styles.textsign, {
                                    color: '#009387',
                                    textAlign:'center'
                                }]} onPress={()=>this.props.navigation.navigate('Signupscreen')}>Sign up</Text>
                            </TouchableOpacity>

                           
                        </View>
                    </ScrollView>
                </Animatable.View>
            </View>
        )
    }
}

export default Signinscreen;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#009387'
    },
    icon: {
        position: 'absolute',
        top:120,
        right: 0
    },

    icon1: {
        position: 'absolute',
        top: 220,
        right:0
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        //flex: 1,
        width:1200,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signin: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        borderRadius: 10
    },
    textsign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textprivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textprivate: {
        color: 'grey'
    },
    forgot:{
        color:'red',
        fontWeight:'bold'
    }
});


