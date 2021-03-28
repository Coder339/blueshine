import React,{useState,useEffect} from 'react'
import { StyleSheet,FlatList,View,Text} from 'react-native'
import FavItem from '../components/favitem'
import { useSelector, useDispatch } from 'react-redux';
// import { clearAction,GetProducts } from '../redux/actions/action';
import  * as actions from '../redux/actiontypes';
import { colors } from '../assets/globalstyleconstants';
import { scaleHeight } from '../assets/globalstylefunctions';

export default function Favourites() {
    // const state = useSelector(state => state).reducer;
    const dispatch = useDispatch();

    const [productData, setProductData] = useState(null)
    
    const seprator=()=>{
        
        return(
            <View style={styles.seprator}></View>
        )
    }

    // useEffect(()=>{
    //     dispatch(GetProducts())
    // },[])

    // useEffect(()=>{
    //     console.log('data',data)
    //     console.log('statecon',state.case)
    //     if (state.case === LOADER) {
    //         // setIsVisible(true)
    //         console.log('loading...')
    //         // toast.show(state.message)
    //     }
    //     if (state.case === actions.GET_PRODUCTS_SUCCESS) {
    //         // toast.show(state.message)
    //         console.log('products...',state.products.body)
    //         setProductData(state.products.body)
    //         console.log('productsData...',productData)
    //     }
    //     else if (state.case === actions.GET_PRODUCTS_FAILURE) {
    //         dispatch(clearAction())
       
    //     }
        
    //   },[state])

    return (
        <View>
            <Text>hjkhkj</Text>
            {/* <FlatList
                data={productData}
                keyExtractor={(item)=>item.id}
                renderItem={FavItem}
                showsVerticalScrollIndicator={false}
                // ItemSeparatorComponent={seprator}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    seprator:{
        margin:scaleHeight('0.5%'),
        backgroundColor:colors.white,
    },
    
})
