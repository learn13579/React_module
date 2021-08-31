import {FETCH_USERS, CLEAR_STORE, PUSH_USERS} from "../actions";

export const rootReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {...state, users: [...action.payload]};
        case CLEAR_STORE:
            return {...state, users: []};
        case PUSH_USERS:
            return {...state, users: [...state.users, action.payload]};

        default:
            return state;
    }
};