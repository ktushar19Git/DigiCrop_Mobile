import React,{useState,useEffect} from 'react';
import { View,StyleSheet,Platform,Image,Button,TouchableOpacity,Alert

} from 'react-native';
import{
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Maintabscreen  from '../../../Screens/Screen/Maintabscreen';
import * as ImagePicker from 'expo-image-picker';

import { useNavigation}  from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

//import { AuthContext } from '../../../Apps/components/Context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import firebase from '../../../Apps/firebase';


 const DrawerContent=(props)=>{
    //const[image,setImage]=useState(null);

    const paperTheme = useTheme();
    const[isDarkTheme,setIsDarkTheme]=React.useState(false);
    const toggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme);



    }
    const[item,setItem]=useState([])

    useEffect(()=>{
    
         getdata();
        
     
       },[]);
       const getdata = async () => {
         try{
          await AsyncStorage.getItem("login_email").then(value=>{
              if(value!==null){
                  setItem(value);
              }
          })
          
          
         }catch(error){
             console.log(error)
         }
     }

     const[userid,setuserid]=useState([])

   
       const Userdata = async () => {
         try{
          await AsyncStorage.removeItem("g_user_id").then(value=>{
              alert('you are logged out');
              props.navigation.navigate('SigninScreen');

          })
          
          
          
         }catch(error){
             console.log(error)
         }
     }
   
   


    

    


   

   
    //const userid=(firebase.auth().currentUser.uid)
   
    const signOut=()=>{
        alert("logged out successfully");
        props.navigation.navigate('SigninScreen');
    }
    //const {signOut, toggleTheme}=React.useContext(AuthContext);

    return(
       
        <SafeAreaProvider>
        <View style={{flex:1,backgroundColor:'white'}}>
           
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                           
                            <TouchableOpacity>
                           
                            
                            <Image source={require('../../../assets/Profile.png')}style={{width:60,height:60,borderRadius:30}}/>
                           </TouchableOpacity>
                             
                             

                       
                    
                            <View style={{flexDirection:'column'}}>
                                <Title style={styles.title}>Meghana Patan</Title>
                                <Text style={styles.Caption} >{item}</Text>
                                <Text>{userid}</Text>
                                </View>
                               
                             

             </View>
            
        </View>
       
        <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
            icon={({color,size})=>(
                <Icon
                name="home-outline"
                color={color}
                size={size}
                />
            )}
            label="Home"
            
            onPress={()=>{props.navigation.navigate('Home')}} />

           <DrawerItem
            icon={({color,size})=>(
                <Icon
                name="bookmark-outline"
                color={color}
                size={size} />
            )}
            label="Bookmarks"
           

            onPress={()=>{props.navigation.navigate('SettingsScreen')}} />

          <DrawerItem
            icon={({color,size})=>(
                <Icon
                name="settings-outline"
                color={color}
                size={size} />
            )}
            label="Settings"
            onPress={()=>{props.navigation.navigate('SettingsScreen')}} />

           <DrawerItem
            icon={({color,size})=>(
                <Icon
                name="account-outline"
                color={color}
                size={size} />
            )}
            label="Profile"
            onPress={()=>{props.navigation.navigate('ProfileScreen')}} />

          <DrawerItem
            icon={({color,size})=>(
                <Icon
                name="account-check-outline"
                color={color}
                size={size} />
            )}
            label="Support"
            onPress={()=>{props.navigation.navigate('SettingsScreen')}} />
        </Drawer.Section>

        <Drawer.Section title="Preferences">
            <TouchableRipple onPress={()=>{toggleTheme()}}>
            <View style={styles.preferences}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                    <Switch value={isDarkTheme}/>
                </View>
            </View>
            </TouchableRipple>
            
        </Drawer.Section>

      
        </View>
        </DrawerContentScrollView>
        

        <Drawer.Section style={styles.bottomDrawerSection}>
            <Drawer.Item
            icon={({color,size}) =>(
              <Icon
              name="exit-to-app"
              color={color}
              size={size} />
            )}
            label="Sign out"
            onPress={()=>{Userdata()}} />
        </Drawer.Section>
        </View>
        </SafeAreaProvider>
        
    );
}
export default DrawerContent;



const styles=StyleSheet.create({
    drawerContent:{
        flex:1,
        
       
    },
    userInfoSection:{
        paddingLeft:20,

        
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
    },
    Caption:{
        fontSize:12,
        lineHeight:14,
       // flex:1,
        //
        justifyContent:'space-between'
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    Paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
        
    },
    bottomDrawerSection:{
        marginBottom:15,
    },
    preferences:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,

    }
});