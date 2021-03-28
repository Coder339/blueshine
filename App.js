
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Home from './app/screens/home';
import RootStackScreen, { HomeStack } from './app/config/router';
import {store} from './app/redux/store';

const App = () => {


  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootStackScreen/>
      </NavigationContainer>
    </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;