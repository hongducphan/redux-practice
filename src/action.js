import ActionTypes from '../src/ActionTypes'

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ActionTypes.ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: ActionTypes.TOGGLE_TODO, index }
}
