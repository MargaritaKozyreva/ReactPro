/**
 * Конкатенация двух строк
 * @param {String} str1 первый аргумент
 * @param {String} str2 второй аргумент
 * @returns {String} объединенная строка
 */

type concatStrsType = (str1: string, str2: string) => string;
const concatStrs: concatStrsType = (str1, str2) => `${str1} ${str2}`;

/**
 * Интерфейс для описания MyHometask
 */
interface MyHometaskType {
  howIDoIt: string,
  simeArray: (string | number)[], //Array<string | number>
  withData: Array<WithDataType>
}

/**
 * Интерфейс для описания объекта withData
 */
interface WithDataType {
  howIDoIt: string,
  simeArray: Array<string | number>
}

const MyHometask: MyHometaskType = {
  howIDoIt: "I Do It Well",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

/**
 * Типизация функций, используя Generic
 */

interface MyArrayType<T> {
  [n: number]: T;

  reduce(fn: (acc: T, current: T, index: T) => T): T

}

const myArray: MyArrayType<number> = [1, 2, 3];
myArray.reduce((acc, current) => acc += current)  // Почему reduce не ругается на отсутсвие index?