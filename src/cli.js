import readlineSync from 'readline-sync'

export default function runBrainGames() {
  console.log('Welcome to the Brain Games!')
  console.log('May I have your name?')
  const name = readlineSync.question('')
  console.log(`Hello, ${name}!`)
}
