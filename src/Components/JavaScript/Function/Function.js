// function Sum(a,b) {
//     return (a+b)
// }

// Arrow Function

// with curly bracket required return keyword
const Sum = (a, b) => {
  return a + b;
};
let total = Sum(10, 20);
console.log(total);

// when you write function with paratheses only write operation
const Multiply = (a, b) => a * b;
let multi = Multiply(10, 20);
console.log(multi);

// callBack Function
let MainFunction = (a) => {
  console.log("MainFunction Call", a);
};
let FirstFunction = () => {
  MainFunction("FirstFunction");
};
let SecondFunction = () => {
  MainFunction("SecondFunction");
};  
FirstFunction()
SecondFunction()