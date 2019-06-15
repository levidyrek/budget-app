import { Decimal } from 'decimal.js';

/*
* Sorting functions for react-table.
*/

export const moneySorter = (a, b) => {
  let {first, second} = normalizeValues(a, b);
  first = new Decimal(first);
  second = new Decimal(second);
  return first.comparedTo(second);
};

export const dateSorter = (a, b) => {
  return defaultSorter(new Date(a), new Date(b));
}

const defaultSorter = (a, b) => {
  let {first, second} = normalizeValues(a, b);
  // Return either 1 or -1 to indicate a sort priority
  if (first > second) {
    return 1;
  }
  if (first < second) {
    return -1;
  }
  // returning 0 or undefined will use any subsequent column sorting methods or the row index as a tiebreaker
  return 0;
};

const normalizeValues = (a, b) => {
    // force null and undefined to the bottom
    a = a === null || a === undefined ? -Infinity : a;
    b = b === null || b === undefined ? -Infinity : b;
    // force any string values to lowercase
    a = typeof a === "string" ? a.toLowerCase() : a;
    b = typeof b === "string" ? b.toLowerCase() : b;

    return {first: a, second: b};
};
