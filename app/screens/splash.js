import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { fonts, colors } from '../assets/globalstyleconstants'
// import { horizontalScale } from '../assets/globalstylefunctions'
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { scaleWidth } from '../assets/globalstylefunctions';

export default function Splash() {
    const [animating, setAnimating] = useState(true);

    const navigation = useNavigation()
    
    useEffect(() => {
        setTimeout(() => {
          setAnimating(false);
          //Check if user_id is set or not
          //If not then send for Authentication
          //else send to Home Screen
          AsyncStorage.getItem('userToken').then((value) =>
            navigation.replace(
              value === null ? 'Auth' : 'App'
            ),
          );
        }, 5000);
      }, []);

    return (
        <View style={styles.splash}>
            <View style={styles.circle}>
                <Text style={styles.drag}>Let's Go</Text>
            </View>
        </View>
    )
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
    splash:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    circle: {
        // flex:1,
        backgroundColor:colors.error,
        width: CIRCLE_RADIUS * 5,
        height: CIRCLE_RADIUS * 5,
        borderRadius: CIRCLE_RADIUS * 2.5,
        justifyContent:'center',
        alignItems:'center'
    },
    drag:{
        color:'white',
        fontFamily:fonts.FasterOneRegular,
        fontSize:scaleWidth('5%')
    },
})
