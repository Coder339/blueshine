import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button,Alert } from 'react-native'
import { removeData } from '../config/storage'
import { useSelector, useDispatch } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import * as actions from '../redux/actiontypes';

export default function Logout() {
   
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [isVisible,setIsVisible] = useState(false)
    const state = useSelector(state => state);

    const logoutHanlder=()=>{
        Alert.alert(
            'LOGOUT !',
            'PRESS OK TO LOGOUT',
            [
              {
                text: 'Cancel',
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: 'OK', 
                onPress: async () => {
                  dispatch({type:actions.LOGOUT})
                  removeData('userToken')
                  navigation.replace('Auth')
                }
              }
            ],
            { cancelable: false }
          );
    }

    useEffect(() => {
        
        if (state.case === actions.LOGOUT){
          console.log('response',state)
        }
        AsyncStorage.getItem('userToken').then((value) =>
        
            value === null ? setIsVisible(true) : setIsVisible(false)
        
        )},[state]);
    

    return (
        <View>
            <Button title='logout' onPress={logoutHanlder}/>
        </View>
    )
    

    }
  


const styles = StyleSheet.create({})
