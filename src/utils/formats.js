/**
 * react-number-format formats for form inputs.
 */
import React from 'react'
import NumberFormat from 'react-number-format'


export function MoneyFormat(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                    onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            prefix='$'
            />
    );
}
