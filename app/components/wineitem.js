import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { scaleWidth, scaleHeight } from '../assets/globalstylefunctions'
import Card from './common/card'
import AppButton from './appbutton'
import { colors, fonts, errorImage } from '../assets/globalstyleconstants'
import WineModal from './winemodal'
import Fav from './common/fav'
import { Bar } from 'react-native-progress';
import { encrypter } from './common/encrypter'

function Item (props){
    const {item} = props
    const [modalVisible, setModalVisible] = useState(false);
    const [isFav, setIsFav] = useState(false);


    let base64ImageUrl = encrypter(item.img.data.data)
    
    let base64Flag = 'data:png/jpeg;base64,';

    let image = base64Flag + base64ImageUrl;


    return (
            <Card style={styles.container}>
                <View style={styles.fav}>
                    <Text style={styles.itemName}>{item.title}</Text>
                    <Fav isFav={isFav} onPress={()=>setIsFav(!isFav)}/>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true);
                        }}
                >
                    <Image 
                        source={{uri: image}} 
                        style={styles.image}
                    />
                </TouchableOpacity>
                <View style={styles.barContainer}>
                    <Bar 
                    progress={0.4} 
                    width={scaleWidth('60%')} 
                    color={colors.appColor} 
                    unfilledColor={colors.white} 
                    borderWidth={0} 
                    animationType={'timing'} 
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <AppButton 
                       text='Buy' 
                       onPress={()=>alert('Buy')} 
                       style={styles.button}
                    />
                    <AppButton 
                       text='Add To Cart' 
                       onPress={()=>alert('cart')} 
                       style={styles.button}
                    />
                </View>
                <WineModal 
                    modalVisible={modalVisible} 
                    onPress={() => {setModalVisible(!modalVisible)}}
                    item={item}
                />
            </Card>
    )
}

const WineItem =({item,index})=>{
    return(
        <Item item={item} index={index}/>
    )
}


const styles = StyleSheet.create({
    container:{
        // width:scaleWidth('100%'),
        padding:scaleWidth('4%'),
        backgroundColor:colors.whiteFade,
        // alignItems:'center',
        // marginHorizontal:scaleWidth('2%')
    },
    itemName:{
        fontFamily:fonts.MontserratRegular,
        fontSize:scaleWidth('5.5%'),
        color:colors.white,
    },
    fav:{
        // alignItems:'flex-end',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image:{
        // width:scaleWidth('100%'),
        height:scaleHeight('30%'),
        marginTop:scaleHeight('2%'),
        backgroundColor:colors.appColor
    },
    buttonContainer:{
        // width:scaleWidth('70%'),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        backgroundColor:colors.appColor,
        width:scaleWidth('30%'),
        height:scaleHeight('7%'),
        borderRadius:scaleWidth('1%'),
        marginHorizontal:scaleWidth('3%'),
        marginVertical:scaleWidth('1%')
    },
    barContainer:{
        width:'100%',
        alignItems:'center',
        marginVertical:scaleWidth('2%')
    },

})

export default WineItem;