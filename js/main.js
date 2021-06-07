//JS
//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomInRangeInteger(min, max) {
  if (min < 0 || min >= max) {
    // eslint-disable-next-line no-alert
    alert('Ошибка! Выберите верный диапазон');
    return 'Error';
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomInRangeInteger(2, 10);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomInRangeFine(min, max, precision) {
  if (min < 0 || min >= max || precision <= 0) {
    // eslint-disable-next-line no-alert
    alert('Ошибка! Выберите верный диапазон');
    return 'Error';
  }
  // eslint-disable-next-line prefer-const
  let lastDigits = 10 ** precision;
  return Math.floor((Math.random() * (max - min) + min) * lastDigits) / lastDigits;
}
getRandomInRangeFine(2, 20, 6);
