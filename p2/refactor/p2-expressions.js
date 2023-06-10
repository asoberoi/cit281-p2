/*
CIT 281 Project 2
Name: Amar Oberoi
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const getRandomInteger = (min, max) => {
  Math.floor(Math.random() * (max - min) + min);
};

const getRandomLetter = function() {
  const randomIndex = getRandomInteger(0, alphabet.length - 1);
  return alphabet[randomIndex];
};

const getRandomString = (minLength, maxLength) => {
  let result = "";
  const length = getRandomInteger(minLength, maxLength);
  for (let i = 0; i < length; i++) {
    result += getRandomLetter();
  }
  return result;
};

const randomString = getRandomString(10, 20);
console.log(randomString);
//testing 