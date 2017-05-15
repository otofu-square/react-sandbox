// @flow

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIABLE_FILTER';

/* eslint-disable immutable/no-let */
let nextTodoId = 0;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  /* eslint-disable no-plusplus */
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id,
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
