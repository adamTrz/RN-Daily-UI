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

import { Router } from '../App'

export default class Drawer extends Component {

    render() {
        return (
            <DrawerNavigation
                drawerPosition="right"
                renderHeader={this._renderHeader}
                drawerWidth={300}
                initialItem="home">
                <DrawerNavigationItem
                    id="home"
                    renderTitle={isSelected => this._renderTitle('Log In', isSelected)}
                    >
                    <StackNavigation
                        id="root"
                        initialRoute={Router.getRoute('home')}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id="another"
                    renderTitle={isSelected => this._renderTitle('Checkout', isSelected)}
                    >
                    <StackNavigation
                        id="about"
                        initialRoute={Router.getRoute('checkout')}
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
})
