<template>
  <div v-if="SHOW_LOADING"><Loading /></div>
  <div v-else-if="!!CRYPTO_PORTFOLIO_FULL_DATA.length">
    <CryptoList
      :cryptoData="CRYPTO_PORTFOLIO_FULL_DATA"
      :fetchErrorMessage="PORTFOLIO.fetchErrorMessage"
      :tableTitles="tableTitles"
      :tableDataFields="tableDataFields"
      :tableDataSymbols="tableDataSymbols"
      :tableDataPrecisions="tableDataPrecisions"
      :showPortfolio="true"
    />
  </div>
  <div v-else>
    <div class="container">
      <div class="row wrapper-row mt-5 p-5 align-items-center">
        <div class="col-6 text-center">
          <h1 class="mb-4">
            {{ PORTFOLIO.NO_PORTFOLIO_ERROR_MESSAGE }}
          </h1>
          <router-link
            :to="componentPaths.TRENDING_LISTINGS"
            class="btn btn-primary"
            >{{ PORTFOLIO.TRENDING_LISTINGS_BTN_TEXT }}</router-link
          >
        </div>
        <div class="col-6 text-center">
          <img
            src="../assets/img/no-portfolio.png"
            class="img-fluid portfolio-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CryptoList from "../components/CryptoList";
import Loading from "../components/Loading";

import {
  PORTFOLIO,
  CRYPTO_TABLE_TITLES,
  CRYPTO_TABLE_DATA_FIELDS,
  CRYPTO_DATA_SYMBOLS,
  CRYPTO_DATA_PRECISIONS,
} from "../constants";

import { componentPaths } from "../router/modules/routableComponents";

import {
  CRYPTO_STORE,
  CRYPTO_VALUES,
  FETCH_CRYPTO_CURRENCIES,
  CHECK_LOCAL_STORAGE_PORTFOLIO,
  CRYPTO_PORTFOLIO_FULL_DATA,
  SHOW_LOADING,
} from "../store/modules/types";

export default {
  name: "Portfolio",
  components: {
    CryptoList,
    Loading,
  },
  data() {
    return {
      PORTFOLIO,
      componentPaths,
      tableTitles: CRYPTO_TABLE_TITLES,
      tableDataFields: CRYPTO_TABLE_DATA_FIELDS,
      tableDataSymbols: CRYPTO_DATA_SYMBOLS,
      tableDataPrecisions: CRYPTO_DATA_PRECISIONS,
    };
  },
  methods: {
    ...mapActions(CRYPTO_STORE, [
      FETCH_CRYPTO_CURRENCIES,
      CHECK_LOCAL_STORAGE_PORTFOLIO,
    ]),
  },
  computed: {
    ...mapGetters(CRYPTO_STORE, [
      CRYPTO_VALUES,
      CRYPTO_PORTFOLIO_FULL_DATA,
      SHOW_LOADING,
    ]),
  },
  created() {
    this.CHECK_LOCAL_STORAGE_PORTFOLIO();

    if (!this.CRYPTO_VALUES.length) {
      this.FETCH_CRYPTO_CURRENCIES();
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./Portfolio.scss";
</style>