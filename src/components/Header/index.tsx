import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles'

const SendIcon = require('../../assets/send.png')


export function Header() {
    return(
        <View style={styles.container}> 

            <Text style={styles.text}> Name Here </Text>
            <Image source={SendIcon} style={styles.image} />

        </View>
    )
}