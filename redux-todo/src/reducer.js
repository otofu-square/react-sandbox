// @flow

import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions';

const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.filter };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(
          (todo, idx) => (idx === action.index ? { ...todo, completed: !todo.completed } : todo),
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
