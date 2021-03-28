
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Test from '../screens/test';
import Login from '../screens/login';
import Splash from '../screens/splash';

const Stack = createStackNavigator();  // Testing as of now. 
const Tab = createBottomTabNavigator();

export function AuthStack() {

  return (
    <Stack.Navigator
      mode='modal'
      initialRouteName='signIn'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="SignIn" component={Login}/>
      {/* <Stack.Screen name="Signup" component={Signup}/> */}
    </Stack.Navigator>
  );
}

export function HomeStack({route,navigation}) {

  return (
    <Stack.Navigator
      mode='modal'
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Test" component={Test}/>
    </Stack.Navigator>
  );
}


export default function RootStackScreen(){

  return(
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="App"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
};

