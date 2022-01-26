<template>
  <CryptoList
    :cryptoData="EXCHANGE_VALUES"
    :fetchErrorMessage="fetchErrorMessage"
    :tableTitles="tableTitles"
    :tableDataFields="tableDataFields"
    :tableDataSymbols="tableDataSymbols"
    :tableDataPrecisions="tableDataPrecisions"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CryptoList from "../components/CryptoList";

import {
  EXCHANGES,
  EXCHANGE_TABLE_TITLES,
  EXCHANGE_TABLE_DATA_FIELDS,
  EXCHANGE_DATA_SYMBOLS,
  EXCHANGE_DATA_PRECISIONS,
} from "../constants";

import {
  CRYPTO_STORE,
  FETCH_EXCHANGES,
  EXCHANGE_VALUES,
} from "../store/modules/types";

export default {
  name: "Exchanges",
  components: {
    CryptoList,
  },
  data() {
    return {
      fetchErrorMessage: EXCHANGES.fetchErrorMessage,
      tableTitles: EXCHANGE_TABLE_TITLES,
      tableDataFields: EXCHANGE_TABLE_DATA_FIELDS,
      tableDataSymbols: EXCHANGE_DATA_SYMBOLS,
      tableDataPrecisions: EXCHANGE_DATA_PRECISIONS,
    };
  },
  methods: {
    ...mapActions(CRYPTO_STORE, [FETCH_EXCHANGES]),
  },
  computed: {
    ...mapGetters(CRYPTO_STORE, [EXCHANGE_VALUES]),
  },
  beforeMount() {
    if (!this.EXCHANGE_VALUES.length) {
      this.FETCH_EXCHANGES();
    }
  },
};
</script>