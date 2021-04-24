import React from 'react';
import { Dimensions,View,Text } from 'react-native';
import { LineChart}   from 'react-native-chart-kit';

export default class Nayana extends Component{
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
              chartConfig={{
                  backgroundColor:'#e26a00',
                  backgroundGradientFrom:'#fb8c00',
                  backgroundGradientTo:'#ffa726',
                  decimalPlaces:2,
                  color:(opacity=1)=>'rgba(255,255,255,${opacity})',
                  style:{
                      borderRadius:16
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