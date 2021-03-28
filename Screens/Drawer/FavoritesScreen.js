import React from 'react'
import { Text,View,Image,Button} from 'react-native';

function FavoritesScreen() {
    return (
      <View style={{ flex: 1, alignItems:'center', justifyContent:'center',backgroundColor:"violet" }}>
        <Text style={{ fontWeight:"bold",color:"red"}}>DIGICROP AGRICULTURE</Text>
        <Image source={require('../../assets/Organicfarm.jpg')}
                  style={{ width:250,height:250, backgroundColor:'#FF6347',margin:10 }} />
                   <Image source={require('../../assets/farmer.jpg')}
                  style={{ width:250,height:250, margin:10 }} /> 
        
      </View>
    );
  }

 export default FavoritesScreen;