// API URLs
export const BASE_API_URL = 'http://localhost:8000';

function getUrl(path) {
  return `${BASE_API_URL}${path}`;
}

// Auth-related
export const AUTH_TOKEN_ENDPOINT = getUrl('/users/obtain-auth-token/');
export const LOGOUT_ENDPOINT = getUrl('/logout/');
export const REGISTER_USER_ENDPOINT = getUrl('/users/register/');
export const USER_INFO_ENDPOINT = getUrl('/user-info/');

// Budget-related
export const BUDGETS_ENDPOINT = getUrl('/budgets/');
export const BUDGET_CATEGORIES_ENDPOINT = getUrl('/budgetcategories/');
export const COPY_BUDGET_ENDPOINT = getUrl('/copy-budget/');
export const TRANSACTIONS_ENDPOINT = getUrl('/transactions/');
