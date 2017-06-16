/* @flow */

const Vue = require('vue');

import Page from './components/Page.vue';

export default () => {
    return new Vue({
        render: h => h(Page),
    });
};
