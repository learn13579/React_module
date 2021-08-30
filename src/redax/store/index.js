import {createStore} from 'redux';
import {rootReducer} from "../redusers/rootReducer";

export let store = createStore(rootReducer);