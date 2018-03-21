function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
  return ('spy')

  console.log.restore()
}

function logWhisper(string) {
  console.log('hello');
  return ('spy')

  console.log.restore()
}

function sayHiToGrandma(string) {
  console.log('HELLO')
  return ('YES INDEED!')

console.log.restore()
}

var lowercase = 'hello!'

string.toLowerCase() === lowercase
