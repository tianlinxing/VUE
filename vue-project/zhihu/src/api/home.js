import http from './index'
export function hotList(option) {
    return http.get('/v4//mweb-feed/content/list', {
        params: option
        // params: {
        //     category: 'jiaoyu',
        //     reload: false,
        //     utm_source: null,
        //     count: 8
        // }
    })
}