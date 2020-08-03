import React from 'react';
import { View, StatusBar, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons'


import Login from './src/Screen/Login';
import Register from './src/Screen/Register';
import Home from './src/Screen/Home';
import MapScreen from './src/Screen/MapScreen';
import Profile from './src/Screen/Profile'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()




function StackScreen() {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={MyTab}/>
    </Stack.Navigator>

  );
}


function MyTab({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{

        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="MapScreen" component={MapScreen}
        options={{

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={size} />
          ),
        }}  />
      <Tab.Screen name="Profile" component={Profile}
        options={{

          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }} />

    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

