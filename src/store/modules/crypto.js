import cryptoApi from "../../api/crypto";
import { CRYPTO_API, CRYPTO_PORTFOLIO_LOCAL } from "../../constants";

import {
  CRYPTO_DATA,
  EXCHANGE_DATA,
  CRYPTO_PORTFOLIO,
  SHOW_LOADING,
  CRYPTO_VALUES,
  EXCHANGE_VALUES,
  CRYPTO_PORTFOLIO_FULL_DATA,
  SET_SHOW_LOADING,
  SET_CRYPTO_CURRENCY_VALUES,
  FETCH_EXCHANGES,
  FETCH_CRYPTO_CURRENCIES,
  SET_EXCHANGE_VALUES,
  ADD_TO_PORTFOLIO,
  UPDATE_PORTFOLIO,
  REMOVE_FROM_PORTFOLIO,
  CHECK_LOCAL_STORAGE_PORTFOLIO
} from "./types";

const state = {
  [CRYPTO_DATA]: [],
  [EXCHANGE_DATA]: [],
  [CRYPTO_PORTFOLIO]: [],
  [SHOW_LOADING]: true,
};

const getters = {
  [CRYPTO_VALUES]: (state) => state.CRYPTO_DATA,
  [EXCHANGE_VALUES]: (state) => state.EXCHANGE_DATA,
  [SHOW_LOADING]: (state) => state.SHOW_LOADING,
  [CRYPTO_PORTFOLIO]: (state) => state.CRYPTO_PORTFOLIO,
  [CRYPTO_PORTFOLIO_FULL_DATA]: (state) => {
    return state.CRYPTO_DATA.filter((crypto) =>
      state.CRYPTO_PORTFOLIO.includes(crypto.id)
    );
  },
};

const actions = {
  [SET_SHOW_LOADING]: ({ commit }, value) => {
    commit(SET_SHOW_LOADING, value);
  },
  [FETCH_CRYPTO_CURRENCIES]: async ({ commit }) => {
    commit(SET_SHOW_LOADING, true);

    const {
      data: { data },
    } = await cryptoApi.fetchData(CRYPTO_API.BASE_URL, CRYPTO_API.CRYPTO_PATH);

    commit(SET_CRYPTO_CURRENCY_VALUES, data);
    commit(SET_SHOW_LOADING, false);
  },

  [FETCH_EXCHANGES]: async ({ commit }) => {
    commit(SET_SHOW_LOADING, true);

    const {
      data: { data },
    } = await cryptoApi.fetchData(
      CRYPTO_API.BASE_URL,
      CRYPTO_API.EXCHANGE_PATH
    );

    commit(SET_EXCHANGE_VALUES, data);
    commit(SET_SHOW_LOADING, false);
  },

  [ADD_TO_PORTFOLIO]: ({ commit }, cryptoId) => {
    const portfolio =
      JSON.parse(window.localStorage.getItem(CRYPTO_PORTFOLIO_LOCAL)) || [];

    portfolio.push(cryptoId);
    window.localStorage.setItem(
      CRYPTO_PORTFOLIO_LOCAL,
      JSON.stringify(portfolio)
    );
    commit(UPDATE_PORTFOLIO, portfolio);
  },

  [REMOVE_FROM_PORTFOLIO]: ({ commit }, targetCryptoId) => {
    const portfolio = JSON.parse(
      window.localStorage.getItem(CRYPTO_PORTFOLIO_LOCAL)
    );

    const updatedPortfolio = portfolio.filter(
      (cryptoId) => cryptoId !== targetCryptoId
    );

    window.localStorage.setItem(
      CRYPTO_PORTFOLIO_LOCAL,
      JSON.stringify(updatedPortfolio)
    );

    commit(UPDATE_PORTFOLIO, updatedPortfolio);
  },

  [CHECK_LOCAL_STORAGE_PORTFOLIO]: ({ commit }) => {
    const portfolio =
      JSON.parse(window.localStorage.getItem(CRYPTO_PORTFOLIO_LOCAL)) || [];

    commit(UPDATE_PORTFOLIO, portfolio);
  },
};

const mutations = {
  [SET_CRYPTO_CURRENCY_VALUES]: (state, data) => {
    state.CRYPTO_DATA = data;
  },
  [SET_EXCHANGE_VALUES]: (state, data) => {
    state.EXCHANGE_DATA = data;
  },
  [SET_SHOW_LOADING]: (state, data) => {
    state.SHOW_LOADING = data;
  },
  [UPDATE_PORTFOLIO]: (state, data) => {
    state.CRYPTO_PORTFOLIO = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
