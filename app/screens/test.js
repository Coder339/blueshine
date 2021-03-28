import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Logout from './logout'
import { scaleWidth } from '../assets/globalstylefunctions'
import AppConstant from '../assets/globalstyleconstants';

export default function Test() {
    const [loading,setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(()=>{

        let info = {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${AppConstant.token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        }
        console.log('info',info)
        fetch('https://winedrum.herokuapp.com/api/product',info)
        .then(res => res.text())
        .then(res => {
            // console.log('RESPONSE',res)
            // setData(res)
            setLoading(false)
        })
        .catch((error) => console.error(error))

        // let result = await response.json()
        // console.log('result',response)
        
    },[])

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
            <Logout/>
        </View>
    )
}

const styles = StyleSheet.create({})
