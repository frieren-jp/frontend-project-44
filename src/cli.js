import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export function runBrainGames() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello,${name}!`);
}
