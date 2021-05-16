

import React,{Component}  from 'react';
import {View,Text,Button,StyleSheet}  from 'react-native'
//import DrawerContent from './Screens/Screen/RootStack/DrawerContent';
//import Drawerscreen  from  './Screens/Screen/RootStack/Drawerscreen';
import RootStackScreen from './Screens/Screen/RootStack/RootStackScreen';
import {createStackNavigator}  from '@react-navigation/stack';
//import { NavigationContainer }  from '@react-navigation/native';
//import PicImage  from './Screens/Screen/RootStack/PicImage'

const RootStack=createStackNavigator();

export default function App(){
  return(
    <View style={styles.container}>
      <RootStackScreen />

    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    //alignItems:'center'
  }
});