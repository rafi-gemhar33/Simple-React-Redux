import { FETCH_POSTS, NEW_POSTS } from "../actions/types";

const initailState = {
  posts: [],
  newPost: {}
};

export default function(state = initailState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
      case NEW_POSTS:
        let newPosts = state.posts.slice()
        newPosts.unshift(action.payload)
        return{
          ...state,
          posts: newPosts,
          newPost: action.payload
        }

    default:
      return state;
  }
}
