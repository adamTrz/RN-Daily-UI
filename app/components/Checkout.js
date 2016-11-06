import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'

class About extends Component {
    static route = {
      navigationBar: {
        title: 'Checkout',
        backgroundColor: '#333',
        tintColor: '#fff',
      },
  }
    render() {
        return (
            <View style={{
                flex:1, backgroundColor: 'green',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Text> Checkout </Text>
            </View>

        );
    }

}

export default About;
