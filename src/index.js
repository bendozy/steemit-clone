import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { setDropDownVisibility } from './actions/dropdown';
import { fetchTrendingDiscussions } from './actions/discussion';
import App from './components/App';
import initialState from './reducers/initialState';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

const store = configureStore(initialState);
store.dispatch(setDropDownVisibility());
store.dispatch(fetchTrendingDiscussions());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

