import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable';

export default function ErrorMsg(props) {
    const {message,containerStyle,textStyle} = props
    return (
            
        <Animatable.View 
            animation='fadeInLeft' 
            duration={500}
            style={{...containerStyle,...styles.container}}
            >
            <Text style={textStyle}>{message}</Text>
        </Animatable.View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1
    }
})
