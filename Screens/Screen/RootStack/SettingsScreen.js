import React,{useState}from 'react';
import {View,Text,Button,StyleSheet,TextInput}  from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../../../Apps/firebase';


const SettingsScreen=()=>{
   
    return(
        <View style={styles.container}>
            <Text>Settings Screen</Text>
           
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