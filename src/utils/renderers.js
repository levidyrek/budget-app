/**
 * Renderers for react-table.
 */

export const moneyRenderer = row => (
  `$${row.value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
);

export const dateRenderer = row => {
  const parts = row.value.split('-');
  return new Date(parts[0], parts[1] - 1, parts[2]).toLocaleDateString();
};
