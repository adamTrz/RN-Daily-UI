import React, {Component} from 'react';
import {
    DatePickerAndroid, Dimensions,
    Image, KeyboardAvoidingView,
    ScrollView, Slider, StyleSheet,
    Text,
    View,
} from 'react-native'
import moment from 'moment'

import Preview from './CheckoutPreview'
import {CheckoutField, OrderSummary, PaymentForm, Disclaimer} from './CheckoutField'
import Button from '../controls/Button'

import c from '../../constants'
import colors from '../../colors'


class Checkout extends Component {
    static route = {
        navigationBar: {
            title: 'Checkout',
            backgroundColor: 'rgba(0,0,0,0.4)',
            tintColor: '#fff',
            translucent: true,
        },
    }
    constructor(props) {
        super(props);
        this.state = {
            startDate: {},
            endDate: {},
            minEndDate: {},
            days: 1,
            min_days: 1,
            max_days: 100,
            price: 0,
            dailyPrice: 320,
            tax_percent: 23,
            tax: 0,
            total: 0,
            dailyDiscount: 16,
            discount: 0,
            subtotal: 0,
            card_months: c.checkout_months,
            card_selectedMonth: null,
            card_years: c.checkout_years,
            card_selectedYear: null,
            cvcNumber: null
      }
      this.calculateTotal = this.calculateTotal.bind(this)
      this.onValueChange = this.onValueChange.bind(this)
    }

    componentDidMount() {
        //set startDate but only use year, month and day:
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth()
        const day = today.getDate()
        const startDate = new Date(year,month,day)
        const m_startDate = moment(startDate)
        const m_endDate = m_startDate.clone().add(1,'d')
        const m_minEndDate = m_startDate.clone().add(1,'d')
        const endDate = new Date(m_endDate)
        const minEndDate = new Date(m_minEndDate)
        this.setState({startDate, endDate, minEndDate})
        this.calculateTotal()
    }

    calculateTotal() {
        const {days, dailyPrice, tax_percent, dailyDiscount} = this.state
        const price = days * dailyPrice
        const discount = dailyDiscount*days
        const subtotal = price - discount
        const tax = Math.round(subtotal*tax_percent/100)
        const total = subtotal+tax
        this.setState({total, discount, subtotal, tax, price})
    }

    onValueChange(key, value) {
        const newState = {}
        newState[key] = value
        this.setState(newState)
    }

    handleDateChange(who, date) {
        const newState = {}
        newState[who] = date
        this.setState({...newState}, this.calculateDays)
    }

    calculateDays() {
        let {startDate, endDate} = this.state
        // parse into moment objects:
        let start = moment(startDate)
        let end = moment(endDate)
        if (!end.isAfter(start)) {
            end = start.clone().add(1,'d')
            this.setState({endDate: new Date(end)})
        }
        const m_minEndDate = start.clone().add(1,'d')
        const minEndDate = new Date(m_minEndDate)
        const daysDiff = end.diff(start,'days')
        this.setState({days:daysDiff, minEndDate}, this.calculateTotal)
    }

    openDatePickerWithOptions = async (who, options) => {
         try {
            const {action, year, month, day} = await DatePickerAndroid.open(options)
            if (action === DatePickerAndroid.dismissedAction) return
            const date = new Date(year, month, day)
            this.handleDateChange(who, date)
        } catch ({code, message}) {
            console.warn(`Error: `, message);
        }
    }

    render() {
        const {
            min_days, days, max_days, price, dailyPrice,
            startDate, endDate, minEndDate,
            tax, total, discount, subtotal,
            card_months, card_selectedMonth,
            card_years, card_selectedYear,
            cvcNumber,
        } = this.state
        return (
            <Image source={{uri: c.checkout_bg}}
                style={{ flex:1}}>
                <KeyboardAvoidingView behavior='padding'
                    style={{flex:1}}>
                <ScrollView
                    contentContainerStyle={{
                        justifyContent: 'space-around', alignItems: 'center',
                        marginTop: 60, marginBottom: 0
                    }}>
                    <Preview
                        name = 'Coworking Space, South Korea'
                        dailyPrice = {dailyPrice}
                        duration = {days}
                        peopleCount = {1}
                        startDate = {startDate}
                        endDate = {endDate}
                        handleStartDateChange = {
                            this.openDatePickerWithOptions.bind(this, 'startDate', {
                                minDate: Date.now(), date: startDate
                            })
                        }
                        handleEndDateChange = {
                            this.openDatePickerWithOptions.bind(this, 'endDate', {
                                minDate: minEndDate, date: endDate
                            })
                        }
                        />
                    <CheckoutField>
                        <OrderSummary
                            price = {price}
                            dailyPrice = {dailyPrice}
                            days = {days}
                            discount = {discount}
                            subtotal = {subtotal}
                            total={total}
                            tax = {tax}
                            />
                        <PaymentForm
                            onUsernameChange={this.onValueChange.bind(this, 'username')}
                            username_placeholder='John Smith'
                            username={this.state.username}
                            onCardNoChange = {this.onValueChange.bind(this, 'cardNumber')}
                            cardNumber_placeholder = '0000 0000 0000 0000'
                            cardNumber = {this.state.cardNumber}
                            card_months = {card_months}
                            card_selectedMonth = {this.state.card_selectedMonth}
                            onCardMonthChange = {
                                this.onValueChange.bind(this, 'card_selectedMonth')
                            }
                            card_years = {card_years}
                            card_selectedYear = {this.state.card_selectedYear}
                            onCardYearChange = {
                                this.onValueChange.bind(this, 'card_selectedYear')
                            }
                            onCVCNoChange = {this.onValueChange.bind(this, 'cvcNumber')}
                            cvcNumber = {cvcNumber}
                            cvcNumber_placeholder = '000'
                            />
                        <Button onSubmit = {this.handleCheckout}
                            text='BOOK SECURELY'
                            textStyle = {styles.textButton}
                            style = {{backgroundColor: colors.peachorange}}
                            icon='paper-plane-o'
                            />
                        <Disclaimer />
                    </CheckoutField>
                </ScrollView>
                </KeyboardAvoidingView>
            </Image>
        )
    }
}


const Header = ({min_days, days, max_days, onChange}) => {
    return (
        <View style={styles.sliderWrapper}>
            <Slider onValueChange={onChange}
                value={days}
                style={styles.slider}
                maximumValue={max_days}
                minimumValue={min_days}
                step={1} />
        </View>
    )
}

export default Checkout;

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    slider: {
        width: width*3/4,
        alignSelf: 'flex-start',
        paddingVertical: 10,
    },
    sliderWrapper: {
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    textButton: {
        fontFamily: 'sans-serif-light'
    }
})
