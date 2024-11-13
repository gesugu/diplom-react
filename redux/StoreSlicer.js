const defaultState = {
  users: [],
  infoUser: null,
  login: []
}

const ADD_USER = 'ADD_USER'
const GET_USERS = 'GET_USERS'
const REMOVE_USER = 'REMOVE_USER'
const GET_USER = 'GET_USER'
const LOGIN_USER = 'LOGIN_USER'

export const storeSlicer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {...state, users: [...state.users, action.payload]}
    case REMOVE_USER:
      return {...state, users: state.users.filter(user => user.id !== action.payload)}
    case GET_USERS:
      return {...state, users: [...state.users, ...action.payload]}
    case GET_USER:
      return {...state, infoUser: action.payload}
    case LOGIN_USER:
      return {...state, login: action.payload}
    default:
      return state
  }
}

export const addUserAction = (payload) => ({type: ADD_USER, payload})
export const removeUserAction = (payload) => ({type: REMOVE_USER, payload})
export const getUserAction = (payload) => ({type: GET_USERS, payload})
export const getUserInfoAction = (payload) => ({type: GET_USER, payload})