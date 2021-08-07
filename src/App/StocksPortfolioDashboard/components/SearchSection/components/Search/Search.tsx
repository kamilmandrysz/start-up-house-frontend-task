import { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import API from 'Lib/axios';

import { useAppDispatch } from 'Hooks/redux-hooks';

import { setSearchCompaniesAction } from 'Store/stocksPortfolio/actions';

import { API_KEY } from 'config';

const Search = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm !== '') {
        API.get(`/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${API_KEY}`).then((res) => {
          const { bestMatches } = res.data;

          dispatch(setSearchCompaniesAction(bestMatches));
        });
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  return (
    <TextField
      label="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onChange={(e) => setSearchTerm(e.target.value)}
      variant="outlined"
    />
  );
};

export default Search;
