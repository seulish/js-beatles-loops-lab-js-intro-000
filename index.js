// add solution here

function theBeatlesPlay(musicians, instruments) {
  var i = [];
  for (let n = 0; n < musicians.length; n++) {
    i.push(`${musicians[n]} plays ${instruments[n]}`);
  }
  return i
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var n = 0;
  while (n < facts.length) {
    facts[n] = facts[n] + "!!!";
    n += 1
  }
  return facts
}

function iLoveTheBeatles(num) {
  var i = [];
  do {
    i.push("I love the Beatles!");
    num += 1;
  } while (num < 15);
  return i
}
