import React,{useState,useEffect} from 'react';
import {Button,Image, View, Platform}  from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function PicImage(){
    const[image,setImage]=useState(null);


    useEffect(()=>{
        (async()=>{
            if(Platform.OS!=='web'){
                const {status} =await ImagePicker.requestMediaLibraryPermissionsAsync();
                if(status!=='granted'){
                    alert('Sorry,we need camera roll permissions to make thiswork');
                }
            }
        })();
    },[]);

    const pickImage=async()=>{
        let result=await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1,
        });
        console.log(result);

        if(!result.cancelled){
            setImage(result.uri);
        }
        };

        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Button title="Pick an image"  onPress={pickImage}/>
                
                {image && <Image source={{uri:image}} style={{width:150,height:150,borderRadius:100,marginTop:30}} />}
            </View>
        );
    }
