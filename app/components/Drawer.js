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
<<<<<<< HEAD
import { Ionicons } from '@exponent/vector-icons';

import { Router } from '../App'
import colors from '../colors'

const DRAWER_WIDTH = 300
=======

import { Router } from '../App'
>>>>>>> 1065eae48ff06cb70a187260df8b04b2e79cd975

export default class Drawer extends Component {

    render() {
        return (
            <DrawerNavigation
                drawerPosition="right"
                renderHeader={this._renderHeader}
<<<<<<< HEAD
                drawerWidth={DRAWER_WIDTH}
                initialItem="checkOut">
                <DrawerNavigationItem
                    id="home"
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Log In', isSelected)}
                    renderIcon={
                        isSelected => this._renderIcon('md-log-in', isSelected)
                    }>
=======
                drawerWidth={300}
                initialItem="home">
                <DrawerNavigationItem
                    id="home"
                    renderTitle={isSelected => this._renderTitle('Log In', isSelected)}
                    >
>>>>>>> 1065eae48ff06cb70a187260df8b04b2e79cd975
                    <StackNavigation
                        id="root"
                        initialRoute={Router.getRoute('home')}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
<<<<<<< HEAD
                    id="checkOut"
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Checkout', isSelected)}
                    renderIcon={
                        isSelected => this._renderIcon('md-cart', isSelected)
                    }>
=======
                    id="another"
                    renderTitle={isSelected => this._renderTitle('Checkout', isSelected)}
                    >
>>>>>>> 1065eae48ff06cb70a187260df8b04b2e79cd975
                    <StackNavigation
                        id="about"
                        initialRoute={Router.getRoute('checkout')}
                    />
                </DrawerNavigationItem>
<<<<<<< HEAD
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
=======
>>>>>>> 1065eae48ff06cb70a187260df8b04b2e79cd975
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
<<<<<<< HEAD
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
=======
            <Text style={[styles.buttonTitleText, isSelected ? styles.selectedText : null]}>
                {text}
            </Text>
        )
    }

}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 180,
    width: null,
    resizeMode: 'contain',
  },
  buttonTitleText: {
    color: '#222',
    fontWeight: 'bold',
  },
  selectedText: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  // selectedItemStyle: {
  //   backgroundColor: "#E8E8E8",
  // },
>>>>>>> 1065eae48ff06cb70a187260df8b04b2e79cd975
})
