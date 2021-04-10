import React from 'react';
import { View,StyleSheet} from 'react-native';
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

//import { AuthContext } from '../../../Apps/components/Context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function DrawerContent(props){
    const paperTheme = useTheme();
    //const {signOut, toggleTheme}=React.useContext(AuthContext);

    return(
        <SafeAreaProvider>
        <View style={{flex:1,backgroundColor:'pink'}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image
                            size={50}
                            source={require('../../../assets/Logo.png')}/>
                            <View style={{marginLeft:15,flexDirection:'column'}}>
                                <Title style={styles.title}>Meghana Patan</Title>
                                <Caption style={styles.Caption}>@Patan_Megha</Caption>
                                </View>

                            
                        </View>
                        <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.Paragraph,styles.Caption]}>80</Paragraph>
                            <Caption style={styles.Caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.Paragraph,styles.Caption]}>100k</Paragraph>
                            <Caption style={styles.Caption}>Followers</Caption>
                        
                    
                </View>
            </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
            icon={({color,size})=>(
                <Icon
                name="home-outline"
                color={color}
                size={size} />
            )}
            label="Home"
            onPress={()=>{props.navigation.navigate('Maintabscreen')}} />

           <DrawerItem
            icon={({color,size})=>(
                <Icon
                name="bookmark-outline"
                color={color}
                size={size} />
            )}
            label="Bookmarks"
           

            onPress={()=>{props.navigation.navigate('FavoritesScreen')}} />

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
            onPress={()=>{props.navigation.navigate('ContactsScreen')}} />

          <DrawerItem
            icon={({color,size})=>(
                <Icon
                name="account-check-outline"
                color={color}
                size={size} />
            )}
            label="Support"
            onPress={()=>{props.navigation.navigate('AboutScreen')}} />
        </Drawer.Section>

        <Drawer.Section title="Preferences">
            <TouchableRipple onPress={()=>{toggleTheme()}}>
            <View style={styles.preferences}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                    <Switch value={paperTheme.dark}/>
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
            onPress={()=>{signOut()}} />
        </Drawer.Section>
        </View>
        </SafeAreaProvider>
        
    );
}

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
        fontSize:14,
        lineHeight:14,
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