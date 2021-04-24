import React from 'react'
import { Text,View,Image,Button} from 'react-native';




function ContactsScreen({navigation}) {
  
    return (
        <View style={{ flex: 1, alignItems:'center', justifyContent:'center',backgroundColor:"skyblue" }}>
        <Text style={{ fontWeight:"bold",fontSize:30,color:"red"}}>Contacts us</Text>
        <Text style={{fontWeight:"bold",fontSize:20}}>DigiCrop Agriculture Solution Pvt.Ltd</Text>
        <Text style={{fontWeight:"bold",fontSize:15}}>Customer Care:+91 9108705205</Text>
        <Text style={{fontWeight:"bold",fontSize:15}}>Sales@digi-crop.com</Text>
       
        
        
       
        
       
      </View>
    );
  }

 export default ContactsScreen;


