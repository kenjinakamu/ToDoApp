import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import events from './todoReducer';

export default combineReducers({events, form})