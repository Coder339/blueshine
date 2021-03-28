import React,{useEffect,useState,useRef} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';

import { scaleHeight, scaleWidth } from '../assets/globalstylefunctions';
import { colors } from '../assets/globalstyleconstants';
import Video from 'react-native-video';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';

export default function OnboardingScreen(){
    
    const navigation = useNavigation();
    const videoPlayer = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [duration, setDuration] = useState(0);
    const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
    const [screenType, setScreenType] = useState('content');

    const onProgress = (data) => {
        // Video Player will progress continue even if it ends
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
          setCurrentTime(data.currentTime);
        }
      };
      '../assets/videos/wine1'
    const onLoad = (data) => {
        setDuration(data.duration);
        setIsLoading(false);
      };
    
    const onLoadStart = (data) => setIsLoading(true);

    const onEnd = () => {
        setPlayerState(PLAYER_STATES.ENDED);
        // videoPlayer.current.seek(0);
        // setPlayerState(PLAYER_STATES.PLAYING);
    }
    


    const Dots = ({selected}) => {
        let backgroundColor;
    
        backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    
        return (
            <View 
                style={{
                    width:6,
                    height: 6,
                    marginHorizontal: 3,
                    backgroundColor
                }}
            />
        );
    }
    
    const Skip = ({...props}) => (
        <TouchableOpacity
            style={{marginHorizontal:10}}
            {...props}
        >
            <Text style={{fontSize:16}}>Skip</Text>
        </TouchableOpacity>
    );
    
    const Next = ({...props}) => (
        <TouchableOpacity
            style={{marginHorizontal:10}}
            {...props}
        >
            <Text style={{fontSize:16}}>Next</Text>
        </TouchableOpacity>
    );
    
    const Done = ({...props}) => (
        <TouchableOpacity
            style={{marginHorizontal:10}}
            {...props}
        >
            <Text style={{fontSize:16}}>Done</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* <View style={styles.video}>
                <Video
                    onEnd={onEnd}
                    onLoad={onLoad}
                    onLoadStart={onLoadStart}
                    onProgress={onProgress}
                    repeat={true}
                    ref={videoPlayer}
                    resizeMode={screenType}
                    onFullScreen={isFullScreen}
                    source={
                        require('../assets/videos/winev2.mp4')
                        }
                    style={styles.mediaPlayer}
                    volume={10}
                />
            </View> */}
            <Onboarding
                style={styles.onboard}
                SkipButtonComponent={Skip}
                NextButtonComponent={Next}
                DoneButtonComponent={Done}
                DotComponent={Dots}
                onSkip={() => navigation.replace("SignIn")}
                onDone={() => navigation.navigate("SignIn")}
                pages={[
                {
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    // image: <WineSvg1 width={scaleWidth('18%')} height={scaleHeight('20%')}/>,
                    title: 'Connect to the Moments',
                    subtitle: 'A New Way To Connect With The World',
                },
                {
                    backgroundColor: '#fdeb93',
                    // image: <WineSvg2 width={scaleWidth('18%')} height={scaleHeight('20%')}/>,
                    title: 'Share Your Feelings',
                    subtitle: 'Share Your Thoughts With Similar Kind of People',
                },
                {
                    backgroundColor: '#e9bcbe',
                    // image: <WineSvg3 width={scaleWidth('18%')} height={scaleHeight('20%')}/>,
                    title: 'Become The Bold',
                    subtitle: "Let The Spot Light Capture You",
                },
                ]}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        // alignItems: 'center', 
        // justifyContent: 'center'
    },
    mediaPlayer: {
        // elevation:-1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // backgroundColor: 'black',
        justifyContent: 'center',
    },
    video:{
    // flex:1,
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        // backgroundColor:colors.appColor,
        width:scaleWidth('100%'),
        height:'100%',
    },
    onboard:{
        // elevation:1
        backgroundColor:'#000'
    }
})



{/* <View style={styles.video}>
    <Video
        onEnd={onEnd}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        repeat={true}
        ref={videoPlayer}
        resizeMode={screenType}
        onFullScreen={isFullScreen}
        source={
            require('../assets/videos/winev2.mp4')
            }
        style={styles.mediaPlayer}
        volume={10}
    />
</View> */}