function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase('HELLO'))
  return ('spy')

  console.log.restore()
}

function logWhisper(string) {
  console.log('hello');
  return ('spy')

  console.log.restore()
}

function sayHiToGrandma(string) {
  return ('I can\'t hear you!')


}
