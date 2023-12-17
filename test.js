const c = {name: "hasnat"};
const d = {name: "hasnat"};
const ans = "ABD3DKJ4";
const newArray = ans.split("");
console.log(newArray);
for(let i= 0; i < ans.length; i++){
    const text = parseInt(newArray[i]);
    if(newArray[i])
    console.log(text);
}
// console.log(c=d);
// console.log(5 / "3")
// console.log('5'*'3')
// console.log(null == undefined


const s = 'h2gs58k9';
// let sum = 0;

// for (let i = 0; i < s.length; i++) {
//   const char = s.charAt(i);
//   if (!isNaN(char)) {
//     sum += parseInt(char);
//   }
// }

// console.log(sum);
let string = "h2gs58k9";
let chars = string.split("");
let sum = 0;

for (let num of chars) {
  if (!isNaN(num)) sum += parseInt(num);
}

console.log(isNaN("F"));