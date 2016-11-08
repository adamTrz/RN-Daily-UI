import React from 'react'
import {
    StyleSheet,
    TouchableOpacity, Text
} from 'react-native'
<<<<<<< HEAD
// import Icon from 'react-native-vector-icons/FontAwesome'
import { FontAwesome } from '@exponent/vector-icons';

const Button = ({onSubmit, text, textStyle, style, icon}) => (
    <TouchableOpacity onPress={onSubmit}
        style={[styles.button, style]}>
        <Text style={[{color: 'white', flex:1, textAlign: 'center'},
            icon ? {marginLeft: 30} : {}, textStyle]}>
            {text}
        </Text>
        {icon && (
            <FontAwesome name={icon} size={20} color='white'
=======
import Icon from 'react-native-vector-icons/FontAwesome'

const Button = ({onSubmit, text, style, icon}) => (
    <TouchableOpacity onPress={onSubmit}
        style={[styles.button, style]}>
        <Text style={{color: 'white', flex:1, textAlign: 'center'}}>
            {text}
        </Text>
        {icon && (
            <Icon name={icon} size={20} color='white'
>>>>>>> 1065eae48ff06cb70a187260df8b04b2e79cd975
                style={{paddingHorizontal: 10}}/>
        )}
    </TouchableOpacity>
)

export default Button

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 20,
        borderRadius: 3,
    },
})
