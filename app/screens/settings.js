import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,Alert } from 'react-native'
import {account,notifications,logout,goback,privacy,about,fonts} from '../assets/globalstyleconstants';
import { scaleHeight, scaleWidth } from '../assets/globalstylefunctions';
import { removeData } from '../config/storage'
import { useSelector, useDispatch } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import * as actions from '../redux/actiontypes';

export default function Settings() {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [isVisible,setIsVisible] = useState(false)
    const state = useSelector(state => state);

    const logoutHandler=()=>{
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
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={goback} style={styles.goback}/>
                <Text style={styles.header}>Settings</Text>
            </View>
            <View style={{marginTop:scaleWidth('5%')}}>
                <TouchableOpacity style={styles.setContainer} onPress={()=>alert('ghjgjh')}>
                    <Image source={account} style={styles.icon}/>
                    <Text style={styles.title}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.setContainer} onPress={()=>alert('ghjgjh')}>
                    <Image source={notifications} style={styles.icon}/>
                    <Text style={styles.title}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.setContainer} onPress={()=>alert('ghjgjh')}>
                    <Image source={privacy} style={styles.icon}/>
                    <Text style={styles.title}>Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.setContainer} onPress={()=>alert('ghjgjh')}>
                    <Image source={about} style={styles.icon}/>
                    <Text style={styles.title}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.setContainer} onPress={()=>alert('fdgdf')}>
                    <Image source={about} style={styles.icon}/>
                    <Text style={styles.title}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.setContainer} onPress={logoutHandler}>
                    <Image source={logout} style={styles.icon}/>
                    <Text style={styles.title}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:scaleWidth('3%'),
        padding:scaleWidth('1%'),
        marginTop:scaleWidth('3%')
        // backgroundColor:'red'
    },
    goback:{
        width:scaleWidth('8%'),
        height:scaleWidth('8%')
    },
    header:{
        fontSize:scaleWidth('8%'),
        fontFamily:fonts.MontserratLight,
        marginHorizontal:scaleWidth('25%')
    },
    setContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:scaleWidth('3%'),
        padding:scaleWidth('1%'),
        marginVertical:scaleWidth('3%')
    },
    icon:{
        width:scaleWidth('8%'),
        height:scaleWidth('8%')
    },
    title:{
        fontSize:scaleWidth('6%'),
        fontFamily:fonts.MontserratLight,
        marginHorizontal:scaleWidth('10%')
    }
})
