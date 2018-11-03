/**
 * react-number-format formats for form inputs.
 */
import React from 'react';
import NumberFormat from 'react-number-format';

const MAX_PRE_DECIMAL_DIGITS = 18;
const MAX_POST_DECIMAL_DIGITS = 2;


export function MoneyFormat(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
      isAllowed={(values) => {
        // Validate number for max digits before/after the decimal.
        const { value } = values;
        const split = value.split('.');

        if (split[0].length > MAX_PRE_DECIMAL_DIGITS) {
          return false;
        }
        if (split.length > 1 && split[1].length > MAX_POST_DECIMAL_DIGITS) {
          return false;
        }
        return true;
      }}
    />
  );
}
