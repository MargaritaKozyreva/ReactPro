"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;

var config_1 = require("../../../../../../config");

var getUrlWithParamsConfig = function getUrlWithParamsConfig(endpointConfig, query) {
  var url = __assign(__assign(__assign({}, config_1["default"].client.server), config_1["default"].client.endpoint[endpointConfig].uri), {
    query: {}
  });

  var pathname = Object.keys(query).reduce(function (acc, val) {
    if (acc.indexOf("{" + val + "}") !== -1) {
      var result = acc.replace("{" + val + "}", query[val]);
      delete query[val];
      return result;
    }

    return acc;
  }, url.pathname);
  url.pathname = pathname;
  url.query = __assign({}, query);
  return url;
};

exports["default"] = getUrlWithParamsConfig;