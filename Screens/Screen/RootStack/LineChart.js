import React from 'react';
import {View,Text}  from 'react-native';
import firebase from '../../../Apps/firebase';

import {Line}  from 'react-chartjs-2';




export default class LineChart extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            SoilMoisture :"",
            SoilTemperature:"",
            SoilpH:"",
            SunLight:"",
            EnvTemp:"",
            PlotNo:"1",
            posted_datetime:"11/01/2020 11:02:0025",
            InputData: [],
            TemperatureArray:[]

        }
        this.fnFetchData=this.fnFetchData.bind(this);
        let TemperatureArray=[];
        for(var i=1;i<=12;i++){
            let AverateTemperatureLocal=this.fnFetchData(i);
            console.log("Month No:"+i+"--"+AverateTemperatureLocal);
            TemperatureArray.push(AverateTemperatureLocal);
        }
        console.log("FinalTempArray:"+TemperatureArray);
        
        this.data={
           labels:['jan','Feb','Mar','Apr','May','jun','jul','Aug','Sep','Oct','Nov','Dec'],
           datasets:[
               {
                 label:'Temperture',
                 type:'line',
                 data:TemperatureArray,
                 PointRadius:5,
                 borderWidth:2,
                 borderColor:'green',
                 point:'rgba(200,122,20,1)',
                 backgroundColor:'transparent',

               },

            {
                label:'Humidity',
                
                data:[12,15,18,22,24,10,12,15,18,22],
                PointRadius:5,
                borderWidth:2,
                borderColor:'blue',
                point:'rgba(200,122,20,1)',
                backgroundColor:'transparent'
            }


            



           ]
          
        }
    }
    
fnFetchData(Month)
{
    const db = firebase.firestore();
    const InputData=[];
    db.collection("InputData").where("uid", "==",(firebase.auth().currentUser.uid)).get()
          .then(querySnapshot => {
              querySnapshot.forEach(doc=>{
                  console.log("inputdata:"+doc);
                  const data=doc.data()
                  console.log("fnfetchdata:"+data);
                  InputData.push(data)
                  console.log("Firstloop-"+InputData);
              });
             
            this.setState({InputData: InputData});
            
          });

          let startDate;
          let EndDate;


          if(Month==1)
          {
              startDate='01/01/2021';
              EndDate='31/01/2021';
          }
          if(Month==2)
          {
              startDate='01/02/2021';
              EndDate='28/02/2021';
          }
          if(Month==3)
          {
              startDate='01/03/2021';
              EndDate='31/03/2021';
          }
          if(Month==4)
          {
              startDate='01/04/2021';
              EndDate='30/04/2021';
          }
          if(Month==5)
          {
              startDate='01/05/2021';
              EndDate='31/05/2021';
          }
          if(Month==6)
          {
              startDate='01/06/2021';
              EndDate='30/06/2021';
          }
          if(Month==7)
          {
              startDate='01/07/2021';
              EndDate='30/07/2021';
          }
          if(Month==8)
          {
              startDate='01/08/2021';
              EndDate='31/08/2021';
          }
          if(Month==9)
          {
              startDate='01/09/2021';
              EndDate='30/09/2021';
          }
          if(Month==10)
          {
              startDate='01/10/2021';
              EndDate='31/10/2021';
          }
          if(Month==11)
          {
              startDate='01/11/2021';
              EndDate='30/11/2021';
          }
          if(Month==12)
          {
              startDate='01/12/2021';
              EndDate='31/12/2021';
          }

          console.log("StartDate:"+startDate+"--EndDate"+EndDate);

          const filderdata=InputData.filter(data=>
            {
                return data.posted_datetime>startDate&&data.posted_datetime<EndDate
            });

            let Sum=0;
            let NoofItems=1;
            console.log("Month No:-"+Month+"Filter Data:"+filderdata);
            {
                this.filderdata&&
                this.filderdata.map(InputData=>{
                    console.log("Month No:-"+Month+"Temp:"+InputData.EnvTemp);
                    Sum=Sum+parseInt(InputData.EnvTemp);
                    NoofItems=NoofItems+1;

                })
            }

            let AverateTemperture=Sum/NoofItems;
            console.log("FinalValue:"+AverateTemperture);
            return Month;
        }
        render(){
            return(
                <View>
                    <Text>This is Dashboard Line </Text>
                    
                        <Line data={this.data}></Line>
                    
                </View>
            );
        }
    }
    