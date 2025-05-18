import getRandomNumber from '../utils/random.js';
import runGameEngine from '../index.js';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 30);
  const num2 = getRandomNumber(1, 10);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, num2, operator));
  return [question, answer];
};

export default () => {
  const description = 'What is the result of the expression?';
  runGameEngine(description, generateRound);
};
