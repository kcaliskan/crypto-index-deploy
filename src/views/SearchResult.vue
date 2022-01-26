<template>
  <div v-if="SHOW_LOADING"><Loading /></div>
  <div v-else>
    <div v-if="!!CRYPTO_SEARCH_RESULT.length">
      <CryptoList
        :cryptoData="CRYPTO_SEARCH_RESULT"
        :fetchErrorMessage="SEARCH_RESULT.fetchErrorMessage"
        :tableTitles="tableTitles"
        :tableDataFields="tableDataFields"
        :tableDataSymbols="tableDataSymbols"
        :tableDataPrecisions="tableDataPrecisions"
        :showPortfolio="true"
      ></CryptoList>
    </div>
    <div v-else>
      <div class="container">
        <div class="row wrapper-row mt-5 p-5 align-items-center">
          <div class="col-6 text-center">
            <h2 class="mb-4">
              {{ SEARCH_RESULT.NO_RESULT_FOUND_MESSAGE_PT_ONE }} "{{
                SEARCH_TERM
              }}" {{ SEARCH_RESULT.NO_RESULT_FOUND_MESSAGE_PT_TWO }}
            </h2>
            <router-link :to="componentPaths.HOME" class="btn btn-primary">{{
              SEARCH_RESULT.HOME_BTN_TEXT
            }}</router-link>
          </div>
          <div class="col-6">
            <img src="../assets/img/no-search-result.svg" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CryptoList from "../components/CryptoList";
import Loading from "../components/Loading";

import {
  SEARCH_RESULT,
  CRYPTO_TABLE_TITLES,
  CRYPTO_TABLE_DATA_FIELDS,
  CRYPTO_DATA_SYMBOLS,
  CRYPTO_DATA_PRECISIONS,
} from "../constants";

import { componentPaths } from "../router/modules/routableComponents";
import {
  SEARCH_STORE,
  CLEAR_SEARCH_TERM,
  CRYPTO_STORE,
  CHECK_LOCAL_STORAGE_PORTFOLIO,
  SEARCH_TERM,
  CRYPTO_SEARCH_RESULT,
  SHOW_LOADING,
} from "../store/modules/types";

export default {
  name: "SearchResult",
  components: { CryptoList, Loading },
  data() {
    return {
      SEARCH_RESULT,
      componentPaths,
      tableTitles: CRYPTO_TABLE_TITLES,
      tableDataFields: CRYPTO_TABLE_DATA_FIELDS,
      tableDataSymbols: CRYPTO_DATA_SYMBOLS,
      tableDataPrecisions: CRYPTO_DATA_PRECISIONS,
    };
  },
  methods: {
    ...mapActions(SEARCH_STORE, [CLEAR_SEARCH_TERM]),
    ...mapActions(CRYPTO_STORE, [CHECK_LOCAL_STORAGE_PORTFOLIO]),
  },
  computed: {
    ...mapGetters(SEARCH_STORE, [SEARCH_TERM, CRYPTO_SEARCH_RESULT]),
    ...mapGetters(CRYPTO_STORE, [SHOW_LOADING]),
  },
  created() {
    this.CHECK_LOCAL_STORAGE_PORTFOLIO();
  },
  beforeUnmount() {
    this.CLEAR_SEARCH_TERM();
  },
};
</script>

<style scoped lang="scss">
@import "./SearchResult.scss";
</style>