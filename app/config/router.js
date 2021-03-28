
import React,{useEffect,useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  activeHome, 
  inactiveHome, 
  colors, 
  activeFav, 
  inactiveFav, 
  activeSettings, 
  inactiveSettings, 
  activeCart, 
  inactiveCart, 
  activeIce,
  inactiveIce,
  fonts} from '../assets/globalstyleconstants';
import AsyncStorage from '@react-native-community/async-storage';

import Home from '../screens/home';
import Test from '../screens/test';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Splash from '../screens/splash';
import Cart from '../screens/cart';
import Favourites from '../screens/favourites';
import Settings from '../screens/settings';
import OnboardingScreen from '../screens/onboarding';


const Stack = createStackNavigator();  // Testing as of now. 
const Tab = createBottomTabNavigator();

export function AuthStack() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
        
      } else {
        setIsFirstLaunch(false);
        
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
    // GoogleSignin.configure({
    //   webClientId: "170241595518-5p5p49737o54i9e0r5jjqq6gl5sa84sc.apps.googleusercontent.com",
    // });
  
  }, []);


  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'SignIn';
  }

  return (
    <Stack.Navigator
      mode='modal'
      initialRouteName={routeName}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
      <Stack.Screen name="SignIn" component={Login}/>
      <Stack.Screen name="Signup" component={Signup}/>
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

export function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color,focused }) => {
          if (route.name === 'Home') {
            return focused ? activeHome : inactiveHome
          } else if (route.name === 'Favourites') {
            return focused ? activeFav : inactiveFav
          } else if (route.name === 'Categories') {
            return focused ? activeIce : inactiveIce
          } else if (route.name === 'Settings') {
            return focused ? activeSettings : inactiveSettings
          }else if (route.name === 'Cart') {
            return focused ? activeCart : inactiveCart
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.appColor,
        inactiveTintColor: 'gray',
        keyboardHidesTabBar:true,
        showLabel:false
      }}
      
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favourites" component={Favourites}/>
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
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
        component={HomeTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
};

