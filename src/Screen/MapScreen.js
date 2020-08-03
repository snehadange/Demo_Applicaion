import React from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';
import MapView,{Marker} from 'react-native-maps'
import * as Location from 'expo-location'

export default class MapScreen extends React.Component{
    state={
       latitude:0,
       longitude:0
    }

  componentDidMount(){
        this._getLocation()
    }

    _getLocation=async()=>{
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
         console.log('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
        this.setState({
            longitude:location.coords.longitude,
            latitude:location.coords.latitude
        })

    }
    
    render(){
        
     
        return(
           <View style={styles.container}>
               
             <MapView 
            style={styles.mapStyle}
         region={{
                latitude:this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.0015,
                longitudeDelta: 0.00121,
            }}>
         <Marker
            coordinate = {{ latitude: this.state.latitude, longitude: this.state.longitude }}
            
            />
           </MapView>
           </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})