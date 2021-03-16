"use strict";

exports.__esModule = true;

var getUrlWithParamsConfig_1 = require("../tools/getUrlWithParamsConfig");

describe('getUrlWithParamsConfig', function () {
  test('Должна принимать два аргумента "getPokemons" и пустой объект, на выходе получить объект с полями pathname, protocol, host и пустым query', function () {
    var url = getUrlWithParamsConfig_1["default"]('getPokemons', {});
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {}
    });
  });
  test('Должна принимать два аргумента "getPokemons" и {name: "Pikachu"}, на выходе получить объект с полями pathname, protocol, host и query с полями name равное pikachu', function () {
    var url = getUrlWithParamsConfig_1["default"]('getPokemons', {
      name: "Pikachu"
    });
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {
        name: "Pikachu"
      }
    });
  });
  test('Должна принимать два аргумента "getPokemon" и {id: 25}, на выходе получить объект с полями pathname, protocol, host и пустой query', function () {
    var url = getUrlWithParamsConfig_1["default"]('getPokemon', {
      id: 25
    });
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {}
    });
  });
});