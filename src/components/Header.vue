<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" :to="componentPaths.HOME">{{
        HEADER.LOGO_TEXT
      }}</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              exact-active-class="active"
              class="nav-link"
              aria-current="page"
              :to="componentPaths.TRENDING_LISTINGS"
            >
              {{ HEADER.TRENDING_LISTINGS_BTN_TEXT }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              exact-active-class="active"
              class="nav-link"
              :to="componentPaths.EXCHANGES"
            >
              {{ HEADER.EXCHANGES_BTN_TEXT }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              exact-active-class="active"
              class="nav-link"
              :to="componentPaths.PORTFOLIO"
              >{{ HEADER.PORTFOLIO_BTN_TEXT }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { componentPaths } from "../router/modules/routableComponents";

import { HEADER } from "../constants";

export default {
  name: "Header",
  data: function () {
    return {
      HEADER,
      componentPaths,
    };
  },
};
</script>