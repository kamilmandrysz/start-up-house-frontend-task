import { PayloadAction } from '@reduxjs/toolkit';
import update from 'immutability-helper';

import * as actionTypes from 'Store/stocksPortfolio/actionTypes';

interface StockPortfolioState {
  portfolio: Array<{
    symbol: string;
    name: string;
  }>;
  searchCompanies: Array<{
    '1. symbol': string;
    '2. name': string;
  }>;
}

const initialState: StockPortfolioState = {
  portfolio: [],
  searchCompanies: [],
};

export const reducer = (state = initialState, action: PayloadAction<any>) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_COMPANIES: {
      const { searchCompanies } = action.payload;

      return update(state, {
        searchCompanies: {
          $set: searchCompanies,
        },
      });
    }
    case actionTypes.PUSH_PORTFOLIO_ITEM: {
      const { result } = action.payload;

      return update(state, {
        portfolio: {
          $push: [result],
        },
      });
    }
    case actionTypes.SPLICE_PORTFOLIO_ITEM: {
      const { index } = action.payload;

      return update(state, {
        portfolio: {
          $splice: [[index, 1]],
        },
      });
    }
    default:
      return state;
  }
};
