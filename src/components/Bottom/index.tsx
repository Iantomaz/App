import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles'

const HomeIcon = require('../../assets/home.png')
const SearchIcon = require('../../assets/search.png')
const PIcon = require('../../assets/plicon.png')
const PostIcon = require('../../assets/post.png')
const FireIcon = require('../../assets/fire.png')


export function Bottom() {
    return(
        <View style={styles.container}> 

            <Image source={HomeIcon} style={styles.imgT} />
            <Image source={SearchIcon} style={styles.image} />

            <Image source={PostIcon} style={styles.post} />

            <Image source={FireIcon} style={styles.imgF} />
            <Image source={PIcon} style={styles.image} />

        </View>
    )
}