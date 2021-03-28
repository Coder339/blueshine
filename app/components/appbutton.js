import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { colors, fonts } from '../assets/globalstyleconstants'

export default function AppButton(props) {
    const {text,onPress} = props
    return (
        <TouchableOpacity style={{...props.style,...styles.button}} onPress={onPress}>
            <Text style={{...styles.buttonText,...props.textStyle}}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        
    },
    buttonText:{
        color:'#fff',
        fontFamily:fonts.MontserratBold,
    },


})
