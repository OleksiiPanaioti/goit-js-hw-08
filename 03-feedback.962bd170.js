function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var i,r,o,f,u,a,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,o=r;return i=r=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,u=setTimeout(w,t),l?g(e):f}function h(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=o}function w(){var e=p();if(h(e))return T(e);u=setTimeout(w,function(e){var n=t-(e-a);return d?m(n,o-(e-c)):n}(e))}function T(e){return u=void 0,v&&i?g(e):(i=r=void 0,f)}function x(){var e=p(),n=h(e);if(i=arguments,r=this,a=e,n){if(void 0===u)return j(a);if(d)return u=setTimeout(w,t),g(a)}return void 0===u&&(u=setTimeout(w,t)),f}return t=b(t)||0,y(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=r=u=void 0},x.flush=function(){return void 0===u?f:T(p())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};let g={};({form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")}).form.addEventListener("input",e(t)((function(e){g[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(g))}),500));
//# sourceMappingURL=03-feedback.962bd170.js.map
