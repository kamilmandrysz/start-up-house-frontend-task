import { combineReducers } from 'redux';

import { reducer as stocksPortfolio } from 'Store/stocksPortfolio/reducer';

export const rootReducer = combineReducers({ stocksPortfolio });
