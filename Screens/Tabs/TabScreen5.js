
import * as React from 'react';
import { Text,View,Image,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabScreen1 from './TabScreen1';
import Submitdata  from '../../Screens/Screen/RootStack/Submitdata';

const MaterialTopTabs=createMaterialTopTabNavigator();



  function TabScreen2() {
    return(
        <View style={{ flex:1,alignItems:'center', backgroundColor:"pink" }}>
        <Text style={{ fontWeight:"bold",color:"red"}}>TAB 2</Text>
       
       
      </View>
    );
    
  }
  function TabScreen3() {
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent:'center',backgroundColor:"yellow" }}>
        <Text>Tab 3</Text>
       
       
      </View>
    );
  }
function TabScreen5() {
    
    return(
        
            <MaterialTopTabs.Navigator>
            <MaterialTopTabs.Screen name="Update Personal Details" component={TabScreen1}/>
            <MaterialTopTabs.Screen name="SUBMITDATA" component={Submitdata}/>
           
           </MaterialTopTabs.Navigator>
         
    
    );
    
}
export default TabScreen5;