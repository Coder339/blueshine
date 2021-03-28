import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

export default function Home({navigation}) {
    return (
        <View>
            <Button title="check" onPress={()=>navigation.navigate('Test')}/>
        </View>
    )
}

const styles = StyleSheet.create({})
