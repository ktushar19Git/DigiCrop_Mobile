import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';



const Stack = createStackNavigator();

const HomeScreen=({navigation}) =>{
  return (
    <View style={{ flex:1,  justifyContent:'center' }}>
      <Text>Home Screen</Text>
    
      <Button title="go to details screen"
      onPress={()=>navigation.navigate('Details')}/>
    </View>
  );
}

const DetailsScreen=({navigation})=>{ 
  return (
    <View style={{ flex: 1,  justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="go to home screen" onPress={()=>navigation.goBack()}/>
    </View>
  );
}
 

export default class Homestack extends Component {
  render(){
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
          headerLeft:(props)=>(
            <Ionicons name="home-sharp" size={32} color="green"
            style={{paddingLeft:20}}
            />
          ),
          headerRight:({navigation})=>{
            return (
              <Button title="Login" color="black"
                onPress={() => {alert('Details')}}
                style={{ padding: 20 }} />
            );
          }
        }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}


/*<MaterialBottomTabs.Navigator>
<MaterialBottomTabs.Screen name="Tab 1" component={TabScreen1}/>
<MaterialBottomTabs.Screen name="Tab 2" component={TabScreen2}/>
<MaterialBottomTabs.Screen name="Tab 3" component={TabScreen3}/>
<MaterialBottomTabs.Screen name="Tab 4" component={TabScreen4}/>
</MaterialBottomTabs.Navigator>*/