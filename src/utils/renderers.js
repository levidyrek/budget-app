/**
 * Renderers for react-table.
 */

export const moneyRenderer = row => (
  `$${row.value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);
