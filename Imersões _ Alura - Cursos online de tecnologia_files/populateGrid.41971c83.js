"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}var PopulateGrid=function(){function r(e,t){_classCallCheck(this,r),this.username=e,this.userpoints=t}return _createClass(r,[{key:"populate",value:function(){var r=this;this.userpoints.chartScores.forEach(function(e){var t=$('.pointsGrid-cell[data-username="'.concat(r.username,'"][data-date="').concat(e.formatedDate,'"]'));t.attr("aria-hidden",!e.hasScore),t.removeClass("pointsGrid-cell--no-score"),t.addClass("pointsGrid-cell--".concat(e.scoreColor)),t.find(".pointsGrid-cell-details").html(e.element)})}}]),r}();