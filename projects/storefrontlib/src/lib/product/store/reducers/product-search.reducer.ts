import * as fromProductsSearch from '../actions/product-search.action';
import { Suggestion, ProductList } from '@spartacus/core';

export interface ProductsSearchState {
  results: ProductList;
  suggestions: Suggestion[];
  auxResults: ProductList;
  loading: boolean;
}

export const initialState: ProductsSearchState = {
  results: {},
  suggestions: [],
  auxResults: {},
  loading: false
};

export function reducer(
  state = initialState,
  action: fromProductsSearch.ProductSearchAction
): ProductsSearchState {
  switch (action.type) {
    case fromProductsSearch.SEARCH_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromProductsSearch.SEARCH_PRODUCTS_SUCCESS: {
      const results = action.payload;

      if (state.loading) {
        const res = action.auxiliary ? { auxResults: results } : { results };
        return {
          ...state,
          ...res,
          loading: false
        };
      } else {
        return state;
      }
    }

    case fromProductsSearch.GET_PRODUCT_SUGGESTIONS_SUCCESS: {
      const suggestions: Suggestion[] = action.payload;

      return {
        ...state,
        suggestions
      };
    }

    case fromProductsSearch.CLEAN_PRODUCT_SEARCH: {
      return initialState;
    }
  }
  return state;
}

export const getSearchResults = (state: ProductsSearchState) => state.results;
export const getAuxSearchResults = (state: ProductsSearchState) =>
  state.auxResults;
export const getSearchResultsLoading = (state: ProductsSearchState) =>
  state.loading;
export const getProductSuggestions = (state: ProductsSearchState) =>
  state.suggestions;
