"use strict";
exports.__esModule = true;
exports.toCapitalizeFirstLetter = exports.setBgCardColor = void 0;
exports.setBgCardColor = function (arr) {
    for (var i = 0; i <= arr.length - 1; i++) {
        switch (arr[i]) {
            case 'grass':
                return 'bgGrass';
            case 'poison':
                return 'bgGrass';
            case 'fire':
                return 'bgFire';
            case 'bug':
                return 'bgBug';
            case 'water':
                return 'bgWater';
            case 'normal':
                return 'bgWater';
            case 'electric':
                return 'bgElectric';
            default:
                return 'bgDefault';
        }
    }
    return 'bgDefault';
};
exports.toCapitalizeFirstLetter = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
