//JS
//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomInRangeInteger(min, max) {
  if (min < 0 || min >= max) {
    return -1;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomInRangeInteger(2, 10);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomInRangeFine(min, max, precision) {
  if (min < 0 || min >= max || precision <= 0) {
    return -1;
  }
  const lastDigits = 10 ** precision;
  return Math.floor((Math.random() * (max - min) + min) * lastDigits) / lastDigits;
}
getRandomInRangeFine(2, 20, 6);
