import { View, Text, StyleSheet, Alert, StatusBar, TextInput, TouchableOpacity, Platform, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather';
import React, { Component } from 'react'
import firebase from '../../../Apps/firebase'
import "firebase/auth"


class Supscreen extends Component {
    constructor(props) {
        super(props)
        // this.validate=this.validate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            email: '',
            password: '',
            confirmpassword: '',
            icEye: 'visibility-off',
            icEye1:'visibility-off',
            showPassword: true,
            showConfirmPassword:true
        }
    }

    handleSubmit = () => {
        let error = ""
        if (this.state.email == "" || !this.state.email.includes("@")) {
            alert("Please enter valid email \n")
        }
        else if (this.state.password == "" || this.state.confirmpassword == "") {
            alert("please enter password \n")
        }
        else if (this.state.password !== this.state.confirmpassword) {
            alert("password didn't match")
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            Alert.alert("Registered successfully")
        }
    }
    changePass = () => {
        let newState;
        if (this.state.showPassword) {
            newState = {
                icEye: 'visibility',
                showPassword: false,
                password: this.state.password
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                showPassword: true,
                password: this.state.password
            }
        }
        this.setState(newState)
    }

    changeCPass = () => {
        let newState;
        if (this.state.showConfirmPassword) {
            newState = {
                icEye1: 'visibility',
                showConfirmPassword: false,
                confirmpassword: this.state.confirmpassword
            }
        } else {
            newState= {
                icEye1: 'visibility-off',
                showConfirmPassword: true,
                confirmpassword: this.state.confirmpassword
                
            }
        }
        this.setState(newState)
    }

    handlePass=(password)=>{
        let newState={
            icEye:this.state.icEye,
            showPassword:this.state.showPassword,
            password:password
        }
        this.setState(newState);
    };

    handleCPass=(confirmpassword)=>{
        let newState={
            icEye1:this.state.icEye1,
            showConfirmPassword:this.state.showConfirmPassword,
            confirmpassword:confirmpassword
        }
        this.setState(newState);
    };
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text_header}>
                        Register Now
        </Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>
                    <ScrollView>
                        <Text style={styles.text_footer}>email-id
                        </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color='#05375a'
                                size={20} />
                            <TextInput
                                placeholder="Your email"
                                placeholderTextColor="#666666"
                                keyboardType={'email-address'}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(text) => { this.setState({ email: text }) }} />
                        </View>
                        <Icon style={styles.icon} name={this.state.icEye} size={30} onPress={this.changePass} />
                        <Icon style={styles.icon1} name={this.state.icEye1} size={30} onPress={this.changeCPass} />
                       
                        <Text style={[styles.text_footer, {
                            marginTop: 35
                        }]}>Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color='#05375a'
                                size={20} />
                            <TextInput
                                placeholder="Your password"
                                placeholderTextColor="#666666"
                                value={this.state.password}
                                secureTextEntry={this.state.showPassword}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={this.handlePass} />
                        </View>
                        <Text style={[styles.text_footer, {
                            marginTop: 35
                        }]}>Confirm Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color='#05375a'
                                size={20} />
                            <TextInput
                                placeholder="Confirm Your password"
                                placeholderTextColor="#666666"
                                secureTextEntry={this.state.showConfirmPassword}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={this.handleCPass}
                            />
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.signin}
                                onPress={() => { }}>
                                <LinearGradient
                                    colors={['#08d4c4', '#01ab9d']}
                                    style={styles.signin}>
                                    <Text style={[styles.textsign, {
                                        color: '#fff',
                                        textAlign:'center'
                                    }]}
                                        onPress={() => { this.handleSubmit() }}>Sign Up</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('Signinscreen') }}
                                style={[styles.signin, {
                                    borderColor: '#009387',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}>
                                <Text style={[styles.textsign, {
                                    color: '#009387',
                                    textAlign:'center'
                                }]}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Animatable.View>
            </View>
        )
    }
}

export default Supscreen

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#009387'
    },
    icon: {
        position: 'absolute',
        top:120,
        right: 0
    },

    icon1: {
        position: 'absolute',
        top: 220,
        right:0
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        //flex: 1,
        width:1200,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signin: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        borderRadius: 10
    },
    textsign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textprivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textprivate: {
        color: 'grey'
    }
});

