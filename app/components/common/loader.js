import React from 'react';
import { View, Text, Modal, ActivityIndicator, StyleSheet } from 'react-native';
// import { THEME } from '../../styles/colors';
import { colors } from '../../assets/globalstyleconstants';

const Loader = props => {    
    return(
        <Modal
            transparent={true}
            visible={props.visible}
            animationType="none">
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color={colors.THEME}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#rgba(0,0,0,0.2)'
    },
})

export default Loader;