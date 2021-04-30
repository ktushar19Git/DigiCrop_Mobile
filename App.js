
import React, {Component} from 'react';
import { View, Text,Button,StyleSheet} from 'react-native';
//import RootStackScreen from './Screens/Screen/RootStack/RootStackScreen';

//import Regform from './Apps/components/Regform';
//import FavoritesScreen from './Screens/Drawer/FavoritesScreen';
//import ContactsScreen from './Screens/Drawer/ContactsScreen';
//import SettingsScreen from './Screens/Drawer/SettingsScreen';
import {createDrawerNavigator}  from '@react-navigation/drawer';
//import { Drawercontainer}  from '@react-navigation/drawer';
import RootStackScreen from './Screens/Screen/RootStack/RootStackScreen';
import {createStackNavigator}  from '@react-navigation/stack';
//import Maintabscreen from './Screens/Screen/Maintabscreen';
import { NavigationContainer } from '@react-navigation/native';
//import Nayana from './Screens/Screen/RootStack/Nayana';
//import LineChart from './Screens/Screen/RootStack/LineChart';


//import Sign from './Screens/Sign';




//const Drawer = createDrawerNavigator();
const RootStack=createStackNavigator();



export default function App(){
 
    return(

    
     <View style={styles.container}>
   <RootStackScreen />
    
        
     </View>
    
        
    
        
    );
  
}

const styles = StyleSheet.create({
container: {
       flex:1,
       
       backgroundColor:'#fff',
     justifyContent: 'center',
    // alignItems:'center',
   
},
});
