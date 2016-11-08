import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ScrollView, Slider, StyleSheet,
    Text, TouchableHighlight,
    View,
} from 'react-native'
import moment from 'moment'

import c from '../../constants'
import colors from '../../colors'

const Preview = (props) => {
    return (
        <View style={styles.headerWrapper}>
            <WorkspaceInformation {...props} />
            <WorkspaceMeta {...props} />
        </View>
    )
}

const WorkspaceInformation = ({name, dailyPrice, duration}) => (
    <View>
        <Text style={styles.textWorkspaceName}>
            {name}
        </Text>
        <View
            style={{flexDirection: 'row', marginVertical: 10, alignItems: 'flex-end'}}>
            <Text style={styles.textWorkspaceInfoPrice}>
                {`${dailyPrice} GBP `}
            </Text>
            <Text style={styles.textWorkspaceInfoDays}>
                {`/ 1 day`}
            </Text>
        </View>
    </View>
)

const WorkspaceMeta = ({
    peopleCount = 1, startDate, endDate,
    handleStartDateChange, handleEndDateChange}) => {
    const people = peopleCount > 1 ? 'people' : 'person'
    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textWorkspaceMetaNormal}>
                    Entire office for
                </Text>
                <Text style={styles.textWorkspaceMetaBold}>
                    {` ${peopleCount} ${people}`}
                </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={styles.textWorkspaceMetaNormal}>
                    {`From: `}
                </Text>
                <TouchableHighlight onPress={handleStartDateChange}>
                    <Text style={styles.textWorkspaceMetaDate}>
                        {moment(startDate).format('ddd, MMM DD, YYYY')}
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textWorkspaceMetaNormal}>
                    {`To:      `}
                </Text>
                <TouchableHighlight onPress={handleEndDateChange}>
                    <Text style={styles.textWorkspaceMetaDate}>
                        {moment(endDate).format('ddd, MMM DD, YYYY')}
                    </Text>
                </TouchableHighlight>
            </View>

        </View>
    )
}
export default Preview

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    headerWrapper: {
        borderRadius: 4,
        width: width*3/4,
        backgroundColor: 'rgba(23, 24, 59, 0.4)',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 20,
        paddingVertical: 20,
        marginVertical: 20,
        // marginTop: 80,
    },
    textWorkspaceName: {
        color: 'white',
        fontFamily: 'serif',
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 24
    },
    textWorkspaceInfoPrice: {
        color: 'white',
        fontFamily: 'sans-serif-thin',
        fontSize: 20,
    },
    textWorkspaceInfoDays: {
        color: 'white',
        fontFamily: 'sans-serif-light',
    },
    textWorkspaceMetaNormal: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'sans-serif-light'
    },
    textWorkspaceMetaBold: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'sans-serif-medium'
    },
    textWorkspaceMetaDate: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'sans-serif-medium',
        textDecorationLine: 'underline'
    },

})
