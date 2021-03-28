import React from 'react';
import{
    View,
    Text,
    Button,
    StyleSheet,
    TextInput
}  from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';

const SigninScreen = ({navigation}) => {

    const [data,setData]=React.useState({
        email:'',
        password:'',
        confirm_password:'',
        check_textInputChange:false,
        secureTextEntry:true,
        confirm_secureTextEntry:true
    });

    const textInputChange=(val) => {
        if( val.length!=0) {
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            })
        } else{

            setData({
                ...data,
                email:val,
                check_textInputChange:false
            })

        }
    }

    const handlePasswordChange = (val) => {

        setData({
            ...data,
            password:val,
           
        });

    }

    const handleConfirmPasswordChange = (val) => {

        setData({
            ...data,
           confirm_password:val,
           
        });

    }

    const updateSecureTextEntry=() =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry=() =>{
        setData({
            ...data,
           confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }
    return(
        <View style={styles.container}>
         <View style={styles.header}>
         <Text style={styles.text_header}>Register Now!</Text>
         </View>
         <Animatable.View 
          animation="fadeInUpBig"
          style={styles.footer}>
             <Text style={styles.text_footer}>Email</Text>
             <View style={styles.action}>
                 <FontAwesome
                 name="user-o"
                 color="#05375a"
                 size={20}
                 />
                 <TextInput
                 placeholder="your Email"
                 style={styles.textInput}
                 autoCapitalize="none"
                 onChangeText={(val)=>textInputChange(val)} />

                 {data.check_textInputChange ?
                 <Animatable.View
                 animation="bounceIn"
                 >
                 <Feather
                 name="check-circle"
                 color="gray"
                 size={20} />
                 </Animatable.View>

                 : null}

                

             </View>
             <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
             <View style={styles.action}>
                 <FontAwesome
                 name="lock"
                 color="#05375a"
                 size={20}
                 />
                 <TextInput
                 placeholder="your password"
                 secureTextEntry={data.secureTextEntry ? true : false}
                 style={styles.textInput}
                 autoCapitalize="none"
                 onChangeText={(val)=>handlePasswordChange(val)}  />

                <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?
                <Feather
                 name="eye-off"
                 color="gray"
                 size={20} />
                 :
                 <Feather
                 name="eye"
                 color="gray"
                 size={20} />
                    }
                 </TouchableOpacity>

                
                  </View>
                  <Text style={[styles.text_footer,{marginTop:35}]}> Confirm Password</Text>
             <View style={styles.action}>
                 <FontAwesome
                 name="lock"
                 color="#05375a"
                 size={20}
                 />

                  <TextInput
                 placeholder="your confirm password"
                 secureTextEntry={data.confirm_secureTextEntry ? true : false}
                 style={styles.textInput}
                 autoCapitalize="none"
                 onChangeText={(val)=>handleConfirmPasswordChange(val)}  />

                <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                    
                    {data.confirm_secureTextEntry ?
                <Feather
                 name="eye-off"
                 color="gray"
                 size={20} />
                 :
                 <Feather
                 name="eye"
                 color="gray"
                 size={20} />
                    }
                 </TouchableOpacity>

                 
                 </View>
                 <View style={styles.button}>
                     <LinearGradient
                         colors={['#08d4c4','#01ab9d']}
                         style={styles.signIn}>
                         <Text style={[styles.textSign,{color:'#fff'}]}>Sign up</Text>
                          </LinearGradient>
                          

                          <TouchableOpacity
                           onPress={()=>navigation.navigate('SigninScreen')}
                           style={[styles.signIn,{
                               borderColor:'#009387',
                               borderWidth:1,
                               marginTop:15
                           }]}>
                              <Text style={[styles.textSign,{color:'#009387'}]}>Sign in</Text>
                          </TouchableOpacity>
                 </View>
             
                 


                  
                
           
             
         </Animatable.View>

        </View>
    );
};

export default SigninScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
        
    },

    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50,

    },
    footer:{
        flex:3,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    text_header:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:'#05375a',
        fontSize:18
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    textInput:{
        flex:1,
        paddingLeft:10,
        color:'#05375a',
        marginTop:0
    },

    signIn:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10

    },
    textSign:{
        fontSize:18,
        fontWeight:'bold'
    }
    
});