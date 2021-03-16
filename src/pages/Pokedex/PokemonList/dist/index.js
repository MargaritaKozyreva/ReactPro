"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var PokemonCard_1 = require("../PokemonCard");
var PokemonList_module_scss_1 = require("./PokemonList.module.scss");
var PokemonList = function (props) {
    var pokemons = props.pokemons;
    {
        return (react_1["default"].createElement("div", { className: PokemonList_module_scss_1["default"].root }, pokemons.map(function (pokemon) { return (react_1["default"].createElement(PokemonCard_1["default"], __assign({ key: pokemon.id }, pokemon))); })));
    }
};
PokemonList.defaultProps = {};
exports["default"] = PokemonList;
