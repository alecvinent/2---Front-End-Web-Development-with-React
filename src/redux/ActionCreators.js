import * as ActionTypes from "./ActionTypes";

// shared
import { DISHES } from "../shared/dishes";

// comments
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

// *****************************************************
// dishes
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

//
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

//
export const dishesFailed = (errorMessage) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errorMessage,
});

//
export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});
