import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { Bar } from 'react-native-progress';
import { scaleHeight, scaleWidth } from '../assets/globalstylefunctions';
import { activeFavItem, colors, fonts, buy, inactiveFavItem } from '../assets/globalstyleconstants'

const Item = ({item,index}) => {
    
    const [isFav, setIsFav] = useState(false);
    const img = 'https://images.pexels.com/photos/3461205/pexels-photo-3461205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    return (
        <View style={styles.container}>
            {index==0 &&
                <View style={styles.header}>
                    <Text style={styles.favHeader}>Favourites</Text>
                </View>
            }
            {item.isFav &&

                <View style={styles.favItem}>
                    <Image source={{uri:item.image}} style={styles.image}/>
                    <View style={styles.itemContainer}>
                        <Text style={styles.title}>{item.title}</Text>
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
                        >
                            {activeFavItem}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>alert('add to cart')}
                        >
                            {buy}
                        </TouchableOpacity>
                    </View>
                </View>
                
            }
        </View>
    )
}

const FavItem =({item,index})=>{
    return(
        <Item item={item} index={index}/>
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
        width:scaleWidth('9%'),
        height:scaleWidth('9%'),
        borderRadius:scaleWidth('4.5%'),
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center'
    },
})

export default FavItem
