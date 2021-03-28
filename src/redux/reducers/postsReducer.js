import {
  LOAD_POSTS_FAILED,
  LOAD_POSTS_START,
  LOAD_POSTS_SUCCESS,
  SORT_POSTS,
} from "../actions/typeAction";
import { post } from "../../data";
import { sortPosts } from "../utils/helpers";

const initialState = {
  loading: false,
  posts: post,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS_START:
      return { ...state, loading: true };
    case LOAD_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case LOAD_POSTS_FAILED:
      return { ...state, loading: false };

    case SORT_POSTS:
      return { ...state, posts: sortPosts(state.posts, action.payload) };

    default:
      return state;
  }
};

export default postReducer;
