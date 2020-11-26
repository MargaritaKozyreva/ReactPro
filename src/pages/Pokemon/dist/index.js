"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useData_1 = require("../../components/utils/src/hookHelpers/useData/useData");
var Pokemon = function (_a) {
    var id = _a.id;
    var _b = useData_1["default"]('getPokemon', { id: id }), data = _b.data, isLoading = _b.isLoading;
    if (isLoading) {
        return react_1["default"].createElement("div", null, "...Spinner");
    }
    return react_1["default"].createElement("div", null,
        "This is pokemon equal ", data === null || data === void 0 ? void 0 :
        data.name_clean);
};
exports["default"] = Pokemon;
