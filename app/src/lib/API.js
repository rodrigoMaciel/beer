import ezFetch from 'ez-fetch';

const API_URL = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6';
const API_URL_BEER = 'https://api.punkapi.com/v2/beers';

export default {
    getBeers() {
        return ezFetch.get(API_URL);
    },
    getBeer(id) {
        return ezFetch.get(`${API_URL_BEER}/${id}`);
    }
}