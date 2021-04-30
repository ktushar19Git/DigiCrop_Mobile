import React from 'react';
import { Dimensions,View,Text } from 'react-native';
import { LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart}   from 'react-native-chart-kit';

export default class Nayana extends React.Component{
    render(){
        return(
          <View>
              <Text>Bezire line chart</Text>
              <LineChart
              data={{
                  labels:['january','February','March','April','May','June'],
                  datasets:[{
                      data:[
                          Math.random()*100,
                          Math.random()*100,
                          Math.random()*100,
                          Math.random()*100,
                          Math.random()*100,
                          Math.random()*100,
                      ]
                  }]
              }}
              width={Dimensions.get('window').width}
              height={220}
              yAxisLabel='$'
              yAxisSuffix="K"
              yAxisInterval={1}
              chartConfig={{
                  backgroundColor:'#e26a00',
                  backgroundGradientFrom:'#fb8c00',
                  backgroundGradientTo:'#ffa726',
                  decimalPlaces:2,
                  color:(opacity=0.8)=>'rgba(0,255,0,${opacity})',
                  labelColor:(opacity=1)=>'rgba(0,255,0,${opacity})',
                  style:{
                      borderRadius:16,
                     
                  },
              
            propsForDots:{
                r:"6",
                strokeWidth:'2',
                stroke:"#ffa726"
            }
        }}
              bezier
              style={{
                  marginVertical:8,
                  borderRadius:16
              }}
              />
          </View>
        )
    }
}