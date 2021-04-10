import React, { component } from 'react';
import { Button,View,Text } from 'react-native';
import { createStackNavigator } from  '@react-navigation/stack';

import { NavigationContainer} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen({navigation}) {
  return(
    <View style={{flex:1,justifyContent:'center'}}>
    <Text>Home Screen</Text>
    <Button title="go to details screen"
      onPress={()=>navigation.navigate('Details')}/>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return(
    <View style={{flex:1,justifyContent:'center'}}>
    <Text>Details Screen</Text>
    <Button title="go to About screen"
      onPress={()=>navigation.navigate('About')}/>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1,  justifyContent:'center' }}>
      <Text>About Screen</Text>
    
      
    </View>
  );
}



const Stack=createStackNavigator();
export default function Dummy() {
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}
       options={{
        headerTitle: 'My home',

        headerStyle: {
          backgroundColor: '#f4511e',
          
        },
        headerLeft:(props)=>(
          <Ionicons name="home-sharp" size={32} color="green"
          style={{paddingLeft:20}}
          />
        ),}} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="About" component={AboutScreen} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

return(
  <NavigationContainer>
  <Drawer.Navigator  >
    
    <Drawer.Screen name="Home" component={HomeScreen}
   drawerContentOptions={{
       headerTitle: 'My home',

       headerStyle: {
         backgroundColor: '#f4511e',
         
       },
       headerTintColor: '#fff',
       headerTitleStyle: {
         fontWeight: 'bold',
         textAlign:'center',
       },
       headerLeft:(props)=>(
         <Ionicons name="home-sharp" size={32} color="green"
         style={{paddingLeft:20}}
         />
       ),
       headerRight:({navigation})=>{
         return (
           <Button title="Login" color="black"
             onPress={() => {alert('Details')}}
             style={{ padding: 20 }} />
         );
       }
     }}/>
     
    <Drawer.Screen name="Details" children={createTopTabs} />
   
    <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    <Drawer.Screen name="Contacts" component={ContactsScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="Register" component={Regform} />
   

  </Drawer.Navigator>
   </NavigationContainer>

    
);

<View style={styles.button}>
<TouchableOpacity onPress={()=>alert('click')}>
  <LinearGradient
  colors={['#08d4c4','#01ab9d']}
  style={styles.signIn}>
    <Text style={styles.textsign}>Get Started</Text>

  </LinearGradient>
</TouchableOpacity>


<NavigationContainer>
       <RootStack.Navigator headerMode='none'>
    <RootStack.Screen name="settings"  component={SettingsScreen} />
     <RootStack.Screen name="SigninScreen" component={SigninScreen} />
     <RootStack.Screen name="SignupScreen"  component={SignupScreen}  />
     </RootStack.Navigator>
      </NavigationContainer>


      <TouchableOpacity
                           onPress={()=>navigation.navigate('SignupScreen')}
                           style={[styles.signIn,{
                               borderColor:'#009387',
                               borderWidth:1,
                               marginTop:15
                           }]}>
                              <Text style={[styles.textSign,{color:'#009387'}]}>Sign up</Text>
                          </TouchableOpacity>


                          if(this.state.PlotNo==""||this.state.posted_datetime==""||this.state.SoilMoisture==""||this.state.SoilTemperature==""||
              this.state.SoilpH==""||this.state.SunLight==""||this.state.EnvTemp==""){
                  alert("please fill all the fields");
              }

              else{


<NavigationContainer>
<Drawer.Navigator>
<Drawer.Screen name="Maintabscreen"  children={Maintabscreen} />
<Drawer.Screen name="Favorites" component={FavoritesScreen} />
<Drawer.Screen name="Contacts" component={ContactsScreen} />

<Drawer.Screen name="Register" component={Regform} />
</Drawer.Navigator>
</NavigationContainer>


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
                             

                             <DataTable.Row>
                                 {
                                     this.state.InputData && 
                                     this.state.InputData.map(InputData=>{
                                         return(
                                         <View>
                                         <DataTable.Row key={InputData.name}>
                                         <DataTable.Cell   align="left" >{InputData.PlotNo}</DataTable.Cell>
                                         <DataTable.Cell  align="left" >{InputData.posted_datetime}</DataTable.Cell>
                                        <DataTable.Cell  align="left">{this.fnFetchSoilMoisture(InputData.SoilMoisture)}</DataTable.Cell>
                                        <DataTable.Cell  align="left">{InputData.SoilTemperature}</DataTable.Cell>
                                        <DataTable.Cell  align="left">{InputData.SoilpH}</DataTable.Cell>
                                        <DataTable.Cell  align="left">{this.fnFetchSunLight(InputData.SunLight)}</DataTable.Cell>
                                        <DataTable.Cell  align="left">{InputData.EnvTemp}</DataTable.Cell>
                                        </DataTable.Row>
                                        </View>
                                        
                                         )
                                     })
                                 }

                             </DataTable.Row>
                             </DataTable>
                            
                            
                             
                            
                                                        
                                 
                              