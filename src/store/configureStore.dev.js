import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(
      thunk,
      reduxImmutableStateInvariant(),
      loggerMiddleware,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
  /* eslint-enable */
  return store;
}
