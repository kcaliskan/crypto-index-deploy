<template>
  <div class="container">
    <div v-if="SHOW_LOADING"><Loading /></div>
    <div v-else-if="!SHOW_LOADING && !!cryptoData.length">
      <div>
        <table
          class="table table-hover mt-3 data-table shadow text-center mb-5"
        >
          <thead class="table-primary">
            <tr>
              <th v-for="(title, i) in tableTitles" :key="i">{{ title }}</th>
            </tr>
          </thead>
          <tbody
            class="border-0 text-black-50 tbody-border"
            v-for="crypto in cryptoData"
            :key="crypto.id"
          >
            <tr>
              <td v-for="(key, i) in tableDataFields" :key="i">
                <small>{{
                  checkValue(
                    crypto[key],
                    tableDataSymbols[key],
                    tableDataPrecisions[key]
                  )
                }}</small>
              </td>
              <td v-if="!checkPortfolio(crypto.id)" v-show="showPortfolio">
                <i
                  class="fas fa-regular fa-plus portfolio-icon"
                  @click="ADD_TO_PORTFOLIO(crypto.id)"
                ></i>
              </td>
              <td v-else v-show="showPortfolio">
                <i
                  class="fas fa-minus portfolio-icon"
                  @click="REMOVE_FROM_PORTFOLIO(crypto.id)"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>
      {{ fetchErrorMessage }} {{ SHOW_LOADING }} {{ !!cryptoData.length }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import Loading from "./Loading";
import valueConverter from "../utils/valueConverter";

import {
  CRYPTO_STORE,
  CRYPTO_PORTFOLIO,
  SHOW_LOADING,
  ADD_TO_PORTFOLIO,
  REMOVE_FROM_PORTFOLIO,
  CHECK_LOCAL_STORAGE_PORTFOLIO,
} from "../store/modules/types";

export default {
  name: "CryptoList",
  props: [
    "cryptoData",
    "fetchErrorMessage",
    "tableTitles",
    "tableDataFields",
    "tableDataSymbols",
    "tableDataPrecisions",
    "showPortfolio",
  ],
  components: {
    Loading,
  },
  methods: {
    checkValue: function (val, symbol, precision) {
      return valueConverter(val, symbol, precision);
    },
    checkPortfolio(cryptoId) {
      if (!!this.CRYPTO_PORTFOLIO.length && !!this.cryptoData.length) {
        return this.CRYPTO_PORTFOLIO.includes(cryptoId);
      } else {
        return false;
      }
    },

    ...mapActions(CRYPTO_STORE, [
      ADD_TO_PORTFOLIO,
      REMOVE_FROM_PORTFOLIO,
      CHECK_LOCAL_STORAGE_PORTFOLIO,
    ]),
  },
  computed: {
    ...mapGetters(CRYPTO_STORE, [SHOW_LOADING, CRYPTO_PORTFOLIO]),
  },
  created() {
    this.CHECK_LOCAL_STORAGE_PORTFOLIO();
  },
};
</script>

<style scoped lang="scss">
.data-table {
  border-radius: 8px;
  overflow: hidden;
}

.tbody-border {
  border-color: #f0f0f0 !important;
}

.portfolio-icon {
  cursor: pointer;
}
</style>