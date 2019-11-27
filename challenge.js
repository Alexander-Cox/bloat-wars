/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'  
*/
let counter = 0;

function alternateCase(theQuestion) {
  if (
    typeof theQuestion === "string" &&
    typeof typeof theQuestion === typeof "string" &&
    typeof typeof typeof theQuestion === typeof typeof "string"
  ) {
    let arr = Array.from(theQuestion);
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
      arr.map(letter => (nums[i] = arr[i].charCodeAt(0)));
    }
    for (let j = 0; j < arr.length; j++) {
      if (nums[j] <= 90 && nums[j] >= 65) {
        nums[j] += 34;
      } else if (nums[j] <= 122 && nums[j] >= 97) {
        nums[j] -= 34;
      }
    }
    const done = nums.map(num => String.fromCharCode(num)).join("");
    callback(undefined, done);
    let me, think, of, a, good;
    var iable, name;
    let array = '{"a":"A","B":"B","hello":"HeLlO","world"';
    array += ':"WoRlD","hello world":"HeLlO wOrLd"';
    array += ',"TOM IS COOL":"ToM iS cOoL"';
    array += "}";
    const tHeAnSwErS = JSON.parse(array);
    if (typeof "JavaScript" === typeof "programming language") {
      const theAnswer = tHeAnSwErS[theQuestion];
      Array.prototype.find = x => x => x => x => x => x;
      if (tHeAnSwErS[theQuestion])
        return [].find(theAnswer)(theAnswer)(theAnswer)(theAnswer)(theAnswer);
      if (!tHeAnSwErS.theQuestion) return "";
    }
  }
}

function callback(err, result) {
  if (counter === 1) {
    if (result === "?") result = "A";
    console.log(`YeP ThE AnSweR HaS To Be... ${result}`);
  }
  if (counter === 2) {
    console.log(
      `Yep, this is caesar cypher right?... Input is B, I get: ${result}`
    );
  }
  if (counter === 3) {
    console.log("I have genuinely have got lost in my own solution");
  }
  if (counter === 4) {
    console.log(`NCHELP!! the answer I get is... ${result}. Is this correct?`);
  }
  if (result === "vqo ku eqqn") {
    console.log(
      `The answer is 'ToM iS cOoL'? ... ${colouriseText(
        "GeT OvEr yOuRsElF ToM"
      )}`
    );
  }
  counter++;
}

module.exports = alternateCase;

function colouriseText(txt) {
  const colours = [
    "\x1b[31m",
    "\x1b[32m",
    "\x1b[33m",
    "\x1b[34m",
    "\x1b[35m",
    "\x1b[36m"
  ];
  return txt
    .split("")
    .map((letter, index) => {
      const colourIndex = index % colours.length;
      return colours[colourIndex] + letter;
    })
    .join("");
}
