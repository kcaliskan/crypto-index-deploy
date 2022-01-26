<template>
  <div class="container">
    <div class="row wrapper-row mt-5 p-5 align-items-center">
      <div class="col-6">
        <h2 class="text-center mb-5">
          {{ HOME.HEADER_TEXT }}
        </h2>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)" novalidate>
            <div class="form-group position-relative">
              <ValidationProvider
                name="searchInput"
                rules="required|alpha_num"
                v-slot="{ errors }"
              >
                <input
                  type="text"
                  class="form-control rounded-pill shadow-lg"
                  :class="errors[0] ? 'border-danger' : 'border-0'"
                  :placeholder="HOME.SEARCH_INPUT_PLACEHOLDER_TEXT"
                  name="searchTerm"
                  v-model="searchTerm"
                />
                <i
                  class="fas fa-search search-icon position-absolute"
                  @click="handleSubmit(onSubmit)"
                ></i>
                <span class="error-span mt-2 text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </form>
        </ValidationObserver>
      </div>
      <div class="col-6">
        <img src="../assets/img/landing-right-bg.png" class="img-fluid" />
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <img
              class="card-icon-size"
              src="../assets/img/trending.png"
              alt="trending-cryptocurrencies"
            />
            <p class="card-text mt-2 card-description">
              {{ HOME.TRENDING_CARD_DESCRIPTION_TEXT }}
            </p>
            <router-link
              :to="componentPaths.TRENDING_LISTINGS"
              class="btn btn-dark text-light text-center"
              >{{ HOME.TRENDING_CARD_BTN_TEXT }}</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <img
              class="card-icon-size"
              src="../assets/img/exchanges.png"
              alt="crypto-exchanges"
            />
            <p class="card-text mt-2 card-description">
              {{ HOME.EXCHANGE_CARD_DESCRIPTION_TEXT }}
            </p>
            <router-link
              :to="componentPaths.EXCHANGES"
              class="btn btn-dark text-light text-center"
              >{{ HOME.EXCHANGES_CARD_BTN_TEXT }}</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <img
              class="card-icon-size"
              src="../assets/img/portfolio.png"
              alt="portfolio"
            />
            <p class="card-text mt-2 card-description">
              {{ HOME.PORTFOLIO_CARD_DESCRIPTION_TEXT }}
            </p>
            <router-link
              :to="componentPaths.PORTFOLIO"
              class="btn btn-dark text-light text-center"
              >{{ HOME.PORTFOLIO_CARD_BTN_TEXT }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import "../forms/rules/req";
import "../forms/rules/alpha_num_req";

import { componentPaths } from "../router/modules/routableComponents";

import { SEARCH_STORE, SET_SEARCH_TERM } from "../store/modules/types";
import {
HOME
} from "../constants";

export default {
  name: "Home",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      searchTerm: "",
      componentPaths,
HOME
    };
  },
  methods: {
    onSubmit() {
      this.SET_SEARCH_TERM(this.searchTerm);
    },
    ...mapActions(SEARCH_STORE, [SET_SEARCH_TERM]),
  },
};
</script>

<style lang="scss" scoped>
@import "./Home.scss";
</style>
