import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { inactiveFavItem, activeFavItem } from '../../assets/globalstyleconstants'

export default function Fav(props) {
    const {isFav,onPress} = props
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            {isFav ? activeFavItem : inactiveFavItem}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
