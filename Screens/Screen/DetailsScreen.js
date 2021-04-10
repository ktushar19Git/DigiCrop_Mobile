import React from 'react'
import { Text,View,Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function DetailsScreen({navigation}) {
  return(
    <View style={{
      alignItems:'center',justifyContent:'center',backgroundColor:"pink",padding:10}}>
   <Text>WHAT IS DIGICROP?</Text>
    <Text style={{fontWeight:"bold",justifyContent:"center"}}>Our Platform will help farmers to grow effectively with help of technology .
      The IT Platform will connect consumer with full information of harvested crops to till Delivery to door step.
      Team is working with the moto to retain maximum nutrition value of crop for end consumer and give 
      promised return to farmers.</Text>
      
      <Image source={require('../../assets/Organicfarm.jpg')}
                style={{ width:250,height:250,margin:10 }} /> 

                 <Image source={require('../../assets/farmer.jpg')}
                style={{ width:250,height:250, margin:10 }} />         

                

<Button title="go to About screen"
        onPress={()=>navigation.navigate('About')}/>
                          
   
    </View>
  );
}
export default DetailsScreen;