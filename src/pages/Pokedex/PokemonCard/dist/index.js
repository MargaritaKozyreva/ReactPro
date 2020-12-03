"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Heading_1 = require("../../../components/Heading");
var PokemonCard_module_scss_1 = require("./PokemonCard.module.scss");
var tools_1 = require("../../../components/utils/src/tools");
var classnames_1 = require("classnames");
var dist_1 = require("../../../components/utils/src/tools/dist");
var PokemonCard = function (props) {
    var id = props.id, name_clean = props.name_clean, stats = props.stats, types = props.types, img = props.img;
    var bgCardStyle = classnames_1["default"](PokemonCard_module_scss_1["default"]['pictureWrap'], PokemonCard_module_scss_1["default"][tools_1.setBgCardColor(types)]);
    return (react_1["default"].createElement("div", { className: PokemonCard_module_scss_1["default"].root },
        react_1["default"].createElement("div", { className: PokemonCard_module_scss_1["default"].infoWrap },
            react_1["default"].createElement(Heading_1["default"], { type: "h5", className: PokemonCard_module_scss_1["default"].titleName }, dist_1.toCapitalizeFirstLetter(name_clean)),
            react_1["default"].createElement("div", { className: PokemonCard_module_scss_1["default"].statWrap },
                react_1["default"].createElement("div", { className: PokemonCard_module_scss_1["default"].statItem },
                    react_1["default"].createElement("div", { className: PokemonCard_module_scss_1["default"].statValue }, stats.attack),
                    "Attack"),
                react_1["default"].createElement("div", { className: PokemonCard_module_scss_1["default"].statItem },
                    react_1["default"].createElement("div", { className: PokemonCard_module_scss_1["default"].statValue }, stats.defense),
                    "Defense")),
            react_1["default"].createElement("div", { className: PokemonCard_module_scss_1["default"].labelWrap }, types.map(function (type, i) { return (react_1["default"].createElement("span", { key: "" + name_clean + id + i, className: PokemonCard_module_scss_1["default"].label }, dist_1.toCapitalizeFirstLetter(type))); }))),
        react_1["default"].createElement("div", { className: bgCardStyle },
            react_1["default"].createElement("img", { src: img, alt: name_clean }))));
};
PokemonCard.defaultProps = {};
exports["default"] = PokemonCard;
