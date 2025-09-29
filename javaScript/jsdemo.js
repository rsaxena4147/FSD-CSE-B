const num = [1, 2, 3, 4, 5]
const square = num.map((n) => n * n);
const even = num.filter((n) => n % 2 == 0).map((n) => n * n).reduce((acc, n) => acc + n, 0);
console.log(even)


//destructuring
let n = [1, 2, 3, 4];
const [a, b, ...rest] = n;
console.log(a)
console.log(b)
console.log(rest)

let obj = {
  Name: "Rimjhim",
  email: "rim@gmail.com",
  roll: 12,
  branch: "CSE"
  

}
const { Name: newname, email, ...x } = obj;

console.log(newname)
console.log(email)
console.log(x)

let arr = [1, 2];
let brr = [...arr, 5, 6]
console.log(brr)
