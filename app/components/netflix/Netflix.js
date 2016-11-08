import React, {Component} from 'react';
import {
    Animated,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    Text, TouchableOpacity,
    View,
} from 'react-native'

import c from '../../constants'
import s from '../../styles'
import colors from '../../colors'

class Netflix extends React.Component {
    static route = {
      navigationBar: {
        title: 'Landing Page',
        backgroundColor: 'rgba(0,0,0,0.4)',
        tintColor: '#fff',
        translucent: true,
      },
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'yellow',
            justifyContent: 'center', alignItems: 'center'}}>
                <Text>hakuna matata
                </Text>
            </View>
        );
    }

}

export default Netflix;
