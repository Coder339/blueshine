import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { Bar } from 'react-native-progress'
import { activeCart,inactiveFavItem, activeFavItem, colors, fonts, buy } from '../assets/globalstyleconstants'
import { scaleHeight, scaleWidth } from '../assets/globalstylefunctions'
import PaymentCard from '../components/common/payment';

export default function Cart() {
    const [isFav, setIsFav] = useState(false);
    const img = 'https://images.pexels.com/photos/3461205/pexels-photo-3461205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.favHeader}>Cart</Text>
            </View>
            <View style={styles.favItem}>
                <Image source={{uri:img}} style={styles.image}/>
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>wine ABC</Text>
                    <Text style={styles.rating}>Rating:  7/10</Text>
                    <Bar 
                        progress={0.4} 
                        width={scaleWidth('30%')} 
                        color={colors.wine1} 
                        unfilledColor={colors.white} 
                        borderWidth={0} 
                        animationType={'timing'} 
                    />
                </View>
                <View style={styles.itemHandler}>
                    <TouchableOpacity
                        onPress={()=>alert('do you want to unfavourite it?')}
                        style={styles.cart}
                    >
                        <Text style={styles.quantity}>+</Text>
                    </TouchableOpacity>
                    <Text style={{color:colors.white}}>3</Text>
                    <TouchableOpacity
                        onPress={()=>alert('add to cart')}
                        style={styles.cart}
                    >
                        <Text style={styles.quantity}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <PaymentCard text='Payment'/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black,
    },
    header:{
        // alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:scaleHeight('10%'),
        backgroundColor:colors.appColor,
    },
    favHeader:{
        marginHorizontal:scaleWidth('2%'),
        color:colors.white,
        fontFamily:fonts.MontserratBoldItalic,
        fontSize:scaleWidth('5%')
    },
    favItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:scaleWidth('2%')
    },
    image:{
        width:scaleWidth('17%'),
        height:scaleWidth('17%')
    },
    title:{
        color:colors.white,
        fontFamily:fonts.MontserratBold,
    },
    rating:{
        color:colors.white,
        fontFamily:fonts.MontserratBold,
    },
    itemContainer:{
        justifyContent:'space-between',
        marginRight:scaleWidth('20%')
    },
    itemHandler:{
        justifyContent:'space-between',
        alignItems:'center',
    },
    cart:{
        width:scaleWidth('6%'),
        height:scaleWidth('6%'),
        borderRadius:scaleWidth('4.5%'),
        backgroundColor:colors.appColor,
        alignItems:'center',
        justifyContent:'center'
    },
    quantity:{
        fontFamily:fonts.MontserratBold,
        color:colors.white,
        fontSize:scaleWidth('5%'),
    },
})
