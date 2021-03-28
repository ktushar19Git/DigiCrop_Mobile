import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

//import SplashScreen from './SplashScreen';
import SigninScreen from './SigninScreen';
import SignupScreen from './SignupScreen';
import SettingsScreen from '../../../Screens/Drawer/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';

const RootStack= createStackNavigator();

const RootStackScreen=({ navigation}) =>(
    <NavigationContainer>
    <RootStack.Navigator headerMode='none'>
     <RootStack.Screen name="SettingsScreen"  component={SettingsScreen} />
     <RootStack.Screen name="SigninScreen" component={SigninScreen} />
     <RootStack.Screen name="SignupScreen"  component={SignupScreen}  />
    </RootStack.Navigator>
    </NavigationContainer>
);

export default RootStackScreen;

