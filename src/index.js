import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {applyMiddleware, combineReducers, createStore} from 'redux';

//reducers
const feeling = (state='', action)=>{
if(action.type ==='add-feeling'){
    console.log('in feeling', action.payload)
    return action.payload
}//end if
return state;
}//end feeling reducer

const understanding = (state='', action)=>{
if(action.type === 'add-understanding'){
    console.log('in understanding', action.payload)
    return action.payload
}//end if
return state;
}//end understanding reducer

const store=createStore(
    combineReducers({
        feeling: feeling,
        understanding: understanding
    }), applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
