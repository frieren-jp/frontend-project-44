// eslint-disable-next-line max-len
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; // nosonar - not used for security purposes
export default getRandomNumber;
