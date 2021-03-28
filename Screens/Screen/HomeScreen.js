
import React from 'react'
import { Text,View,Button} from 'react-native';
function HomeScreen({navigation}) {
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:"center",backgroundColor:"green"}}>
      <Text style={{color:"white", fontWeight:"bold"}}>WELCOME TO DIGICROP AGRICULTURE</Text>
      <Button title="go to details screen"
        onPress={()=>navigation.navigate('Details')}/>
      </View>
    );
    
  }
  export default HomeScreen;