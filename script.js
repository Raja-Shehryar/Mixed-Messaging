const starters = [
  "Believe in yourself",
  "You are capable of greatness",
  "The journey of a thousand miles begins with a single step",
  "Success comes to those who work for it",
];

const middles = [
  "even when it seems tough",
  "in the face of adversity",
  "when no one else believes in you",
  "with determination and perseverance",
];

const endings = [
  "You will achieve your goals!",
  "Keep going and never give up!",
  "The sky is the limit!",
  "Your future is bright!",
];

function generateRandomMessage() {
  const randomStarter = starters[Math.floor(Math.random() * starters.length)];
  const randomMiddle = middles[Math.floor(Math.random() * middles.length)];
  const randomEnding = endings[Math.floor(Math.random() * endings.length)];

  return `${randomStarter} ${randomMiddle} - ${randomEnding}`;
}

console.log(generateRandomMessage());
