import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native'
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation'
import { Ionicons } from '@exponent/vector-icons';

import { Router } from '../App'
import colors from '../colors'

const DRAWER_WIDTH = 300

export default class Drawer extends Component {

    render() {
        return (
            <DrawerNavigation
                drawerPosition="right"
                renderHeader={this._renderHeader}
                drawerWidth={DRAWER_WIDTH}
                initialItem="checkOut">
                <DrawerNavigationItem
                    id="home"
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Log In', isSelected)}
                    renderIcon={
                        isSelected => this._renderIcon('md-log-in', isSelected)
                    }>
                    <StackNavigation
                        id="root"
                        initialRoute={Router.getRoute('home')}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id="checkOut"
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Checkout', isSelected)}
                    renderIcon={
                        isSelected => this._renderIcon('md-cart', isSelected)
                    }>
                    <StackNavigation
                        id="about"
                        initialRoute={Router.getRoute('checkout')}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id="netFlix"
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Landing Page', isSelected)}
                    renderIcon={
                        isSelected => this._renderIcon('md-film', isSelected)
                    }>
                    <StackNavigation
                        id="netflix"
                        initialRoute={Router.getRoute('netflix')}
                    />
                </DrawerNavigationItem>
            </DrawerNavigation>
        )
    }
    _renderHeader = () => {
        return (
            <Image source={require('../assets/banner.png')}
                style={styles.header} />
        )
    }
    _renderTitle = (text: string, isSelected: bool) => {
        return (
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.buttonTitleText, isSelected ? styles.selectedText : null]}>
                    {text}
                </Text>
            </View>
        )
    }
    _renderIcon = (name: string, isSelected: bool) => {
        let extraStyle = {marginTop: 2};
        if (name === 'md-alert') extraStyle = {...extraStyle, marginLeft: -3}
        return (
            <Ionicons
                style={[styles.icon, isSelected ? styles.selectedText : null, extraStyle]}
                name={name}
                size={24}
            />
        )
    }
}

const styles = StyleSheet.create({
    header: {
        resizeMode: 'contain',
        width: DRAWER_WIDTH,
    },
    buttonTitleText: {
        color: '#999',
        fontWeight: 'bold',
    },
    selectedText: {
        color: colors.yankeesblue,
    },
    icon: {
        color: '#999',
        marginHorizontal: 10,
    },
    selectedItemStyle: {
        backgroundColor: colors.cosmiclatte,
    },
})
