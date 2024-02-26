// so confusing what to do sir :)

// const strings = ["hello", "world"];
// const character = "l";

// function countChar(arr, char) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === char) {
//         count++;
//       }
//     }
//     result.push(count);
//   }
//   return result;
// }
// const counts = countChar(strings, character);
// console.log(counts);

// const strings = ["hello", "world"];
// const toCount = "l";

// function countChar(string, character) {
//   return string.map((str) => {
//     return str.split(character).length - 1;
//   });
// }
// const usage = countChar(strings, toCount);
// console.log(usage);

function countInstance(words, char) {
  return words.map((str) => str.split("").filter((c) => c === char).length);
}

const answer = countInstance(["hello", "world"], "l");
console.log(answer);
