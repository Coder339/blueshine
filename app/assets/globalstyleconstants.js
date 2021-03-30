
import React from 'react'
import {StyleSheet,Platform,Image} from 'react-native';
import { scaleWidth } from './globalstylefunctions';

export const colors = {
    appColor:'#0064FF',
    appIcon:'#3D2EDE',
    black:'#000',
    white:'#fff',
    whiteFade:'rgba(255,255,255,0.3)',
    gray:'gray',
    THEME:'#F51142',
    error: 'red',
    
}

export const fonts = {
    MontserratRegular: 'Montserrat-Regular',
    MontserratItalic: 'Montserrat-Italic',
    MontserratLight:'Montserrat-Light',
    MontserratLightItalic:'Montserrat-LightItalic',
    MontserratMedium:'Montserrat-Medium',
    MontserratMediumItalic:'Montserrat-MediumItalic',
    MontserratBlack: 'Montserrat-Black',
    MontserratBlackItalic: 'Montserrat-BlackItalic',
    MontserratBold: 'Montserrat-Bold',
    MontserratBoldItalic: 'Montserrat-BoldItalic',
    MontserratExtraBold: 'Montserrat-ExtraBold',
    MontserratExtraBoldItalic: 'Montserrat-ExtraBoldItalic',

    OrbitronRegular: 'Montserrat-Regular',
    OrbitronMedium:'Orbitron-Medium',
    OrbitronBlack: 'Orbitron-Black',
    OrbitronBold: 'Orbitron-Bold',
    OrbitronExtraBold: 'Orbitron-ExtraBold',

    CourgetteRegular: 'Courgette-Regular',

    FasterOneRegular: 'FasterOne-Regular',

    PressStart2PRegular: 'PressStart2P-Regular',
    
}

// import { API_URL } from 'react-native-dotenv'
export default AppConstant = {
    // API_URL: API_URL,
    token:'',

}



export const loginBackground = require('./images/twoglasses.jpeg')
export const errorImage = require('./images/imgerror.png')
export const user = require('./images/user.png')
export const lock = require('./images/lock.png')
export const eyeoff = require('./images/eye-off.png')
export const eyeon = require('./images/eye-outline.png')
export const logo_top = require('./images/logo_top.png')
export const checkcircle = require('./images/check-circle.png')
export const goback = require('./images/left-arrow.png')
export const account = require('./images/account.png')
export const privacy = require('./images/padlock.png')
export const notifications = require('./images/bell.png')
export const about = require('./images/info.png')
export const logout = require('./images/logout.png')


const iconImage = {
        width:scaleWidth('6.5%'),
        height:scaleWidth('6.5%')
}
export const activeHome = <Image source={require('../assets/images/active-bottle.png')} style={iconImage}/>
export const inactiveHome = <Image source={require('../assets/images/bottle.png')} style={iconImage}/>
export const activeSettings = <Image source={require('../assets/images/active-settings.png')} style={iconImage}/>
export const inactiveSettings = <Image source={require('../assets/images/settings.png')} style={iconImage}/>
export const activeCart = <Image source={require('../assets/images/active-cart.png')} style={iconImage}/>
export const inactiveCart = <Image source={require('../assets/images/cart.png')} style={iconImage}/>
export const activeFav = <Image source={require('../assets/images/active-favorites.png')} style={iconImage}/>
export const inactiveFav = <Image source={require('../assets/images/favorites.png')} style={iconImage}/>
export const activeIce = <Image source={require('../assets/images/ice.png')} style={iconImage}/>
export const inactiveIce = <Image source={require('../assets/images/ice.png')} style={iconImage}/>
export const activeFavItem = <Image source={require('../assets/images/activestar.png')} style={iconImage}/>
export const inactiveFavItem = <Image source={require('../assets/images/star.png')} style={iconImage}/>

export const buy = <Image source={require('../assets/images/buy.png')} style={{width:scaleWidth('8.5%'),height:scaleWidth('8.5%')}}/>
export const googleLogo = <Image source={require('../assets/images/google.png')} style={{width:scaleWidth('10.5%'),height:scaleWidth('10.5%')}}/>


export const forgotpassword = 'Forgot Password'



