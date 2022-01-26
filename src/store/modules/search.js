import { componentPaths } from "../../router/modules/routableComponents";
import {
  APP_STORE,
  SEARCH_TERM,
  CRYPTO_SEARCH_RESULT,
  SET_SEARCH_TERM,
  UPDATE_SEARCH_TERM,
  UPDATE_SEARCH_RESULT,
  CRYPTO_STORE,
  CRYPTO_VALUES,
  CLEAR_SEARCH_TERM,
  FETCH_CRYPTO_CURRENCIES,
  SET_SHOW_LOADING,
  REDIRECT_TO_PATH,
} from "./types";

/*eslint-disable*/
const state = {
  [SEARCH_TERM]: "",
  [CRYPTO_SEARCH_RESULT]: [],
};

const getters = {
  [SEARCH_TERM]: (state) => state.SEARCH_TERM,
  [CRYPTO_SEARCH_RESULT]: (state) => state.CRYPTO_SEARCH_RESULT,
};

const actions = {
  [SET_SEARCH_TERM]: async (
    { dispatch, commit, getters, rootGetters },
    value
  ) => {
    commit(UPDATE_SEARCH_TERM, value);
    dispatch(`${APP_STORE}/${REDIRECT_TO_PATH}`, componentPaths.SEARCH_RESULT, {
      root: true,
    });
    await dispatch(`${CRYPTO_STORE}/${FETCH_CRYPTO_CURRENCIES}`, null, {
      root: true,
    });
    dispatch(`${CRYPTO_STORE}/${SET_SHOW_LOADING}`, true, { root: true });

    const cryptoData = rootGetters[`${CRYPTO_STORE}/${CRYPTO_VALUES}`];

    const searchResult = cryptoData.filter((crypto) => {
      return crypto.name.toLowerCase().trim() === value.toLowerCase().trim();
    });

    commit(UPDATE_SEARCH_RESULT, searchResult);
    dispatch(`${CRYPTO_STORE}/${SET_SHOW_LOADING}`, false, { root: true });
  },

  [CLEAR_SEARCH_TERM]: ({ commit }) => {
    commit(UPDATE_SEARCH_TERM, "");
    commit(UPDATE_SEARCH_RESULT, []);
  },
};

const mutations = {
  [UPDATE_SEARCH_TERM]: (state, value) => {
    state.SEARCH_TERM = value;
  },

  [UPDATE_SEARCH_RESULT]: (state, value) => {
    state.CRYPTO_SEARCH_RESULT = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
