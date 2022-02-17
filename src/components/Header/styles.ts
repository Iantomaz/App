
import { StyleSheet } from 'react-native' 
import { COLORS } from '../../theme'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.PURPLE,
        width: '100%',
        height: 45,

        alignContent: 'space-between',
        paddingLeft: 10,       
        padding: 12,
        

    },

    text: {
        height: '100%',
        color: COLORS.WHITE,
        
    },

    image: {
        width: 20,
        height: 20,
        marginLeft: 290
        
    }
})