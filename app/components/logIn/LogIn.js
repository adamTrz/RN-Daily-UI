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

import Input from '../controls/InputWithIcon'
import Button from '../controls/Button'
import c from '../../constants'
import s from '../../styles'
import colors from '../../colors'

class LogIn extends Component {
    static route = {
      navigationBar: {
        title: 'Sign Up Form',
        backgroundColor: 'rgba(0,0,0,0.4)',
        tintColor: '#fff',
        translucent: true,
      },
    }
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        mail: '',
        pass: ''
      }
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit() {
        const {username, mail, pass} = this.state
        if (username && mail && pass) {
            this.props.navigator.showLocalAlert('Welcome!!', {
                text: { color: '#000' },
                container: { backgroundColor: 'darkgreen' },
            })
        }
        else {
            this.props.navigator.showLocalAlert('Please fill out all fields', {
                text: { color: '#fff' },
                container: { backgroundColor: colors.cinnabar },
            })
        }
    }

    render() {
        const {username, mail, pass} = this.state
        return (
            <Image style={[s.container_img, s.center]}
                source={{uri: c.login_bg}}>
                <KeyboardAvoidingView behavior='padding'
                    style={[styles.container, s.center]}>
                    <Modal
                        username_placeholder = 'Jack-Edward Oliver'
                        username = {username}
                        onUsernameChange = {
                            text => this.setState({username:text})
                        }
                        mail_placeholder = 'mrjackolai@gmail.com'
                        mail={mail}
                        onMailChange={
                            text => this.setState({mail: text})
                        }
                        pass_placeholder = 'password'
                        pass={pass}
                        onPassChange={
                            text => this.setState({pass: text})
                        }
                        onSubmit={this._handleSubmit}
                        />
                </KeyboardAvoidingView>
            </Image>
        )
    }
}

export default LogIn;

const Modal = ({
    username, onUsernameChange, username_placeholder,
    mail, onMailChange, mail_placeholder,
    pass, onPassChange, pass_placeholder,
    onSubmit
}) => {
    return (
        <View style={styles.modal}>
            <Input onChangeText={onUsernameChange}
                color={colors.cosmiclatte}
                style={{marginTop: 10}}
                value={username} icon='user'
                placeholder={username_placeholder} />
            <Input onChangeText={onMailChange}
                color={colors.cosmiclatte}
                style={{marginTop: 10}}
                value={mail} icon='at'
                keyboardType='email-address'
                placeholder={mail_placeholder} />
            <Input onChangeText={onPassChange}
                color={colors.cosmiclatte}
                style={{marginTop: 10}}
                value={pass} icon='lock'
                placeholder={pass_placeholder}
                secureTextEntry
                />
            <Button onSubmit={onSubmit} icon='angle-right'
                text='LOG IN'
                style={{backgroundColor: colors.cinnabar}} />
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: colors.onyx,
        borderRadius: 2,
        padding: 20,
        width: 300,
        justifyContent: 'flex-start',
    },
    container: {
        flex: 1, justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
})
