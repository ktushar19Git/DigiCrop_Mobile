import React, { Component } from 'react'
import { StyleSheet,Text, View, Image } from 'react-native'
//import { globalStyles} from '../styles/global';


export default class ChatScreen extends Component {
    render() {
        return (
            <View style={styles.rating}>
                <Text style={styles.txt}>Images</Text>
                <Text style={styles.txt}>Digicrop Agriculture</Text>
                <View style={styles.img}>
                
                <Image source={require('../assets/Organicfarm.jpg')}
                style={{ width:250,height:250, backgroundColor:'#FF6347',margin:10 }} />

               <Image source={require('../assets/farmer.jpg')}
                style={{ width:250,height:250, margin:10 }} /> 
                </View>
                
               
            </View>
        )
    }
}
const styles=StyleSheet.create({
    rating:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#FF6347',
        
    },
    
txt:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
    color:'#000',
    
}
  
})

