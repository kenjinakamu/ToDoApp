import {CREATE_TODO, DELETE_TODO, GET_TODO, GET_TODO_LIST, UPDATE_TODO,} from '../actions/TodoAction'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_TODO:
    case GET_TODO:
    case UPDATE_TODO:
      const data = action.response.data;
      return {...events, [data.id]: data};
    case GET_TODO_LIST:
      const todoList = action.response.data;
      return {...events, todoList};
    case DELETE_TODO:
      delete events[action.id]
      return {...events};
    default:
      return events;
  }
}