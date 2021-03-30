import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import WineItem from "../components/wineitem";
import { colors, loginBackground } from '../assets/globalstyleconstants';
import ImageContainer from '../components/common/imagecontainer';
import Loader from '../components/common/loader';
import {  scaleWidth } from '../assets/globalstylefunctions';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import { SignIn, clearAction,GetProducts } from '../redux/actions/action';
// import PushNotification from "react-native-push-notification";
import * as actions from '../redux/actiontypes';
import API from '../config/api';

export default function Listing() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const [productData, setProductData] = useState(null)
    const [isVisible,setIsVisible] = useState(true)


    const seprator=()=>{
        
        return(
            <View style={{margin:scaleWidth('4%')}}></View>
        )
    }



    useEffect(async()=>{
        
        // dispatch(GetProducts())
        const resp = await API('product','GET')

        if (resp.status==200){
            // setIsVisible(false)
            dispatch({type:actions.GET_PRODUCT_SUCCESS,payload:resp})
        }
        else if(resp.body.status==400){
            // setIsVisible(false)
            dispatch({type:actions.GET_PRODUCT_FAILURE,message:resp.body.Message})
        }


    },[])

    useEffect(()=>{
        // console.log('data',data)
        console.log('statecon',state.case)

        // if (state.case === LOADER) {
        //     setIsVisible(true)
        //     console.log('loading...')
        //     // toast.show(state.message)
        // }
        if (state.case === actions.GET_PRODUCT_SUCCESS) {
            // toast.show(state.message)
            // console.log('products...',state.products.body)
            setProductData(state.products.body)
            // console.log('productsData...',productData)
            setIsVisible(false)
        }
        else if (state.case === actions.GET_PRODUCT_FAILURE) {
            setIsVisible(false)
            alert(state.message)
       
        }
        
      },[state])
    return (
        <View>
            <Loader visible={isVisible}/>
            <ImageContainer image={loginBackground}/>
            <FlatList
                data={productData}
                keyExtractor={(item)=>item._id}
                renderItem={WineItem}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={seprator}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
