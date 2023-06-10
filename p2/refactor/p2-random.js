/*
CIT 281 Project 2
Name: Amar Oberoi
*/

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex = getRandomInteger(0, alphabet.length - 1);
  return alphabet[randomIndex];
}

function getRandomString(minLength, maxLength) {
  let result = "";
  const length = getRandomInteger(minLength, maxLength);
  for (let i = 0; i < length; i++) {
    result += getRandomLetter();
  }
  return result;
}

const randomString = getRandomString(10, 20);
console.log(randomString);