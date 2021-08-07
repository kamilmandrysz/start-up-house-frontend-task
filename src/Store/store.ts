/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import { rootReducer } from 'Store/reducers';

const initializeStore = (preloadedState: {} | undefined) => {
  const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('Store/reducers', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('Store/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export const store = initializeStore(undefined);

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
