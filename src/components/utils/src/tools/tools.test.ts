import { toCapitalizeFirstLetter } from "./index";

describe('Tools tests', () => {
  describe('Функция toCapitalizeFirstLetter', () => {
    test('Должна принять строку и возвратить строку, которая начинается с заглавной буквы, делая все остальные буквы маленького регистра', () => {
      const str = toCapitalizeFirstLetter('pikachu');
      expect(str).toEqual('Pikachu')
    })
  })
})