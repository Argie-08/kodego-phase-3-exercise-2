// const str = ["hello", "world"];
// const chc = "l";

// so confusing what to do sir :)

function countChar(arr, char) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === char) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}
const strings = ["hello", "world"];
const character = "l";
const counts = countChar(strings, character);
console.log(counts);
