const arNum = [1, 2, 3, 4, 5];
const newNum = arNum.map((n) => n * n + 2);
let answer = newNum.filter(function (test) {
  return test % 3 === 0;
});
console.log(answer);
