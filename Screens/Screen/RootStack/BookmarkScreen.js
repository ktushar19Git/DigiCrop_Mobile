import React from 'react';
import {View,Text,Button,StyleSheet,input}  from 'react-native'
import firebase from '../../../Apps/firebase';
import 'firebase/storage';



     const BookmarkScreen=()=>{

    return(
        <View style={styles.container}>

            <Text>Bookmark Screen</Text>
        

        </View>
    )
}

export default BookmarkScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})