// BABY STEPS
let array = process.argv.slice(2);
let sum = 0;

array.forEach(el => {
  sum += parseInt(el);
});

console.log(sum);
