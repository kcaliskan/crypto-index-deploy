import Enum from "enum";

export const components = new Enum([
  "HOME",
  "TRENDING_LISTINGS",
  "EXCHANGES",
  "PORTFOLIO",
  "SEARCH_RESULT",
]);

export const componentPaths = {
  [components.HOME]: "/",
  [components.TRENDING_LISTINGS]: "/trendinglistings",
  [components.EXCHANGES]: "/exchanges",
  [components.PORTFOLIO]: "/portfolio",
  [components.SEARCH_RESULT]: "/searchresult",
};
