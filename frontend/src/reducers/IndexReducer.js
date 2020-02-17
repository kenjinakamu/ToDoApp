import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import events from './TodoReducer';

export default combineReducers({events, form})