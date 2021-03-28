
import React from "react";
import { Button,View,Text,StyleSheet,Image } from 'react-native';
import { createStackNavigator } from  '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabScreen5 from "../Tabs/TabScreen5";
import Regform from '../../Apps/components/Regform';


const Stack = createStackNavigator();


function HomeScreen({navigation}) {
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:"center",backgroundColor:"green"}}>
      <Text style={{color:"white", fontWeight:"bold"}}>WELCOME TO DIGICROP AGRICULTURE</Text>
      <Button title="go to details screen"
        onPress={()=>navigation.navigate('Regform')}/>
      </View>
    );
    
  }

 
   function DetailsScreen({navigation}){ 
    return (
      <View style={{ alignItems:'center',  justifyContent: 'center',backgroundColor:"yellow" }}>
     <Text  style={{ flex: 1,alignItems:'center',  justifyContent: 'center' }}>WHAT IS DIGICROP?</Text>
    <Text style={{fontWeight:"bold",justifyContent:"center"}}>Our Platform will help farmers to grow effectively with help of technology .
      The IT Platform will connect consumer with full information of harvested crops to till Delivery to door step.
      Team is working with the moto to retain maximum nutrition value of crop for end consumer and give 
      promised return to farmers.</Text>
   
        <Image source={require('../../assets/Organicfarm.jpg')}
                style={{ width:250,height:250,margin:10 }} />  

        <Image source={require('../../assets/farmer.jpg')}
                style={{ width:250,height:250, margin:10 }} /> 


        <Button title="go to About screen" onPress={()=>navigation.navigate('About')}/>
      </View>
    );
  }
  
  function AboutScreen() {
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

 

  
 

 
export default function  App() {
    
        return (
           <NavigationContainer>
               <Stack.Navigator initialRouteName="Home">
                   <Stack.Screen
                   
                   name="Home"
                   component={HomeScreen}
                   options={{headerTitle:'My home',

                   headerStyle:{
                       backgroundColor:'#f4511e',
                   },
                   headerTintColor:'#fff',
                   headerTitleStyle:{
                       fontWeight:'bold',
                       textAlign:'center',
                   },

                   headerLeft:(props)=>(
                       <Ionicons name="home-sharp" size={32} color="green"
                       style={{paddingLeft:20}}
                       />
                   ),

                   headerRight:({navigation})=>{
                       return(
                           <Button title="Login" color="black"
                           onPress={()=>{navigation.navigate('Details')}} />
                       );
                   }
                }}
                   />
                   <Stack.Screen name ="Regform" component={Regform} options={{headerTitle:'Details',headerStyle:{backgroundColor:"blue"}}} />
                   <Stack.Screen name ="About" component={AboutScreen} options={{headerTitle:'About',headerStyle:{backgroundColor:"skyblue"}}} />
               </Stack.Navigator>
           </NavigationContainer>
        );
    }

   
    
    