const messages = [
  "No one is in control of who they are when they are born. You're born into the family you're born into and you're born into the circumstances you're born into. So you just have to take what you can from where you are and not compare yourself to other people. You have to look at your path and know that what got you there, and where you're going, is unique to you. You weren't meant to be any other way",
  "He who has a why to live for, can bear almost any how",
  "Work to become the person you're destinated to be",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
