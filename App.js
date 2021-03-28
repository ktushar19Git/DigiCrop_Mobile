
import React, {Component} from 'react';
import { View, Text,Button,StyleSheet} from 'react-native';
import {createStackNavigator}  from '@react-navigation/stack';
//import Regform from './Apps/components/Regform';

//import PickerComponent from './Screens/Screen/RootStack/PickerComponent';
import Submitdata from './Screens/Screen/RootStack/Submitdata';
//import { DrawerContent } from '@react-navigation/drawer';


//import Tdate from './Screens/Screen/RootStack/Tdate';
//import RootStackScreen from './Screens/Screen/RootStack/RootStackScreen';
import Maintabscreen from './Screens/Screen/Maintabscreen';
import { NavigationContainer } from '@react-navigation/native';



//const Drawer = createDrawerNavigator();
//const RootStack=createStackNavigator();



export default function App(){
 
    return(

    
     <View style={styles.container}>
         <NavigationContainer>
      <Maintabscreen />
      </NavigationContainer>
      
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
