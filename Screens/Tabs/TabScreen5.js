
import * as React from 'react';
import { Text,View,Image,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const MaterialTopTabs=createMaterialTopTabNavigator();


function TabScreen1() {
    return(
        <View  style={{ flex:1, alignItems:'center', justifyContent:'center',backgroundColor:"red" }}>
        <Text style={{ fontWeight:"bold",color:"green"}}>Tab 1</Text>
       
       
      </View>
    );
    
  }
  function TabScreen2() {
    return(
        <View style={{ flex:1,alignItems:'center', backgroundColor:"pink" }}>
        <Text style={{ fontWeight:"bold",color:"red"}}>Tab 2</Text>
       
       
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
        <NavigationContainer>
            <MaterialTopTabs.Navigator>
            <MaterialTopTabs.Screen name="Tab 1" component={TabScreen1}/>
            <MaterialTopTabs.Screen name="Tab 2" component={TabScreen2}/>
            <MaterialTopTabs.Screen name="Tab 3" component={TabScreen3}/>
           </MaterialTopTabs.Navigator>
         </NavigationContainer>
    
    );
    
}
export default TabScreen5;