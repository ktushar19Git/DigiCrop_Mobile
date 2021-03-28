import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();

const HomeScreen=({navigation}) =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    
      <Button title="go to details screen"
      onPress={()=>navigation.navigate('Details')}/>
    </View>
  );
}

const DetailsScreen=({navigation})=>{ 
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="go to home screen" onPress={()=>navigation.goBack()}/>
      </View>
    );
  }
   
  
  export default function Homestack() {
    return (
      <NavigationContainer>
        <Stack.Navigator > 
   
          <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            headerTitle: 'My home',
  
            headerStyle: {
              backgroundColor: '#f4511e',
              
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:'center',
            },
        }}
        />
         </Stack.Navigator>
    </NavigationContainer>
    );
  }
  
