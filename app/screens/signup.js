import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image,Alert } from 'react-native'
import ScrollContainer from '../components/common/scrollcontainer';
import ImageContainer from '../components/common/imagecontainer';
import { TextInput } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import AppConstant from '../assets/globalstyleconstants'
import { scaleHeight, scaleWidth } from '../assets/globalstylefunctions';
// import validate from '../config/validations';
import {colors, loginBackground,user,lock,eyeoff,eyeon,logo_global,fonts,checkcircle} from '../assets/globalstyleconstants';
import AppButton from '../components/appbutton';
import ErrorMsg from '../components/common/errormsg';
import * as Animatable from 'react-native-animatable';
import {useNetInfo} from "@react-native-community/netinfo";

export default function Signup() {
    // const state = useSelector(state => state).reducer;

    const netInfo = useNetInfo();

    const [data,setSignUpData] = useState({
        fullName:'',
        email:'',
        password:'',
        confirmPassword:'',
        // isHidden:false,
        isValidName:true,
        isValidEmail:true,
        isValidPassword:true,
        isVisible:false,
        // check_textInputChange:Array(2).fill(false,false)
    }) 
    // const checkArray = Array(2).fill(false,false)
    const [check_textInputChange,setCheck_textInputChange] = useState([false,false])
    const [isHidden,setIsHidden] = useState([true,true])
    const [isValidPassword,setIsValidPassword] = useState([true,true])
    
    const navigation = useNavigation();

    const dispatch = useDispatch();


    const fullNameHandler=(text)=>{
        const re = /^[A-Za-z\s]+$/
        // setSignUpData({...data,fullName:text})
        if( re.test(text)) {
            setSignUpData({
                ...data,
                fullName: text,
                isValidName: true
            });
            const newArr = [...check_textInputChange]
            newArr[0]=true
            setCheck_textInputChange(newArr)
        } else {
            setSignUpData({
                ...data,
                fullName: text,
                isValidName: false
            });
            const newArr = [...check_textInputChange]
            newArr[0] = false
            setCheck_textInputChange(newArr)
        }
    }
    const emailHandler=(text)=>{
        // setSignUpData({...data,email:text})
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
        if( re.test(text.trim())) {
            setSignUpData({
                ...data,
                email: text.trim(),
                // check_textInputChange: true,
                isValidEmail: true
            });
            const newArr = [...check_textInputChange]
            newArr[1]=true
            console.log('newarr',newArr)
            setCheck_textInputChange(newArr)
            // console.log('checkkk',check_textInputChange) // problem with console o/p
        } else {
            setSignUpData({
                ...data,
                email: text.trim(),
                // check_textInputChange: false,
                isValidEmail: false
            });
            const newArr = [...check_textInputChange]
            newArr[1] = false
            setCheck_textInputChange(newArr)
        }
    }
    const passwordHandler=(text)=>{
        // setSignUpData({...data,password:text})
        if( text.trim().length >= 6 ) {
            setSignUpData({
                ...data,
                password: text.trim(),
            });
            const newArr = [...isValidPassword]
            newArr[0] = true
            setIsValidPassword(newArr)
        } else {
            setSignUpData({
                ...data,
                password: text.trim(),
            });
            const newArr = [...isValidPassword]
            newArr[0] = false
            setIsValidPassword(newArr)
        }
    }
    const confirmPasswordHandler=(text)=>{
        // setSignUpData({...data,confirmPassword:text})
        if( text.trim().length >= 6 ) {
            setSignUpData({
                ...data,
                confirmPassword: text.trim(),
            });
            const newArr = [...isValidPassword]
            newArr[1] = true
            setIsValidPassword(newArr)
        } else {
            setSignUpData({
                ...data,
                confirmPassword: text.trim(),
            });
            const newArr = [...isValidPassword]
            newArr[1] = false
            setIsValidPassword(newArr)
        }
    }

    const IsHiddenHandler=(index)=>{

        // setSignUpData({...data,isHidden:!data.isHidden})
        const newArr = [...isHidden]
        newArr[index] = !isHidden[index]
        setIsHidden(newArr)
    }

    const Register=()=>{

        var formdata = {
            email: data.email,
            password: data.password,
            // device_type: Platform.OS === 'ios' ? 1 : 2,
            // device_token: token,
            // device_info: Platform.OS.toUpperCase() + ' Device'
        }

        if ( data.fullName.length == 0 || data.email.length == 0 || data.password.length == 0 || data.confirmPassword.length == 0 ) {
            Alert.alert('Wrong Input!', 'Name/Email/Password/confirmPassword fields cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if(!(data.password===data.confirmPassword)){
            Alert.alert('Password Issue !', 'Password do not match !', [
                {text: 'Okay'}
            ]);
            return
        }

        {netInfo.isConnected ?

            // dispatch(SignUp(formdata))
            alert('signup successfully')
            :
            Alert.alert('Network issue :(', 'Please Check Your Network !', [
                {text: 'Okay'}
            ]);
        }
    }

    return (
        <ScrollContainer style={styles.container}>
            <ImageContainer image={loginBackground}/>
            <Text style={styles.logo}>B L U E S H I N E</Text>
            <View style={styles.signupContainer}>
                <View>
                    <Text style={styles.label}>Full Name</Text>
                    <View style={{...styles.user,...styles.inputBorder}}>
                        <TextInput
                        placeholder='john wick'
                        underlineColorAndroid='transparent'
                        placeholderTextColor={colors.white}
                        onChangeText={fullNameHandler}
                        value={data.fullName}
                        style={{...styles.input,width:'90%'}}
                        />
                        <Animatable.View 
                                animation='flash' 
                                duration={500}
                            >
                                <Image
                                    source={check_textInputChange[0] && checkcircle} 
                                    style={styles.checkCircle}
                                />
                        </Animatable.View>
                    </View>
                </View>
                {!data.isValidName &&
                    <ErrorMsg 
                      message="Provided Name is not valid" 
                      textStyle={styles.errorMsg}/>
                }
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <View style={{...styles.user,...styles.inputBorder}}>
                        <TextInput
                            placeholder='johnwick@break.com'
                            underlineColorAndroid='transparent'
                            placeholderTextColor={colors.white}
                            onChangeText={emailHandler}
                            value={data.email}
                            style={{...styles.input,width:'90%'}}
                        />
                        <Animatable.View 
                            animation='flash' 
                            duration={500}
                        >
                            <Image
                                source={check_textInputChange[1] && checkcircle} 
                                style={styles.checkCircle}
                            />
                        </Animatable.View>
                    </View>
                </View>
                {!data.isValidEmail &&
                    <ErrorMsg 
                      message="Provided email is invalid"
                      textStyle={styles.errorMsg}
                      />
                }
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <View style={{...styles.user,...styles.inputBorder}}>
                        <TextInput
                        placeholder='**********'
                        underlineColorAndroid='transparent'
                        placeholderTextColor={colors.white}
                        onChangeText={passwordHandler}
                        value={data.password}
                        style={{...styles.input,width:'90%'}}
                        secureTextEntry={isHidden[0]}
                        />
                        <TouchableOpacity 
                            style={{}} 
                            onPress={()=>IsHiddenHandler(0)}>
                            <Image
                              source={isHidden[0] ? eyeoff : eyeon} 
                              style={styles.eye}/>
                        </TouchableOpacity>
                    </View>
                </View>
                {!isValidPassword[0] &&
                    <ErrorMsg 
                      message='Provided Password is invalid'
                      textStyle={styles.errorMsg}
                      />
                }
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <View style={{...styles.user,...styles.inputBorder}}>
                        <TextInput
                        placeholder='**********'
                        underlineColorAndroid='transparent'
                        placeholderTextColor={colors.white}
                        onChangeText={confirmPasswordHandler}
                        value={data.confirmPassword}
                        style={{...styles.input,width:'90%'}}
                        secureTextEntry={isHidden[1]}
                        />
                        <TouchableOpacity 
                            style={{}} 
                            onPress={()=>IsHiddenHandler(1)}>
                            <Image
                              source={isHidden[1] ? eyeoff : eyeon} 
                              style={styles.eye}/>
                        </TouchableOpacity>
                    </View>
                </View>
                {!isValidPassword[1] &&
                    <ErrorMsg 
                      message='Provided Password is invalid'
                      textStyle={styles.errorMsg}
                      />
                }
            </View>
            <AppButton 
              text='SIGNUP' 
              style={styles.signupButton} 
              textStyle={{color:colors.appColor}}
              onPress={Register}
            />
            <View style={{flexDirection:'row'}}>
                <Text style={{color:colors.white}}>Already have an account ? </Text>
                <Text style={styles.register} onPress={()=>navigation.navigate('SignIn')}>Login</Text>
            </View>
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
        color:colors.white,
        fontSize:scaleWidth('5%')
    },
    signupContainer:{
        height:scaleHeight('50%')
    },
    input:{
        // backgroundColor:'rgba(255,255,255,0.3)',
        color:colors.white,
        fontFamily:fonts.MontserratRegular,
        height:scaleHeight('7%')
    },
    forgot:{
        color:colors.white,
        textAlign:'right',
        marginTop:scaleHeight('1%'),
        fontFamily:fonts.MontserratRegular
    },
    label:{
        color:colors.white,
        fontSize:scaleWidth('4%'),
        fontFamily:fonts.MontserratBold,
        // fontWeight:'bold'
    },
    user:{
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:colors.whiteFade,  
    },
    inputBorder:{
        borderWidth:1,
        borderColor:colors.whiteFade
    },
    checkCircle:{
        width:scaleWidth('4.5%'),
        height:scaleWidth('4.5%')
    },
    signupButton:{
        // flex:1,
        width:scaleWidth('80%'),
        height:scaleHeight('8%'),
        // borderRadius:moderateScale(5),
        backgroundColor:colors.whiteFade,  
        marginTop:scaleHeight('15%'),
    },
    register:{
        color:colors.appColor,
        fontWeight:'bold'
    },
    inputContainer:{
        marginTop:scaleHeight('0.4%')
    },
    errorMsg:{
        color:colors.error,
    }
})
