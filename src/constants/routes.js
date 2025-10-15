// Admin Auth
export const FORGOT_PASSWORD = "/admins/forgot-password";
export const VERIFY_FORGOT_PASSWORD = "/admins/verify-forgot-password";
export const RESET_PASSWORD = "/admins/reset-password";
export const SIGNIN = "/admins/login";
export const VERIFY_LOGIN = "/admins/verify-login";
export const CHECK_SESSION = "/admins/check-session";
export const LOGOUT = "/admins/logout"

// Admin Brands
export const FETCH_BRANDS = "/admins/brands";
export const VERIFY_BRAND = "/admins/verify-brand";
export const ACTIVATE_DEACTIVATE_BRAND = "/admins/activate-brand";
export const FETCH_BRAND_PRODUCTS = "/admins/brand-products"
export const FETCH_BRAND_ORDERS = "/admins/brand-orders"
export const FETCH_BRAND_DISPUTES = "/admins/brand-disputes"
export const FETCH_BRAND_FINANCES = "/admins/brand-finances"




// Admin Members
export const CREATE_FETCH_ADMINS = "/admins";
export const UPDATE_ADMIN_STATUS = "/admins/status"


// Admin Products
export const FETCH_PRODUCTS = "/admins/products";
export const APPROVE_REJECT_PRODUCT = "/admins/approve-product";
// export const PRODUCT_BY_BRAND = ""


// Admin Orders
export const UPDATE_ORDER_STATUS = "/admins/order-status";
export const FETCH_ORDERS = "/admins/orders"


// Admin Settings  
export const CREATE_UPDATE_DELETE_BRANDTYPES = "/admins/brand-types"
export const CREATE_UPDATE_DELETE_CATEGORIES = "/admins/categories"; 
export const CREATE_UPDATE_DELETE_COLLECTIONS = "/admins/collections";
// Subcategories Posting has been handled in the api as /admins/{categoryId}/subcategories
export const DELETE_SUBCATEGORIES = "/admins/subcategories";
export const FETCH_BRANDTYPES = "/brands/types";
export const FETCH_CATEGORIES = "/categories";
export const FETCH_SUBCATEGORIES = "/categories/subcategories";
export const FETCH_COLLECTIONS = "/categories/collections";


// Admin Disputes 
export const FETCH_DISPUTES = "/admins/disputes"
export const CREATE_DISPUTES = "/disputes";
export const DISPUTE_VIEW = "/disputes/view"


// Users 
export const USERS = "/admin/users"
export const MANAGE_USER = "/admin/manage-user"



