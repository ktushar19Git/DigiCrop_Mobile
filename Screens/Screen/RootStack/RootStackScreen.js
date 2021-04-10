import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';


import SplashScreen  from './SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
//import Sign from '../../../Screens/Sign';


import Signupscreen from './Signupscreen';
import Signinscreen from './Signinscreen';
import Drawerscreen from './Drawerscreen';



const RootStack= createStackNavigator();

const RootStackScreen=({ navigation}) =>(
    <NavigationContainer>
    <RootStack.Navigator headerMode='none'>
     <RootStack.Screen name="SplashScreen"  component={SplashScreen} />
     <RootStack.Screen name="Signinscreen" component={Signinscreen} />
     <RootStack.Screen name="Signupscreen"  component={Signupscreen}  />
    <RootStack.Screen name="Drawerscreen"   component={Drawerscreen}  />
    </RootStack.Navigator>
    </NavigationContainer>
);

export default RootStackScreen;

