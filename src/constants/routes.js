// Admin Auth
export const SIGNIN = "/admin-auth/login";
export const CHECK_SESSION = "/admin-auth/check-session";
export const SIGNOUT = "/admin-auth/logout";

//Course Creation and Fetching

export const ADD_COURSE_CATEGORY = "/admin/course/add-category"
export const UPDATE_COURSE_CATEGORY = "/admin/course/update-category"
export const DELETE_COURSE_CATEGORY = "/admin/course/delete-category"
export const FETCH_COURSE_CATEGORIES = "/admin/course/fetch-all-categories"

export const ADD_COURSE_OVERVIEW = "/admin/course/add-course-overview"
export const UPDATE_COURSE_OVERVIEW = "/admin/course/update-course-overview"
export const ADD_COURSE_MATERIAL_TITLE = "/admin/course/add-course-material-title"
export const ADD_COURSE_MATERIAL_FILES = "/admin/course/add-course-material-files"
export const ADD_COURSE_REQUIREMENTS = "/admin/course/add-course-requirements"
export const UPDATE_COURSE_REQUIREMENTS = "/admin/course/update-course-requirements"
export const ADD_COURSE_PRICING = "/admin/course/add-course-pricing"
export const PUBLISH_COURSE = "/admin/course/publish-course"

export const FETCH_COURSES = "/admin/course/fetch-all-courses"
export const FETCH_COURSE = "/admin/course/course-details"
export const FETCH_COURSE_MATERIAL = "/admin/course/fetch-course-materials"
export const DELETE_COURSE_MATERIAL = "/admin/course/delete-course-material"
export const DELETE_COURSE = "/admin/course/delete-course"



// Course Orders and Payments 

export const FETCH_ORDERS = "/admin/order/fetch-all-orders"
export const FETCH_SINGLE_ORDER = "/admin/order/fetch-single-order"
export const FETCH_PAYMENTS = "/admin/order/all-payments"
export const FETCH_ORDER_PAYMENT = "/admin/order/order-payment"



// Users or students 

 export const FETCH_USERS = "/admin/user/fetch-all-users"
 export const FETCH_SINGLE_USER = "/admin/user/fetch-single-user"
 export const DELETE_USER = "/admin/user/delete-user"
 export const BLOCK_USER = "/admin/user/block-user"
 export const UNBLOCK_USER = "/admin/user/unblock-user"


// Admins or collaborators 

export const ADD_ADMIN = "/admin/add-admin"
export const UPDATE_ADMIN = "/admin/update-admin"
export const FETCH_ADMINS = "/admin/fetch-all-admins"
export const FETCH_SINGLE_ADMIN = "/admin/fetch-single-admin"
export const DELETE_ADMIN = "/admin/delete-admin"

