import React from 'react';


import { MaterialCommunityIcons} from 'react-native-vector-icons';
import Homestack from './Homestack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import AboutScreen from './AboutScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabScreen5 from '../Tabs/TabScreen5';
import ContactsScreen from '../../Screens/Drawer/ContactsScreen';


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
           <Icon name="ios-home" color="tomato" size={26} />
       ),
       

   }}
   />

<Tab.Screen
   name="Details"
   component={DetailsStackScreen}
   options={{
       tabBarLabel:'Details',
       tabBarColor:"#696969",
       tabBarIcon:() =>(
           <Icon name="ios-notifications" color="purple" size={26} />
       ),
       

   }}
   />

<Tab.Screen
   name="About"
   component={AboutStackScreen}
   options={{
       tabBarLabel:'About',
       tabBarColor:"#ADD8E6",
       tabBarIcon:() =>(
           <Icon name="ios-person" color="green" size={26} />                                           
       ),
       

   }}
   /> 

<Tab.Screen
   name="Contact"
   component={ContactStackScreen}
   options={{
       tabBarLabel:'contact',
       tabBarColor:"#800080",
       tabBarIcon:() =>(
           <Icon name="ios-call" color="black" size={26} />
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
        headerTintColor:'red',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title:'Overview',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor='#009387' />
            )
           
        }} />
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) =>(
    <DetailsStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387'
        },
        headerTintColor:'blue',
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

const AboutStackScreen = ({navigation}) =>(
    <AboutStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'skyblue'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <AboutStack.Screen name="About" component={AboutScreen} options={{
            title:'About',
            headerLeft:()=>(
                <Icon.Button name="ios-person" size={25} backgroundColor='#009387' />
            )
           
        }} />
    </AboutStack.Navigator>
);


const ContactStackScreen = ({navigation}) =>(
    <ContactStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'pink'
        },
        headerTintColor:'red',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <ContactStack.Screen name="Contact" component={ContactsScreen} options={{
            title:'Contact',
            headerLeft:()=>(
                <Icon.Button name="ios-call" size={25}  />
            )
           
        }} />
    </ContactStack.Navigator>
);