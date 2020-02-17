import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducer from './reducers/IndexReducer';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';

const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/detail/:id" component={TodoDetail}/>
            <Route exact path="/" component={TodoList}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
