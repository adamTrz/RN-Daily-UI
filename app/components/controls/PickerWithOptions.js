import React from 'react';
import {Picker, View} from 'react-native'

const PickerWithOptions = ({options, selectedValue, onValueChange, style, color}) => {
    const pickerStyle = [selectedValue ? {opacity: 1} : {opacity: 0.5}, style]
    return (
        <View style={pickerStyle}>
            <Picker onValueChange={onValueChange}
                selectedValue={selectedValue}
                mode='dropdown'
                style={{color: color}}
                >
                {options.map((option, idx) => (
                    <Picker.Item key={'optionPicker',idx}
                        label={option} value={option} />
                ))}
            </Picker>
        </View>
    )
}

export default PickerWithOptions
