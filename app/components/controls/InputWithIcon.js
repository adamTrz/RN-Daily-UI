import React, {Component} from 'react';
import {
    Animated,
    StyleSheet,
    Text, TextInput,
    View,
} from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
import { FontAwesome } from '@exponent/vector-icons';

import c from '../../constants'
import s from '../../styles'
import colors from '../../colors'


class Input extends Component {
    constructor(props) {
      super(props);
      this.state = {
          focused: false,
          inputOpacity: new Animated.Value(0.5)
      }
      this._blur = this._blur.bind(this);
      this._toggleFocused = this._toggleFocused.bind(this);
    }
    _blur() {
        this.textInput.blur()
    }
    _toggleFocused() {
        const {focused} = this.state
        const animTo = focused ? 0.5  :1
        Animated.timing(this.state.inputOpacity, {
            toValue: animTo, duration: 500
        }).start(() => {
            this.setState({focused: !focused})
        })
    }
    render() {
        const {color, icon, style, iconRight, value} = this.props
        return (
            <Animated.View style={[styles.inputWrapper, {
                    borderBottomColor: color,
                    opacity: value ? 1 : this.state.inputOpacity
                }, style]}>
                {!iconRight && (
                    <FontAwesome name={icon} size={15}
                        color = {color} />
                )}
                <TextInput {...this.props}
                    ref={textInput => this.textInput = textInput}
                    underlineColorAndroid='transparent'
                    blurOnSubmit={true}
                    onFocus={this._toggleFocused}
                    onBlur={this._toggleFocused}
                    autoCorrect={false}
                    style={[styles.textInput, {color: color},
                        iconRight ? {paddingRight: 10} : {paddingLeft: 10}
                    ]}
                    placeholderTextColor={color}
                    onSubmitEditing={this._blur}
                    />
                {iconRight && (
                    <FontAwesome name={this.props.icon} size={15}
                        color = {color} />
                )}
            </Animated.View>
        )
    }
}

export default Input

const styles = StyleSheet.create({
    inputWrapper: {
        borderBottomWidth: 1,
        flexDirection: 'row', alignItems: 'center',
    },
    textInput: {
        flex: 1,
        fontWeight: '100',
        padding: 0,
    },
})
