// ==UserScript==
// @name         vue-next-in-tampermonkey
// @namespace    https://yanxintang.github.io/vue-next-in-tampermonkey/
// @version      0.1
// @author       tyx1703
// @match        https://yanxintang.github.io/vue-next-in-tampermonkey/
// @icon         https://www.google.com/s2/favicons?domain=0.1
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/vue@3.2.26/dist/vue.global.js
// ==/UserScript==

(function() {
  'use strict';
  Vue.createApp({
    data() {
      return {
        foo: 'bar'
      }
    },
    template: '{{ foo }}'
  }).mount('#app');
})();