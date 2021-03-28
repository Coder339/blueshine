import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './card'
import AppButton from '../appbutton'
import { scaleWidth, scaleHeight } from '../../assets/globalstylefunctions'
import { colors, fonts } from '../../assets/globalstyleconstants'

export default function PaymentCard(props) {
    const {text} = props
    return (
        <Card style={styles.container}>
            <View style={styles.totalContainer}>
                <View>
                    <Text style={styles.grand}>Grand Total</Text>
                    <Text style={styles.vat}>Inclusive of VAT</Text>
                </View>
                <Text style={{fontSize:scaleWidth('6%'),fontFamily:fonts.MontserratBold}}>Rs 8000</Text>
            </View>
            <AppButton 
                text={text}
                style={styles.payButton} 
                onPress={()=>alert('pay')}
                textStyle={styles.buttonText}
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        height:scaleWidth('40%'),
        width:'100%',
        position:'absolute',
        bottom:0,
        elevation: 30,
        backgroundColor: '#fff',
    },
    totalContainer:{
        width:'100%',
        padding:scaleWidth('2%'),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:scaleWidth('2%')
    },
    payButton:{
        // flex:1,
        width:scaleWidth('80%'),
        height:scaleHeight('8%'),
        borderRadius:scaleWidth('1%'),
        backgroundColor:colors.appColor,  
        marginVertical:scaleHeight('3%'),
    },
    buttonText:{
        fontSize:scaleWidth('5%'),
        fontFamily:fonts.FasterOneRegular,
    },
    grand:{
        fontFamily:fonts.MontserratBold,
        fontSize:scaleWidth('6%')
    },
    vat:{
        letterSpacing:2.5,
    }
})
