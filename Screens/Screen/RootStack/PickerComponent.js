import React,{Component} from 'react';
import {View,Text,Picker} from "react-native";

 class PickerComponent extends Component{
     state={
         language:'english'
     }
    render(){
        return(
            <View>
               
                <Picker style={{width:'100%'}}
                selectedValue={this.state.language}>
                <Picker.item label="spanish" value="spanish" />
                </Picker>
            </View>
        )
    }

}
export default PickerComponent;
