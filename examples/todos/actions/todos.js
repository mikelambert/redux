import {makeActionType, makeStateType} from './magic'

const ITEM = {
  ADD_TODO: function(unused, action) {
    return {
      id: action.id,
      text: action.text,
      completed: false
    }
  }

  TOGGLE_TODO: function (state, action) {
    if (state.id !== action.id) {
      return state
    }

    return Object.assign({}, state, {
      completed: !state.completed
    })
  }
}

export const LIST = {
  ADD_TODO: function(state, action) {
    return [
      ...state,
      ITEM.ADD_TODO(undefined, action)
    ]
  }

  TOGGLE_TODO: function(state, action) {
    return state.map(t =>
      ITEM.TOGGLE_TODO(t, action)
    )
  }

  INIT: function() {
    return [];
  }
}

makeStateType({LIST, ITEM})

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: makeActionType(LIST.ADD_TODO),
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: makeActionType(LIST.TOGGLE_TODO),
    id
  }
}