import React from 'react';
import{
    View,
    Text,
    Button,
    StyleSheet
}  from 'react-native';


const SplashScreen = () => {
    return(
        <View style={StyleSheet.container}>
          <Text>SplashScreen</Text> 
          <Button
          title="Click Here" 
          onPress={()=>alert('Button clicked')}
          />

        </View>
    );
};

export default SplashScreen;




const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});