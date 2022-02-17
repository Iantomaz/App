
import { StyleSheet } from 'react-native' 
import { COLORS } from '../../theme'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.PURPLE,
        width: '100%',
        height: 45,

        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 8,
        padding: 16,
        marginTop: '140%'
        

    },

    imgT: {
        width: 20,
        height: 20,
        marginLeft: '5%'
    },

    imgF: {
        width: 20,
        height: 20,
        marginLeft: '0%'
    },

    image: {
        width: 20,
        height: 20,
        marginLeft: '15%'
        
    },

    post: {
        width: 30,
        height: 30,
        margin: '16.5%',
        
    }
})