import React from 'react';
import firebase from '../Apps/firebase';
import 'firebase/storage';
import { onChange } from 'react-native-reanimated';
import {View} from 'react-native';

function Upload(){

    const onChange = (e) =>{
        const file=e.target.files[0];
        const storageRef=firebase.storage().ref()
        const fileRef=storageRef.child(file.name)
        fileRef.put(file).then(()=>{
            console.log("uploaded a file");
        })
    }


return(
    <View>
        <input type="file" onChange={onChange} />
    </View>
);
}
export default Upload;