(self.webpackChunknodeschool_vancouver_gatsby=self.webpackChunknodeschool_vancouver_gatsby||[]).push([[323],{2562:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0,t.Link=void 0;var r=a(n(434)),u=a(n(7071)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}a.default=e,n&&n.set(e,a);return a}(n(7294)),i=n(9402),c=n(1883),f=n(7610),l=["language","to","onClick"];function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=o.default.forwardRef((function(e,t){var n=e.language,a=e.to,s=e.onClick,d=(0,u.default)(e,l),g=(0,o.useContext)(i.I18nextContext),v=n||g.language,_=""+function(e){return g.generateDefaultLanguagePage||e!==g.defaultLanguage?"/"+e:""}(v)+a;return o.default.createElement(c.Link,(0,r.default)({},d,{to:_,innerRef:t,hrefLang:v,onClick:function(e){n&&localStorage.setItem(f.LANGUAGE_KEY,n),s&&s(e)}}))}));t.Link=d},531:function(e,t,n){"use strict";t.__esModule=!0;var a=n(1468);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var r=n(9402);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var u=n(8112);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===u[e]||(t[e]=u[e]))}));var o=n(2562);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||(t[e]=o[e]))}))},8112:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0,t.useI18next=void 0;var r=a(n(434)),u=n(1468),o=n(7294),i=n(1883),c=n(9402),f=n(7610);t.useI18next=function(e,t){var n=(0,u.useTranslation)(e,t),a=n.i18n,l=n.t,s=n.ready,d=(0,o.useContext)(c.I18nextContext),g=d.routed,v=d.defaultLanguage,_=d.generateDefaultLanguagePage,p=function(e){return _||e!==v?"/"+e:""};return(0,r.default)({},d,{i18n:a,t:l,ready:s,navigate:function(e,t){var n=p(d.language),a=g?""+n+e:""+e;return(0,i.navigate)(a,t)},changeLanguage:function(e,t,n){var a=""+p(e)+(t||function(e){if(!g)return e;var t=e.indexOf("/",1);return e.substring(t)}(function(e){var t="/vancouver";return t&&0===e.indexOf(t)&&(e=e.slice(10)),e}(window.location.pathname)))+window.location.search;return localStorage.setItem(f.LANGUAGE_KEY,e),(0,i.navigate)(a,n)}})}},7782:function(e,t,n){e.exports=n(531)},1907:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(7782),u=n(8090),o=n(2006);t.default=()=>{const{t:e}=(0,r.useTranslation)();return a.createElement(u.Z,null,a.createElement(o.Z,{title:"404: Not found"}),a.createElement("h1",null,"NOT FOUND"),a.createElement("p",null,e("You just hit a route that doesn&#39;t exist... the sadness"),"."))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-nodeschool-src-pages-404-js-36c377f9fe4fc984698b.js.map