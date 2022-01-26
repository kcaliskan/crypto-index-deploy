/*eslint-disable*/
import router from "../../router";
import { REDIRECT_TO_PATH } from "./types";

const state = {};

const getters = {};

const actions = {
  [REDIRECT_TO_PATH]: ({ commit }, path) => {
    router.push({ path });
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
