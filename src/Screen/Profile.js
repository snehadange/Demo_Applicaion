import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,AsyncStorage,Linking} from 'react-native'


export default class Profile extends React.Component{
    state={
        userInfo:[]
    }

    async componentDidMount(){
       let userData=await AsyncStorage .getItem('key')
       let jsonObject=JSON.parse(userData)
     
            this.setState({
            userInfo:jsonObject
        })
     
       
       
    }

    removeData =async()=>{
        await AsyncStorage.removeItem('key')
        this.props.navigation.navigate('Register')
    }
    render(){
      let userArr=this.state.userInfo.map((x,i)=>{
          return(
              <View style={{justifyContent:'center',alignItems:'center',flex:1}} key={i}>
                 <Text>Name:<Text style={{fontWeight:'bold'}}>{x.name}</Text></Text>
                 <Text>Email:<Text style={{fontWeight:'bold'}}>{x.email}</Text></Text>
                 <Text>Gender:<Text style={{fontWeight:'bold'}}>{x.gender}</Text></Text>
                 <TouchableOpacity onPress={() => Linking.openURL(x.link)}>
                 <Text>Link:<Text style={{fontWeight:'bold',color:'blue'}}>{x.link}</Text></Text>
                  </TouchableOpacity>
                 <Text>BirthDate:<Text style={{fontWeight:'bold'}}>{x.birthDate}</Text></Text>
               
              </View>
             
          )
      })


       
       
        return(
            <View style={styles.container}>
              <View style={styles.header}>
                    <Text style={styles.headerTitle}>Profile</Text>
                    <View style={{marginLeft:250}}>
                        <TouchableOpacity onPress={this.removeData}>
                         <Text style={{top:-10,fontWeight:'bold'}}>Log out</Text>
                     </TouchableOpacity>
                    </View>
                     
                </View>
                {userArr}
             </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
      
    },
    header: {
        paddingTop: 64,
        paddingBottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#E8ECF4",
        backgroundColor: '#e91e63',
        shadowColor: '#ab1859',
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10,
        
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        top:15
    },
})