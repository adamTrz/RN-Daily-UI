import React from 'react'
import {
    StyleSheet,
    TouchableOpacity, Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Button = ({onSubmit, text, style, icon}) => (
    <TouchableOpacity onPress={onSubmit}
        style={[styles.button, style]}>
        <Text style={{color: 'white', flex:1, textAlign: 'center'}}>
            {text}
        </Text>
        {icon && (
            <Icon name={icon} size={20} color='white'
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
