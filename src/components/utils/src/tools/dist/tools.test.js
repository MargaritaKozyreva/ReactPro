"use strict";
exports.__esModule = true;
var index_1 = require("./index");
describe('Tools tests', function () {
    describe('Функция toCapitalizeFirstLetter', function () {
        test('Должна принять строку и возвратить строку, которая начинается с заглавной буквы, делая все остальные буквы маленького регистра', function () {
            var str = index_1.toCapitalizeFirstLetter('pikachu');
            expect(str).toEqual('Pikachu');
        });
    });
});
