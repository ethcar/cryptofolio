module.exports=__NEXT_REGISTER_PAGE("/_app",function(){return{page:webpackJsonp([5],{486:function(e,t,n){e.exports=n(487)},487:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),u=n(488),a=n.n(u),i=n(30),c=n(24),l=n.n(c),f=n(259),p=n.n(f),s=n(271),y=n.n(s),b=n(258);function d(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}var h=d();h.withExtraArgument=d;var v=h,m=n(25),w=n(60),g=n(74),O=n(102),_=n(103),P=n(75),j=n(197),x=Object(b.c)({core:m.e,portfolio:w.a,exchanges:O.a,apiKeys:g.d,priceData:_.d,modals:P.b}),S=b.d,k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(j.e)()||e,n=Object(b.e)(x,t,S(Object(b.a)(v)));return n.subscribe(y()(function(){var e=n.getState(),t=e.portfolio,r=e.core,o=e.apiKeys,u=e.priceData;Object(j.f)({portfolio:t,core:p()(r,["init","quoteSymbol"]),priceData:p()(u,["timeframe"]),apiKeys:o})},500)),n};function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){I(e,t,n[t])})}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return t&&D(e.prototype,t),n&&D(e,n),e}var U="undefined"==typeof window,q="__REDUX_STORE__";function A(e){return U?k(e):(window[q]||(window[q]=k(e)),window[q])}function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var N,X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),K(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.reduxStore;return o.a.createElement(u.Container,null,o.a.createElement(i.a,{store:r},o.a.createElement(t,n)))}}])&&H(n.prototype,r),c&&H(n,c),t}();t.default=(N=X,function(e){var t,n;function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=R(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e))).reduxStore=A(e.initialReduxState),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,o.a.Component),M(r,null,[{key:"getInitialProps",value:(t=l.a.mark(function e(t){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=A(),t.ctx.reduxStore=n,r={},!N.getInitialProps){e.next=7;break}return e.next=6,N.getInitialProps(t);case 6:r=e.sent;case 7:return e.abrupt("return",T({},r,{initialReduxState:n.getState()}));case 8:case"end":return e.stop()}},e,this)}),n=function(){var e=this,n=arguments;return new Promise(function(r,o){var u=t.apply(e,n);function a(e,t){try{var n=u[e](t),a=n.value}catch(e){return void o(e)}n.done?r(a):Promise.resolve(a).then(i,c)}function i(e){a("next",e)}function c(e){a("throw",e)}i()})},function(e){return n.apply(this,arguments)})}]),M(r,[{key:"render",value:function(){return o.a.createElement(N,C({},this.props,{reduxStore:this.reduxStore}))}}]),r}())},488:function(e,t,n){e.exports=n(489)},489:function(e,t,n){"use strict";var r=n(64),o=n(19);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=_,t.Container=t.default=void 0;var u=o(n(24)),a=o(n(118)),i=o(n(490)),c=o(n(88)),l=o(n(53)),f=o(n(28)),p=o(n(29)),s=o(n(54)),y=o(n(55)),b=r(n(0)),d=o(n(2)),h=o(n(255)),v=n(52),m=n(119),w=function(e){function t(){return(0,f.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}var n;return(0,y.default)(t,e),(0,p.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,m.makePublicRouterInstance)(this.props.router),_containerProps:(0,c.default)({},this.props)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=_(t);return b.default.createElement(g,null,b.default.createElement(n,(0,i.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,a.default)(u.default.mark(function e(t){var n,r,o;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,v.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(b.Component);t.default=w,Object.defineProperty(w,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"App"}),Object.defineProperty(w,"childContextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:d.default.any,headManager:d.default.object,router:d.default.object}});var g=function(e){function t(){return(0,f.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=this.props.hash;if(e){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"shouldComponentUpdate",value:function(e){return!(0,h.default)(this.props,e)}},{key:"render",value:function(){var e=this.props.children;return b.default.createElement(b.default.Fragment,null,e)}}]),t}(b.Component);t.Container=g,Object.defineProperty(g,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:d.default.any}});var O=(0,v.execOnce)(function(){0});function _(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return O(),r},get pathname(){return O(),t},get asPath(){return O(),n},back:function(){O(),e.back()},push:function(t,n){return O(),e.push(t,n)},pushTo:function(t,n){O();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return O(),e.replace(t,n)},replaceTo:function(t,n){O();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},490:function(e,t,n){var r=n(166);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o}},[486]).default}});