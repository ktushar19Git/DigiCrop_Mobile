import React from 'react'
import { 
    StyleSheet, 
    Text,
     View,
    TextInput,
TouchableOpacity,
Button,
Picker,
 } from 'react-native';
 import firebase from '../../../Apps/firebase';
 import DatePicker from "react-native-datepicker";
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import {Paper} from "react-native-paper";
 import { DataTable} from 'react-native-paper';

export default class Submitdata extends React. Component {
     constructor(props){
         super(props);
         this.fnSubmit = this.fnSubmit.bind(this);
         this.fnFetchSunLight=this.fnFetchSunLight.bind(this);
        
         this.state={
            SoilMoisture :"",
            SoilTemperature:"",
            SoilpH:"",
            SunLight:"",
            EnvTemp:"",
            PlotNo:"",
            posted_datetime:"",
            inputdata: []

         }

        
     }

     fnFetchSunLight(e)
     {
         let localSunLight = "";        
         if(e == 1)
         {
             localSunLight = "Low-";
         }
         else if(e == 2)
         {
             localSunLight = "Low";
         }
         else if(e == 3)
         {
             localSunLight = "Low+";
         }
         else if(e == 4)
         {
             localSunLight = "Nor-";
         }
         else if(e == 5)
         {
             localSunLight = "Nor";
         }
         else if(e == 6)
         {
             localSunLight = "Nor+";
         }
         else if(e == 7)
         {
             localSunLight = "High-";
         }
         else if(e == 8)
         {
             localSunLight = "High";
         }
         else if(e == 9)
         {
             localSunLight = "High+";
         }
         return localSunLight;
     }
         
     
          fnSubmit() {

            let strErr = "";
            if (this.state.SoilMoisture == "") {
                strErr = strErr + "Please select Soil Moisture\n";
    
            }
            if (this.state.SoilTemperature == "") {
                strErr = strErr + "Please enter Soil Temperature\n";
    
            }
            else
            {
                if(this.state.SoilTemperature < -9 || this.state.SoilTemperature > 50)
                {
                    strErr = strErr + "Please select correct Soil Temperature (-9 to 50)\n";
                }
                
            }

            if (this.state.SoilpH == "") {
                strErr = strErr + "Please enter Soil PH\n";
    
            }
            else
            {
                if(this.state.SoilpH < 3.5 || this.state.SoilpH > 9)
                {
                    strErr = strErr + "Please select correct SoilpH (3.5 to 9)\n";
                }
                
            }

            if (this.state.SunLight == "") {
                strErr = strErr + "Please select SunLight\n";
    
            }
            if (this.state.EnvTemp == "") {
                strErr = strErr + "Please enter Environmental Temperature\n";
    
            }
            else
            {
                if(this.state.SoilTemperature < -9 || this.state.SoilTemperature > 50)
                {
                    strErr = strErr + "Please select correct Environmental Temperature (-9 to 50)\n";
                }
                
            }

            if (strErr != "") {
                alert(strErr);
            }
            else{
            
                const db = firebase.firestore();
                db.collection("InputData").add({
                    PlotNo:this.state.PlotNo,
                    SoilMoisture: this.state.SoilMoisture,
                    SoilTemperature: this.state.SoilTemperature,
                    SoilpH: this.state.SoilpH,
                    SunLight: this.state.SunLight,
                    EnvTemp: this.state.EnvTemp,
                    posted_datetime: this.state.posted_datetime,
                   
                })
                this.fnFetchSunLight();

                alert("Record Added Successfully");
                
                }
            }
            
            
            
    render(){
    return (
      <View style={styles.Submit}>
         <Text style={styles.header}>Measurement Parameters</Text>
        <Picker style={styles.textinput}
        selectedValue ={this.state.PlotNo}  onValueChange={PlotNo=>this.setState({PlotNo})} >
            <Picker.Item label="Plot No"  value=""  />
           <Picker.Item  label="1" value="1"  />
           <Picker.Item  label="2" value="2"  />
           <Picker.Item  label="3" value="3"  />
           <Picker.Item  label="4" value="4"  />
           <Picker.Item  label="5" value="5"  />
       </Picker>

         <TextInput  style={styles.textinput}  placeholder="Posted Date & Time 1609067368835"
        selectedValue={this.state.posted_datetime} 
         onValueChange={(posted_datetime)=>this.setState({posted_datetime})}/>

       <Picker style={styles.textinput} placeholder="SoilMoisture"
         selectedValue={this.state.SoilMoisture} onValueChange={SoilMoisture=>this.setState({SoilMoisture})} >
           
           <Picker.Item  label="Dry" value="Dry"  />
           <Picker.Item  label="Dry+" value="Dry+"  />
           <Picker.Item  label="Nor" value="Nor"  />
           <Picker.Item  label="Wet" value="Wet"  />
           <Picker.Item  label="Wet+" value="Wet+"  />
       </Picker>

       <TextInput  style={styles.textinput} placeholder="Soil Temperture(-9-50^0 c)"
         value={this.state.SoilTemperature}  onChangeText={SoilTemperature=>this.setState({SoilTemperature})}/>
       
        <TextInput  style={styles.textinput} placeholder="Soil pH(3.5-9)"
         value={this.state.SoilpH}  onChangeText={SoilpH=>this.setState({SoilpH})}/>

         <Picker style={styles.textinput} 
          selectedValue={this.state.SunLight}  onValueChange={SunLight=>this.setState({SunLight})}>
           <Picker.Item label="SunLight" value="" />
           <Picker.Item  label="Low-" value="1"  />
           <Picker.Item  label="Low" value="2"  />
           <Picker.Item  label="Low+" value="3"  />
           <Picker.Item  label="Nor-" value="4"  />
           <Picker.Item  label="Nor" value="5"  />
           <Picker.Item  label="Nor+" value="6"  />
           <Picker.Item  label="High-" value="7"  />
           <Picker.Item  label="High" value="8"  />
           <Picker.Item  label="High+" value="9"  />
       </Picker>
       
        <TextInput  style={styles.textinput} placeholder="Envorimental Temperature(-9-50)"
         value={this.state.EnvTemp}  onChangeText={EnvTemp=>this.setState({EnvTemp})}/>
       
                    <View>
                     <TouchableOpacity
                           style={[styles.Button,{
                               borderColor:'#009387',
                               borderWidth:1,
                               marginTop:10
                           }]} onPress={()=>{this.fnSubmit()}}>

            
        
                         <Text style={styles.btntxt}>

                     <Icon
                     name="exit-to-app"
                     color="white"
                     marginTop="30"
                     size={20}  /> SUBMIT DATA
                         </Text>
                          </TouchableOpacity>
                          </View>
                          <View>
                             
                            
                           
                             <DataTable  >
                                <Text style={styles.Exist}>Existing</Text>
                            
                             <DataTable.Row>
                                 <DataTable.Cell alignItems="left">PlotNo</DataTable.Cell>
                                 <DataTable.Cell alignItems="left">Date/Time</DataTable.Cell>
                                 <DataTable.Cell alignItems="left">SoilMoisture</DataTable.Cell>
                                 <DataTable.Cell alignItems="left">SoilTemperature</DataTable.Cell>
                                 <DataTable.Cell alignItems="left">SoilPH</DataTable.Cell>
                                 <DataTable.Cell alignItems="left">SunLight</DataTable.Cell>
                                 <DataTable.Cell alignItems="left">EnvTemp</DataTable.Cell>
                                
                             </DataTable.Row>
                             </DataTable>
                            
                             
                            
                                                        
                                 
                              
                          </View>
                          </View>
                        
                          
                          
                              
                                  
                                      
                                  
                              
                          
                         
    
    );
  }
}
  
  const styles = StyleSheet.create({
    Submit: {
     
     backgroundColor: '#1520A6',
     //backgroundColor:'pink',
     padding:20,
     
    },
    header:{
        fontSize:26,
        color:'#3aff2e',
        
       // paddingBottom:10,
        marginBottom: 20,
        borderBottomColor:'#fff',
        borderBottomWidth: 2,
        marginLeft:10,
        marginEnd:10,
    },
    textinput: {
        alignSelf: 'stretch',
        height:40,
        marginBottom:10,
        color: 'black',
        borderColor: '#fff',
        borderWidth:1,
        padding:6,
        margin:10,
        backgroundColor:"white",
        fontWeight:"bold",
        marginEnd:10,
        marginLeft:10,
  
    },
   
    Button:
    {
        alignItems:'stretch',
        alignItems:'center',
        padding:10,
        backgroundColor:'green',
        marginTop: 30,
        marginLeft:10,
        marginEnd:10,
    },
    btntxt:
    {
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        
    },
    Exist:{
       marginTop:20,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
    },
    table:{
        marginTop:30,
        backgroundColor:'yellow',
        width:50,
        height:30,
    }
  
  
  });
  
