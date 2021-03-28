import React, { Component } from 'react'
import { Text, View, StyleSheet,TextInput, TouchableOpacity,alph} from 'react-native'




export default class LoginScreen extends Component {
   
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} >Login To my App </Text>
                <TextInput
                style={styles.input}
               
                placeholder="Username" />

               <TextInput
                style={styles.input}
                placeholder="Password" secureTextEntry />
            

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.userBtn} onPress={()=>alert("Login Works")}>
                
                    <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userBtn}  onPress={()=>alert("Signup Works")}>
                
                <Text style={styles.btnTxt}>Signup</Text>
                </TouchableOpacity>
               

            </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1e90ff',
        margin:10,
    },

    welcome:{
        fontSize:30,
        textAlign:"center",
        margin:10,
        color:"#fff",
        fontFamily:"DancingScript-Bold"
    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%",
    },
    input:{
      width:"90%",
      backgroundColor:"#fff",
      padding:15,
      marginBottom:"10px",
      
    },
    userBtn:{
        backgroundColor:"#FFD700",
        padding:15,
        width:"45%",

    },
    btnTxt:{
        fontSize:18,
        textAlign:"center",

    }
})
