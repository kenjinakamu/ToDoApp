import axios from 'axios';

export const CREATE_TODO = 'CREATE_TODO';
export const GET_TODO_LIST = 'GET_TODO_LIST';
export const GET_TODO = 'GET_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const ROOT_URL = 'http://localhost:8080/api';

export const createTodo = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/todo`, values)
  dispatch({type: CREATE_TODO, response})
}

export const getTodoList = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/todo`)
  dispatch({type: GET_TODO_LIST, response})
}

export const getTodo = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/todo/${id}`)
  dispatch({type: GET_TODO, response})
}

export const updateTodo = values => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/todo/${values.id}`, values)
  dispatch({type: UPDATE_TODO, response})
}

export const deleteTodo = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/todo/${id}`)
  dispatch({type: DELETE_TODO, id})
}