import React from 'react'
import { Text,View,Image,Button} from 'react-native';



function ContactsScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems:'center', justifyContent:'center',backgroundColor:"skyblue" }}>
        <Text style={{ fontWeight:"bold",color:"red"}}>Contacts</Text>
        <Button title="go to Settings" onPress={()=>navigation.navigate('Settings')}>go to Settings</Button>
       
      </View>
    );
  }

 export default ContactsScreen;


