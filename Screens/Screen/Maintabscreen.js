import React from 'react';
import {Button}  from 'react-native';


import DetailsScreen from './DetailsScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabScreen5 from '../Tabs/TabScreen5';
import ContactsScreen from '../../Screens/Drawer/ContactsScreen';
import HomeScreen from '../../Screens/Screen/HomeScreen';
import ProfileScreen  from '../../Screens/Screen/RootStack/ProfileScreen'

//import Lines from '../../Screens/Screen/RootStack/Lines';





const HomeStack = createStackNavigator();
const DetailsStack=createStackNavigator();
const AboutStack=createStackNavigator();
const ContactStack=createStackNavigator();
const Tab=createMaterialBottomTabNavigator();
const Drawer=createDrawerNavigator();

const Maintabscreen = () => (
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
        style:{
            backgroundColor:'green'
        }
    }}>
    

   <Tab.Screen
   name="Home"
   component={HomeStackScreen}
   options={{
       tabBarLabel:'Home',
       tabBarColor:"#009387",
       tabBarIcon:() =>(
           <Icon name="ios-home" color="white" size={26} />
       ),
       

   }}
   />

<Tab.Screen
   name="Details"
   component={DetailsStackScreen}
   options={{
       tabBarLabel:'Details',
       tabBarColor:"#009387",
       tabBarIcon:() =>(
           <Icon name="ios-notifications" color="white" size={26} />
       ),
       

   }}
   />

<Tab.Screen
   name="TabScreen5"
   component={TabScreen5}
   options={{
       tabBarLabel:'About',
       tabBarColor:"#009387",
       tabBarIcon:() =>(
           <Icon name="ios-person" color="white" size={26} />                                           
       ),
       

   }}
   /> 

<Tab.Screen
   name="Contact"
   component={ContactStackScreen}
   options={{
       tabBarLabel:'contact',
       tabBarColor:"#009387",
       tabBarIcon:() =>(
           <Icon name="ios-call" color="white" size={26} />
       ),
       

   }}
   />






    </Tab.Navigator>
);
export default Maintabscreen;



const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387'
        },
        headerTintColor:'white',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title:'Overview',
            headerLeft: () => (
                
                <Icon.Button name="ios-menu" size={25} backgroundColor='#009387'   />
                
            ),

           
            
           
        }} />
    </HomeStack.Navigator>
);


const DetailsStackScreen = ({navigation}) =>(
    <DetailsStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387'
        },
        headerTintColor:'white',
        headerTitleStyle:{
            
            fontWeight:'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
            title:'Details',
            headerLeft:()=>(
                <Icon.Button name="ios-notifications" size={25} backgroundColor='#009387' />
            )
           
        }} />
    </DetailsStack.Navigator>
);

const Tab5StackScreen = ({navigation}) =>(
    <Tab5Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <Tab5Stack.Screen name="Tab5" component={TabScreen5} options={{
            title:'About',
            headerLeft:()=>(
                <Icon.Button name="ios-person" size={25} backgroundColor='#009387' />
            )
           
        }} />
    </Tab5Stack.Navigator>
);


const ContactStackScreen = ({navigation}) =>(
    <ContactStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <ContactStack.Screen name="Contact" component={ContactsScreen} options={{
            title:'Contact',
            headerLeft:()=>(
                <Icon.Button name="ios-call" size={25} backgroundColor='#009387' />
            )
           
        }} />
    </ContactStack.Navigator>
);


