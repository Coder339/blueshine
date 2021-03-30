import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View ,Modal,TouchableOpacity,Alert,Image,TouchableWithoutFeedback} from 'react-native'
import { scaleHeight, scaleWidth } from '../assets/globalstylefunctions';
import { colors, fonts, detailText } from '../assets/globalstyleconstants';
import ScrollContainer from './common/scrollcontainer';
import PaymentCard from './common/payment';
import {Buffer} from 'buffer';
import { encrypter } from './common/encrypter';

export default function WineModal(props) {
    const {modalVisible,onPress,item} = props

    let base64ImageUrl = encrypter(item.img.data.data)
    
    let base64Flag = 'data:png/jpeg;base64,';

    let image = base64Flag + base64ImageUrl;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={onPress}
        >
            <View style={styles.shadow} onTouchStart={onPress}/>

            <View
                style={styles.modalView}
                // onPress={onPress}
                >

                <Text style={styles.modalText}>{item.title}</Text>
                <Image 
                    source={{uri: image}} 
                    style={styles.image}
                />
                <View style={styles.detailContainer}>
                    <Text style={styles.detailHeader}>Wine Details :</Text>
                    <Text style={styles.detailText}>{detailText}</Text>
                </View>

            </View>
            <PaymentCard text='Proceed To Pay'/>
            
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
        height:scaleHeight('100%'),
        marginTop:scaleHeight('18%'),
        backgroundColor: colors.white,
        // borderRadius: 20,
        borderTopLeftRadius:scaleWidth('5%'),
        borderTopRightRadius:scaleWidth('5%'),
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    shadow: {
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#rgba(0,0,0,0.6)'
    },
    modalText: {
        // marginBottom: 15,
        // textAlign: "center",
        fontSize:scaleWidth('4%'),
        fontFamily:fonts.MontserratBold,
    },
    image:{
        // width:scaleWidth('100%'),
        backgroundColor:colors.appColor,
        width:scaleWidth('80%'),
        height:scaleHeight('25%'),
        marginTop:scaleHeight('2%')
    },
    detailContainer:{
        alignItems:'flex-start',
        width:'100%',
        marginTop:scaleHeight('2%'),
    },
    detailHeader:{
        fontFamily:fonts.MontserratMediumItalic,
        fontSize:scaleWidth('4%'),
    },
    detailText:{
        fontFamily:fonts.MontserratRegular,
        textAlign:'justify',
    }
})
