import {getRandomInRangeInteger,getRandomInRangeFine} from './tools.js';


const ADVERTS_NUMBER = 10;
const avatarNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const avatars = avatarNumbers.map((value) => `img/avatars/user${value}.png`);
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


const getRandomArrayElement = function (elements) {
  return elements[getRandomInRangeInteger(0, elements.length - 1)];
};

const getFeatures = function () {
  const featuresArr = [];
  // eslint-disable-next-line id-length
  for (let i = 0; i < getRandomInRangeInteger(1, FEATURES.length - 1); i++) {
    if (!featuresArr.includes(FEATURES[i])) {
      featuresArr.push(FEATURES[i]);
    } else {
      continue;
    }
  }
  return featuresArr;
};

const createAdvert = function () {
  const locationLat = getRandomInRangeFine(35.65000, 35.70000, 5);
  const locationLng = getRandomInRangeFine(139.70000, 139.80000, 5);
  function getAddress() {
    return `${locationLat}, ${locationLng}`;
  }
  return {
    author: {
      avatar: getRandomArrayElement(avatars),
    },
    offer: {
      title: 'Угрлы-бущшаитм',
      address: getAddress(),
      price: getRandomInRangeInteger(1, 100),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInRangeInteger(1, 100),
      guests: getRandomInRangeInteger(1, 100),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getFeatures(),
      description: 'Абсолютно случайное сочетание слов',
      photos: new Array(getRandomInRangeInteger(1, 10)).fill(null).map(() => getRandomArrayElement(PHOTOS)),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };

};
// eslint-disable-next-line no-unused-vars
const adverts = [];
let advertsNmbr = 0;
while (advertsNmbr <= ADVERTS_NUMBER - 1) {
  const advert = createAdvert();
  if (adverts.length === 0) {
    adverts.push(advert);
    advertsNmbr++;
  } else {
    if (!adverts.some((elem) => elem.author.avatar === advert.author.avatar)) {
      adverts.push(advert);
      advertsNmbr++;
    } else {
      continue;
    }
  } if (adverts.length === ADVERTS_NUMBER) {
    break;
  }
}
export {adverts};
