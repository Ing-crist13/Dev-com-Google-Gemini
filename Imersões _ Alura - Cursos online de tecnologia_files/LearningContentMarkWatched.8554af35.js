"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"==_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}var LearningContentMarkWatched=function(){function t(){var e=this;_classCallCheck(this,t),$(".learning-content__link--trackable").on("click",function(t){return e.markProgress(t)}),this.blocks={}}return _createClass(t,[{key:"markProgress",value:function(t){var e=this,r=$(t.target),t=r.closest("a"),n=this.getUrlFromLink(t);this.blocks[n]||(this.blocks[n]=setTimeout(function(){return e.blocks[n]=void 0},700),$.post("/learning-content/mark-progress",{url:"".concat(n)}).always(function(){clearTimeout(e.blocks[n]),e.blocks[n]=void 0,e.addIconComplete(r)}))}},{key:"getUrlFromLink",value:function(t){var e=t.attr("data-original-url");return e||t.attr("href")}},{key:"addIconComplete",value:function(t){t.closest("a").children(".learning-content__info").prepend('<div class="learning-content__progress learning-content__link--clicked"></div>')}}]),t}();new LearningContentMarkWatched;