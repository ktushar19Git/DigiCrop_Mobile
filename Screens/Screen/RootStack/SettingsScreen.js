import React,{useState,useEffect}from 'react';
import {View,Text,Button,StyleSheet,TextInput, Alert}  from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '../../../Apps/firebase';


const SettingsScreen=()=>{

    const[item,setItem]=useState([])

   useEffect(()=>{
   
        getdata();
       
    
      },[]);
      const getdata = async () => {
        try{
         await AsyncStorage.getItem("login_email").then(value=>{
             if(value!==null){
                 setItem(value);
             }
         })
         
         
        }catch(error){
            console.log(error)
        }
    }
   return(
        <View style={styles.container}>

            <Text>Profile Screen</Text>
            <Text>{item}</Text>
            


            

        </View>
    )
}

   


   
   
    


export default SettingsScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})