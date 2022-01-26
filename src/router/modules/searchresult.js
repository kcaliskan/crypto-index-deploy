import SearchResult from "../../views/SearchResult";
import { components, componentPaths } from "./routableComponents";
import store from "../../store";
import { SEARCH_STORE, SEARCH_TERM } from "../../store/modules/types";

export default {
  name: components.SEARCH_RESULT,
  path: componentPaths.SEARCH_RESULT,
  component: SearchResult,
  beforeEnter: (to, from, next) => {
    const searchTerm = store.getters[`${SEARCH_STORE}/${SEARCH_TERM}`];
    if (!searchTerm) {
      next(componentPaths.HOME);
    } else {
      next();
    }
  },
};
