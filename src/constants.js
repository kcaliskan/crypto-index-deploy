module.exports = {
  CRYPTO_API: {
    BASE_URL: "https://pacific-waters-19946.herokuapp.com",
    CRYPTO_PATH: "/v2/assets",
    EXCHANGE_PATH: "/v2/exchanges",
  },
  LOADING: "Loading...",
  HEADER: {
    LOGO_TEXT: "Crypto Index",
    TRENDING_LISTINGS_BTN_TEXT: "Trending Listings",
    EXCHANGES_BTN_TEXT: "Exchanges",
    PORTFOLIO_BTN_TEXT: "Portfolio",
  },
  HOME: {
    HEADER_TEXT: "Keep up with the crypto world by searching coins!",
    TRENDING_CARD_DESCRIPTION_TEXT:
      "Get to know about the most popular and trending cryptocurrencies",
    TRENDING_CARD_BTN_TEXT: "Trending Listings",
    EXCHANGE_CARD_DESCRIPTION_TEXT: "Keep up with the crypto exchange markets.",
    EXCHANGES_CARD_BTN_TEXT: "Exchanges",
    PORTFOLIO_CARD_DESCRIPTION_TEXT:
      "Check your portfolio and see how they perform.",
    PORTFOLIO_CARD_BTN_TEXT: "My Portfolio",
    SEARCH_INPUT_PLACEHOLDER_TEXT: "Search by cryptocurrency name",
  },
  TRENDING_LISTING: {
    fetchErrorMessage: "There is an problem occured. Please try again later.",
  },
  EXCHANGES: {
    fetchErrorMessage: "There is an problem occured. Please try again later.",
  },
  PORTFOLIO: {
    fetchErrorMessage: "You don't have any crypto currency in your portfolio.",
    NO_PORTFOLIO_ERROR_MESSAGE:
      "You don't have any cryptocurrency in your portfolio.",
    TRENDING_LISTINGS_BTN_TEXT: "Check trending cryptos to add your portfolio",
  },
  SEARCH_RESULT: {
    fetchErrorMessage: "You don't have any crypto currency in your portfolio.",
    NO_RESULT_FOUND_MESSAGE_PT_ONE: "No result for",
    NO_RESULT_FOUND_MESSAGE_PT_TWO: "found :(",
    HOME_BTN_TEXT: "Please click to make a new search",
  },
  CRYPTO_TABLE_TITLES: [
    "Name",
    "Price",
    "Market Cap",
    "Volume (24Hr)",
    "Change (24Hr)",
    "My Portfolio",
  ],
  CRYPTO_TABLE_DATA_FIELDS: {
    NAME: "name",
    PRICE: "priceUsd",
    marketCap: "marketCapUsd",
    volume: "volumeUsd24Hr",
    changePercent: "changePercent24Hr",
  },
  CRYPTO_DATA_SYMBOLS: {
    name: "",
    priceUsd: "$",
    marketCapUsd: "$",
    volumeUsd24Hr: "$",
    changePercent24Hr: "%",
  },
  CRYPTO_DATA_PRECISIONS: {
    priceUsd: 3,
    marketCapUsd: 2,
    volumeUsd24Hr: 2,
    changePercent24Hr: 2,
  },
  EXCHANGE_TABLE_TITLES: [
    "Name",
    "Trading Pairs",
    "Volume (24Hr)",
    "Total (%)",
  ],
  EXCHANGE_TABLE_DATA_FIELDS: {
    NAME: "name",
    TRADING_PAIRS: "tradingPairs",
    VOLUME: "volumeUsd",
    PERCENT_TOTAL_VOLUME: "percentTotalVolume",
  },
  EXCHANGE_DATA_SYMBOLS: {
    name: "",
    tradingPairs: "",
    volumeUsd: "$",
    percentTotalVolume: "%",
  },
  EXCHANGE_DATA_PRECISIONS: {
    volumeUsd: 3,
    percentTotalVolume: 2,
  },
  CRYPTO_PORTFOLIO_LOCAL: "crypto_portfolio_local",
};
