import React from 'react'
import { View,TextInput,StyleSheet,TouchableOpacity,Text,Button} from 'react-native';
import SignupScreen from '../Screens/Screen/RootStack/SignupScreen';


import  firebase from '../Apps/firebase';
import "firebase/auth"

export default class Sign extends React.Component{
    state={
        name:'',
        email:'',
        password:''
    }
    handleSignUp=()=>{
        const { email,password}=this.state
        firebase.auth()
        .createUserWithEmailAndPassword(email,password)
        .then(()=>this.props.navigation.navigate('SettingScreen'))
        .catch(error=>console.log(error))
        alert("user added");
    }

    forgotPassword=()=>
    {
        var auth=firebase.auth();
        var emailAddr=(this.state.email)
        auth.sendPasswordResetEmail(emailAddr).then(function(){
            alert("email link sent ")
        })
    }



    render(){
        return(
            <View style={styles.container}>

        
                <TextInput
                style={styles.inputBox}
                value={this.state.name}
                onChangeText={name=>this.setState({name})}
                placeholder='Full Name'
                />

               <TextInput
                style={styles.inputBox}
                value={this.state.email}
                onChangeText={email=>this.setState({email})}
                placeholder='Email'
                autoCapitalize='none'
                />

               <TextInput
                style={styles.inputBox}
                value={this.state.password}
                onChangeText={password=>this.setState({password})}
                placeholder='password'
                autoCapitalize='none'
                secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={styles.buttonText}>Signup</Text>
                    <Button title="Signup" onPress={()=>this.props.navigation.navigate('SignupScreen')}/>
                    
                </TouchableOpacity>
                <View>
                    <Text onPress={this.forgotPassword()}>Forgot Password?</Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    inputBox:{
        width:'85%',
        margin:10,
        padding:15,
        fontSize:16,
        borderColor:'#d3d3d3',
        borderBottomWidth:1,
        textAlign:'center'
    },
    button:{
        marginTop:30,
        marginBottom:20,
        paddingVertical:5,
        alignItems:'center',
        backgroundColor:'#FFA611',
        borderColor:1,
        borderRadius:5,
        width:200
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
    buttonSignup:{
        fontSize:12
    },
   
})

