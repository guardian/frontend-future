/* @flow */

const Vue = require('vue');

import Page from './components/Page.vue';

export default context => {
    const x = new Vue({
        render: h => h(Page),
    });
    return x;
    // console.log(x);
};
