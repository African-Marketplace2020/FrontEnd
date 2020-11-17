import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_PRODUCTS_LOADING = "FETCH_PRODUCTS_LOADING";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const CREATE_PRODUCT_START = "CREATE_PRODUCT_START";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE";
export const FETCH_USER_LOADING = "FETCH_USER_LOADING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchProducts = () => dispatch => {
  dispatch({ type: FETCH_PRODUCTS_LOADING });
  axiosWithAuth()
    .get("https://african-marketplace-webpt-tt95.herokuapp.com/api/products")
    .then(res => dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error }));
};

export const createProduct = (newProduct, id) => dispatch => {
  dispatch({ type: CREATE_PRODUCT_START });
  axiosWithAuth()
    .post(`https://african-marketplace-webpt-tt95.herokuapp.com/api/${id}/products`, newProduct)
    .then(res => dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: CREATE_PRODUCT_FAILURE, payload: err }));
};

export const fetchCurrentUser = () => dispatch => {
  dispatch({ type: FETCH_USER_LOADING });
  axiosWithAuth()
    .get("https://african-marketplace-webpt-tt95.herokuapp.com//api/users/current")
    .then(res => dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: FETCH_USER_FAILURE, payload: error }));
};
