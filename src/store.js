import {createStore} from 'redux';
import chairReducer from './reducers/chairReducer';

const store = createStore(chairReducer);

export default store;
