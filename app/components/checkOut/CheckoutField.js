import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ScrollView, Slider, StyleSheet,
    Text,
    View,
} from 'react-native'
import { FontAwesome } from '@exponent/vector-icons';

import Input from '../controls/InputWithIcon'
import PickerWithOptions from '../controls/PickerWithOptions'
import c from '../../constants'
import colors from '../../colors'

const CheckoutField = ({children}) => {
    return (
        <View style={styles.checkoutField}>
            {children}
        </View>
    )
}

const OrderSummary = ({
    price, dailyPrice,
    tax, total, discount, days, subtotal}) => {
    const days_plural = days === 1 ? 'day' : 'days'
    return (
        <View style={styles.orderSummary}>
            <Text style={styles.textOrderSummaryHeader}>
                Order Summary</Text>
            <Row>
                <Text style={styles.textOrderSummaryTitle}>
                    {`${dailyPrice} x ${days} ${days_plural}`}
                </Text>
                <Text style={styles.textOrderSummaryValue}>
                    {`${price} GBP`}
                </Text>
            </Row>
            <Row>
                <Text style={styles.textOrderSummaryTitle}>
                    {`Discount`}
                </Text>
                <Text style={styles.textOrderSummaryValue}>
                    {`${discount} GBP`}
                </Text>
            </Row>
            <Row>
                <Text style={styles.textOrderSummaryTitle}>
                    {`Subtotal`}
                </Text>
                <Text style={styles.textOrderSummaryValue}>
                    {`${subtotal} GBP`}
                </Text>
            </Row>
            <Row>
                <Text style={styles.textOrderSummaryTitle}>
                    {`Tax`}
                </Text>
                <Text style={styles.textOrderSummaryValue}>
                    {`${tax} GBP`}
                </Text>
            </Row>
            <Row style={{marginTop: 5}}>
                <Text style={styles.textOrderSummaryTotalTitle}>
                    TOTAL
                </Text>
                <Text style= {styles.textOrderSummaryTotalValue}>
                    {`${total} GBP`}
                </Text>
            </Row>
        </View>
    )
}

const Row = ({style, children}) => (
    <View style={[styles.row, style]}>
        {children}
    </View>
)

const PaymentForm = ({
    onUsernameChange, username_placeholder, username,
    onCardNoChange, cardNumber_placeholder, cardNumber,
    card_months, card_selectedMonth, onCardMonthChange,
    card_years, card_selectedYear, onCardYearChange,
    onCVCNoChange,  cvcNumber, cvcNumber_placeholder
    }) => (
    <View style={styles.paymentInfo}>
        <Text style={styles.textOrderSummaryHeader}>
            Payment information</Text>
        <Text style={styles.textOrderSummaryTotalTitle}>
            NAME ON CREDIT CARD
        </Text>
        <Input onChangeText={onUsernameChange}
            color={'#333'} style={{marginBottom: 10}}
            value={username} icon='user'
            placeholder={username_placeholder} />
        <Text style={styles.textOrderSummaryTotalTitle}>
            CREDIT CARD NUMBER
        </Text>
        <Input onChangeText={onCardNoChange}
            color={'#333'} style={{marginBottom: 10}}
            value={cardNumber} icon='credit-card'
            placeholder={cardNumber_placeholder} />
        <Row>
            <Text style={styles.textOrderSummaryTotalTitle}>
            EXPIRES ON</Text>
        </Row>
        <Row>
            <PickerWithOptions
                options={card_months} color={'#333'}
                selectedValue={card_selectedMonth}
                onValueChange={onCardMonthChange}
                style={[styles.cardPicker, {marginRight: 5, flex: 3}]}
                />
            <PickerWithOptions
                options={card_years} color={'#333'}
                selectedValue={card_selectedYear}
                onValueChange={onCardYearChange}
                style={[styles.cardPicker, {marginLeft: 5, flex: 2}]}
                />
        </Row>
        <Row style={{justifyContent: 'flex-end', marginTop: 10}}>
            <Text style={styles.textOrderSummaryTotalTitle}>
                CVC
            </Text>
        </Row>
        <Row style={{justifyContent: 'flex-end'}}>
            <Input onChangeText={onCVCNoChange}
                color={'#333'} style={{marginBottom: 5, width: width/5 }}
                value={cvcNumber} icon='unlock-alt' iconRight={true}
                maxLength={3}
                placeholder={cvcNumber_placeholder} />
        </Row>
    </View>
)

const Disclaimer = () => (
    <Row style={{justifyContent: 'center', alignItems: 'flex-end', marginTop: 5}}>
        <FontAwesome name='lock' color={colors.goldfusion} size={10}
            style={{paddingHorizontal: 5, borderColor: 'transparent', borderWidth: 1}}
            />
        <Text style={styles.textDisclaimer}>
            Your credit card information is encrypted</Text>
    </Row>
)

export {CheckoutField, OrderSummary, PaymentForm, Disclaimer}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    checkoutField: {
        width: width*3/4,
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderRadius: 4,
        marginTop: 20,
        marginBottom: 60,
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    orderSummary: {
        paddingVertical: 15,
        borderBottomColor: '#666',
        borderBottomWidth: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    paymentInfo: {
        paddingTop: 15
    },
    textOrderSummaryHeader: {
        paddingBottom: 10,
        color: 'black',
        fontFamily: 'serif',
        fontSize: 16,
    },
    textOrderSummaryTitle: {
        color: 'black',
        fontFamily: 'sans-serif-light',
        fontSize: 10
    },
    textOrderSummaryValue: {
        color: 'black',
        fontWeight: '400',
        fontSize: 10
    },
    textOrderSummaryTotalTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 10
    },
    textOrderSummaryTotalValue: {
        color: 'black',
        fontFamily: 'sans-serif-light',
        fontSize: 14,
        fontWeight: '400'
    },
    textDisclaimer: {
        color: colors.goldfusion,
        fontSize: 10,
    },
    cardPicker: {
        flex: 1,
        borderBottomColor: '#333', borderBottomWidth: 0.5,
        height: 40, marginTop: -10
    }
})
