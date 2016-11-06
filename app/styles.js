import React from 'react'
import {Dimensions, StyleSheet} from 'react-native'

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center', alignItems: 'center'
    },
    container_img: {
        width: width, height: height,
        resizeMode: 'cover'
    }
})

export default styles
