const apiBaseUrl = 'https://www.omdbapi.com/'
const apiKey = 'd2e9bfa0'

function _fetchOMDB(url, params) {
  return $fetch(url, {
    baseURL: `${apiBaseUrl}`,
    params: {
      apiKey,
      ...params,
    },
  })
}

/**
 * Search (searches movies, series and episode)
 */

export function bySearch(s, page = 1) {
  return _fetchOMDB('/', { s, page })
}

/**
 * Search by A valid IMDb ID (e.g. tt1285016)
 */

export function byId(i) {
  return _fetchOMDB('/', { i })
}
