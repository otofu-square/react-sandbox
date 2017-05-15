// @flow

import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
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
