import React from 'react';
import {Image,StyleSheet,Button,Text,View, Alert}  from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../../../Apps/firebase';


export default class UploadImage extends React.Component{
    static navigationOptions={
        header:null,
    };

    onChooseImagePress =async()=>{
        //let result=await ImagePicker.launchCameraAsync();
        let result=await ImagePicker.launchImageLibraryAsync();

        if(!result.cancelled){
            this.uploadimage(result.uri)
            .then(()=>{
                Alert.alert("success")

            })
            .catch((error)=>{
                Alert.alert("error");
            })

        }

    }

    uploadimage=async(uri)=>{
        const response=await fetch(uri);
        const blob=await response.blob();
        var ref=firebase.storage().ref().child("images/");
        return ref.put(blob);

    }
    render(){
        return(
            <View style={StyleSheet.Container}>
               <Button title="Choose Image.."  onPress={this.onChooseImagePress} />
            </View>
        );

    }
}

const styles=StyleSheet.create({
    container:{
       // flex:1
    }
})