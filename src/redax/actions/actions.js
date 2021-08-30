import {FETCH_USERS, PUSH_USERS} from "./actionTypes";

const fetchUserS = (value) => {
  return ({type: FETCH_USERS, payload: value})
}

const pushUsers = (value) => {
  return({type: PUSH_USERS,  payload: value})
}


export {fetchUserS, pushUsers}