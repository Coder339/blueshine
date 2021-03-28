import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,Alert } from 'react-native'
import ScrollContainer from '../components/common/scrollcontainer';
import { TextInput } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AppConstant, { googleLogo,colors, loginBackground,user,lock,eyeoff,eyeon,logo_global,fonts,checkcircle } from '../assets/globalstyleconstants'
import { scaleHeight, scaleWidth } from '../assets/globalstylefunctions';
import * as Animatable from 'react-native-animatable';
import {useNetInfo} from "@react-native-community/netinfo";
import AppButton from '../components/appbutton';
import {setData} from '../config/storage';
import {API_URL} from '../config/baseurl';
import Loader from '../components/common/loader';
import * as actions from '../redux/actiontypes';

export default function Login() {


    const netInfo = useNetInfo();
    const [loading,setLoading] = useState(false)

    const state = useSelector(state => state);
    const dispatch = useDispatch()

    const [data,setUserData] = useState({
        username:'',
        password:'',
        isHidden:false,
        isValidUser:true,
        isValidPassword:true,
        isVisible:false,
        check_textInputChange:false,
    })
    
    const navigation = useNavigation();

    
    const usernameHandler=(text)=>{
        // setUserData({...data,username:text})
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
        if( re.test(text.trim())) {
            setUserData({
                ...data,
                username: text.trim(),
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setUserData({
                ...data,
                username: text.trim(),
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }
    const passwordHandler=(text)=>{
        // setUserData({...data,password:text})
        if( text.trim().length >= 6 ) {
            setUserData({
                ...data,
                password: text.trim(),
                isValidPassword: true
            });
        } else {
            setUserData({
                ...data,
                password: text.trim(),
                isValidPassword: false
            });
        }
    }

    const HiddenHandler=()=>{
        setUserData({...data,isHidden:!data.isHidden})
    }



    const Login = async () => {

            
        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }
            
        setLoading(true)
        
        let info = {
            method: 'POST',
            headers: {
            //   'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.username,
                password: data.password,
            })
        }

        const resp = await fetch('http://winedrum.herokuapp.com/api/user/login',info)
                            .then(res => res.json()
                            .then(res => {
                                var data={
                                    status:200,
                                    body: res
                                }
                                setLoading(false)
                                return data
                                // setData('userToken',JSON.stringify(res.access_token))
                                // AppConstant.token = res.access_token;
                                // navigation.replace('App')
                            }))
                            .catch((error) => {
                                console.error(error)
                                setLoading(false)
                                return { body: { status: 400, Message: 'Sorry, something went wrong, please try again in sometime.' } }
                            })

        console.log('resp',resp)
        // dispatch(signIn(resp))
        if (resp.status==200){
            dispatch({type:actions.LOGIN_SUCCESS,payload:resp})
        }
        else{
            dispatch({type:actions.LOGIN_FAILURE,message:resp.body.Message})
        }

        // {netInfo.isConnected ?

        //     dispatch(signIn(formdata))
        //     :
        //     Alert.alert('Network issue :(', 'Please Check Your Network !', [
        //         {text: 'Okay'}
        //     ]);
        // }
        

    }

    useEffect(() => {
        if (state.case === actions.LOGIN_SUCCESS){
            console.log('RESPONSE',state)
            console.log('token',state.userData.body.access_token)
            setData('userToken',JSON.stringify(state.userData.body.access_token))
            AppConstant.token = state.userData.body.access_token;
            navigation.replace('App')
            setLoading(false)
        }
        else if (state.case === actions.LOGIN_FAILURE) {
            Alert.alert('ATTENTION !', state.Message, [
                {text: 'Okay'}
            ]);
            setLoading(false)
            // toast.show(state.message)
        }
    }, [state])

    return (
        
        <ScrollContainer style={styles.container}>
            <Loader visible={loading}/>
            <Text style={styles.logo}>B L U E S H I N E</Text>
            <View style={styles.loginContainer}>
                
                <Text style={styles.label}>Email</Text>
                <View style={{...styles.user,...styles.inputBorder}}>
                    <TextInput
                    placeholder='john wick'
                    underlineColorAndroid='transparent'
                    placeholderTextColor={colors.white}
                    onChangeText={usernameHandler}
                    value={data.username}
                    style={{...styles.input,width:'90%'}}
                    />
                    <Animatable.View 
                        animation='flash' 
                        duration={500}
                        >
                        <Image
                            source={data.check_textInputChange && checkcircle} 
                            style={styles.checkCircle}
                        />
                    </Animatable.View>
                </View>
                {!data.isValidUser &&
                    <Animatable.View 
                        animation='fadeInLeft' 
                        duration={500}
                        >
                        <Text style={styles.errorMsg}>Provided email is invalid</Text>
                    </Animatable.View>
                }
                <View style={{marginTop:scaleWidth('2%')}}>
                    <Text style={styles.label}>Password</Text>
                    <View style={{...styles.user,...styles.inputBorder}}>
                        <TextInput
                        placeholder='**********'
                        underlineColorAndroid='transparent'
                        placeholderTextColor={colors.white}
                        onChangeText={passwordHandler}
                        value={data.password}
                        style={{...styles.input,width:'90%'}}
                        secureTextEntry={data.isHidden}
                        />
                        <TouchableOpacity 
                            style={{}} 
                            onPress={HiddenHandler}>
                            <Image
                            source={data.isHidden ? eyeoff : eyeon} 
                            style={styles.eye}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.errorContainer}>
                    {!data.isValidPassword &&
                        <Animatable.View 
                            animation='fadeInLeft' 
                            duration={500}
                            >
                            <Text style={styles.errorMsg}>Provided password is invalid</Text>
                        </Animatable.View>
                    }
                    <Text 
                        style={styles.forgot} 
                        onPress={()=>alert('forgot password')}>Forgot Password ? 
                    </Text>
                </View>
            </View>
            <AppButton 
                text='LOGIN' 
                style={styles.loginButton} 
                textStyle={{color:colors.white}}
                onPress={Login}
            />
            
        </ScrollContainer>
        
    )
}

const styles = StyleSheet.create({
    container:{
        // flexGrow:1,
        backgroundColor:colors.white,
        alignItems:'center',
        height:scaleHeight('100%')
    },
    logo:{
        fontFamily:fonts.FasterOneRegular,
        marginVertical:scaleHeight('5%'),
        color:colors.appColor,
        fontSize:scaleWidth('5%')
    },
    loginContainer:{
        // flex:1,
        // marginTop:scaleHeight('5%'),
        // marginHorizontal:moderateScale(12)
    },
    input:{
        // backgroundColor:'rgba(255,255,255,0.3)',
        color:colors.black,
        fontFamily:fonts.MontserratRegular,
        height:scaleHeight('7%')
    },
    forgot:{
        color:colors.black,
        textAlign:'right',
        marginTop:scaleHeight('1%'),
        fontFamily:fonts.MontserratRegular
    },
    label:{
        color:colors.black,
        fontSize:scaleWidth('4%'),
        fontFamily:fonts.MontserratBold,
    },
    checkCircle:{
        width:scaleWidth('4.5%'),
        height:scaleWidth('4.5%')
    },
    user:{
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:colors.whiteFade,  
    },
    inputBorder:{
        borderWidth:1,
        borderColor:colors.black
    },
    loginButton:{
        // flex:1,
        width:scaleWidth('80%'),
        height:scaleHeight('8%'),
        // borderRadius:moderateScale(5),
        backgroundColor:colors.black,  
        marginTop:scaleHeight('32%'),
    },
    register:{
        color:colors.wine1,
        fontWeight:'bold',
    },
    errorMsg:{
        fontFamily:fonts.MontserratRegular,
        color:colors.error,
        fontSize:scaleWidth('3%'),
    },
    errorContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    googleTextContainer:{
        alignItems:'center'
    },
    googleText:{
        marginVertical:scaleHeight('1%'),
        color:colors.white,
        fontFamily:fonts.MontserratBoldItalic,
    }
})
