// import SHOP_DATA from "./shop.data";
import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    // case ShopActionTypes.UPDATE_COLLECTIONS:
    //   // const [...collection] = action.payload;
    //   // console.log("test2", action.payload, "test3", collection);
    //   return {
    //     ...state,
    //     collections: action.payload,
    //   };
    default:
      return state;
  }
};

export default shopReducer;
