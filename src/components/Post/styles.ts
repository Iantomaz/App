
import { StyleSheet } from 'react-native' 
import { COLORS } from '../../theme'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.ORANGE,
        width: '100%',
        height: 20,

        flex: 1,

        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 8,
        padding: 16,
        marginTop: '140%'
        

    },

})