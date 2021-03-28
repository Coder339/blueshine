import React from 'react';

import { StyleSheet,View } from 'react-native';
import { verticalScale,scaleHeight } from '../../assets/globalstylefunctions';


const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style,}} {...props}>
            {props.children}
        </View>
    );
    
}

const styles = StyleSheet.create({
    card: {
        // flex:1,
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: verticalScale(7) },
        // shadowRadius: 9.11,
        // shadowOpacity: 0.41,
        // elevation: 30,
        // backgroundColor: '#fff',
        // padding: scaleHeight('2%'),
        // marginHorizontal:'1%'
        
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
    }
})

export default Card;