import * as actionTypes from 'Store/stocksPortfolio/actionTypes';

/** SEARCH COMPANIES ########################################################################################################### SEARCH COMPANIES */

export const setSearchCompaniesAction = (searchCompanies: Array<Object>) => ({
  type: actionTypes.SET_SEARCH_COMPANIES,
  payload: {
    searchCompanies,
  },
});

/** PORTFOLIO ########################################################################################################### PORTFOLIO */

export const pushPortfolioItemAction = (result: { symbol: string; name: string }) => ({
  type: actionTypes.PUSH_PORTFOLIO_ITEM,
  payload: {
    result,
  },
});

export const splicePortfolioItemAction = (index: number) => ({
  type: actionTypes.SPLICE_PORTFOLIO_ITEM,
  payload: {
    index,
  },
});
