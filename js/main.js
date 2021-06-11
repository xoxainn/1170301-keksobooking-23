//JS
//Функция, возвращающая случайное целое число из переданного диапазона включительно.

/*const { get } = require("browser-sync");*/

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

const ADVERTS_NUMBER = 10;
const avatarNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const avatars = [];
avatarNumbers.forEach((value, index) => {
  avatars[index] = `img/avatars/user${value}.png`;
  return avatars;
});
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


const getRandomArrayElement = function(elements){
  return elements[getRandomInRangeInteger(0, elements.length - 1)];
};

const createAdvert = function(){
  return {
    avatar: getRandomArrayElement(avatars),
    offer: {
      title: 'Угрлы-бущшаитм',
      address: 'location.lat,location.lng',
      price: getRandomInRangeInteger(1, 100),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInRangeInteger(1, 100),
      guests: getRandomInRangeInteger(1, 100),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: new Array(getRandomInRangeInteger(1,6)).fill(null).map(() => getRandomArrayElement(FEATURES)),
      description: 'Абсолютно случайное сочетание слов',
      photos: new Array(getRandomInRangeInteger(1,10)).fill(null).map(() => getRandomArrayElement(PHOTOS)),
    },
    location: {
      lat: getRandomInRangeFine(35.65000, 35.70000, 5),
      lng: getRandomInRangeFine(139.70000, 139.80000, 5),
    },
  };
};

// eslint-disable-next-line no-unused-vars
const adverts = new Array(ADVERTS_NUMBER).fill(null).map(() => createAdvert());
