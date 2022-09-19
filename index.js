const fs = require('fs');
const wordListPath = require('word-list');

const generateUUID = (length=4) => {
  const words = fs.readFileSync(wordListPath, 'utf8').split('\n');
  let result = "";
  
  for (let i = 0; i < length; i++) {
    const rIndex = Math.floor(Math.random() * words.length)
    result += words[rIndex]
    if (i < length - 1) {
      result += "-"
    }
  }
  
  return result;
}

export default generateUUID;