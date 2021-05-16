import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Maintabscreen from '../Maintabscreen';
import DetailsScreen from '../DetailsScreen';
import AboutScreen from '../AboutScreen';
//import Pic from '../../../Screens/Drawer/Pic';


import TabScreen5 from '../../Tabs/TabScreen5';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import DrawerContent from '../../../Screens/Screen/RootStack/DrawerContent'
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';


const Drawer= createDrawerNavigator();

const Drawerscreen=({ navigation}) =>(
    
   
        
    <Drawer.Navigator drawerContent={props=><DrawerContent{...props}/>} theme={DarkTheme}>
        
     <Drawer.Screen name="HomeDrawer"  component={Maintabscreen} />
     <Drawer.Screen name="ProfileScreen"  component={ProfileScreen}/>
     <Drawer.Screen name="SettingsScreen"  component={SettingsScreen}/>
    
     
    
     
     
     
    </Drawer.Navigator>
    
   
);

export default Drawerscreen;

