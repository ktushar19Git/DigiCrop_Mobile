import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';




import {DrawerNavigator}  from '@react-navigation/drawer';

import Maintabscreen from '../Maintabscreen';
import DetailsScreen from '../DetailsScreen';
import AboutScreen from '../AboutScreen';

import PersonalDetails from '../../../Screens/Screen/PersonalDetailsScreen';
import TabScreen5 from '../../Tabs/TabScreen5';


const Drawer= createDrawerNavigator();

const Drawerscreen=({ navigation}) =>(
   
    <Drawer.Navigator >
     <Drawer.Screen name="Home"  children={Maintabscreen} />
     <Drawer.Screen name="Details" component={DetailsScreen} />
     <Drawer.Screen name="About"  component={AboutScreen}  />
    
     <Drawer.Screen  name="Tab"  component={TabScreen5} />
     
     
    </Drawer.Navigator>
   
);

export default Drawerscreen;

