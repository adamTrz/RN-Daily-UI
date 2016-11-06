import React, {Component} from 'react';
import {
    Animated,
    StyleSheet,
    Text, TextInput,
    View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

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
        return (
            <Animated.View style={[styles.inputWrapper, {
                    opacity: this.props.value ? 1 : this.state.inputOpacity
                }]}>
                <Icon name={this.props.icon} size={15}
                    color = {colors.cosmiclatte} />
                <TextInput {...this.props}
                    ref={textInput => this.textInput = textInput}
                    underlineColorAndroid='transparent'
                    blurOnSubmit={true}
                    onFocus={this._toggleFocused}
                    onBlur={this._toggleFocused}
                    autoCorrect={false} style={styles.textInput}
                    placeholderTextColor={colors.cosmiclatte}
                    onSubmitEditing={this._blur}
                    />
            </Animated.View>
        )
    }
}

export default Input

const styles = StyleSheet.create({
    inputWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: colors.cosmiclatte,
        flexDirection: 'row', alignItems: 'center',
        marginTop: 10,
    },
    textInput: {
        flex: 1,
        color: colors.cosmiclatte,
        fontWeight: '100',
        padding: 0, paddingLeft: 10,
    },
})
