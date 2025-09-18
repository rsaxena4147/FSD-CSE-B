// console.log(a)
// const x = 10; // cannot be accessed before initialization and acceessed only in block scope
// // console.log(e)
// let e = 10 // cannot be accessed before initialization and acceessed only in block scope
// var a // can be accessed anywhere
// var b = 6
// console.log(a)
// {
//   var c = 7
//   let d = 9
//   console.log(b)
//   console.log(c)
//   console.log(e)
//   // x++;
// }
// console.log(c)
// // console.log(d)\
// console.log(x)



// function fn(user = 'guest') {

//   console.log(`hello ${user}`)

// }
// fn("Rimjhim")

// const sum = (a, b) => {
//   console.log("object")
//   return a + b
// };

// console.log(sum(10, 12));

// //IIFE
// (
//   function functionName() {

//     console.log("Hii")

//   })();

// //function as a parameter passed to a function is called callback function
// // function login() {
// //   console.log("login....")
// // }

// function f1(user, login) {
//   console.log(`Hello ${user}`);
//   login();
// }

// f1("rimjhim", sum);

// // console.log(new Date().getTime())
// function wait() {

//   const ms = new Date().getTime() + 4000;

//   while (new Date().getTime() < ms);

// }
// console.log(new Date().getTime())


// const register=()=>{
// wait();

//   console.log("Register function called");
// }

// const sendEmail=()=>{
// wait();

//   console.log("sendEMail function called");
// }

// const login=()=>{
// wait();

//   console.log("Login function called");
// }

// const getData=()=>{
// wait();

//   console.log("getData function called");
// }

// const displayData=()=>{
// wait();

//   console.log("displayData function called");
// }

// register();
// sendEmail();
// login();
// getData();
// displayData();

// console.log("Other application")



function register(cb){
  setTimeout(()=>{
    console.log("Register Ends");
    cb();
  },2000)
}



function sendEmail(cb){
  setTimeout(()=>{
    console.log("send Email Ends");
    cb();
  },2000)
}

function login(cb){
  setTimeout(()=>{
    console.log("Login Ends");
    cb();
  },2000)
}

function getData(cb){
  setTimeout(()=>{
    console.log("getData Ends");
    cb();
  },2000)
}
function displayData(cb){
  setTimeout(()=>{
    console.log("displayData Ends");
    cb();
  },2000) 
}
register(()=>{
  sendEmail(()=>{
    login(()=>{
      getData(()=>{
        displayData()
      })
    })
  })
})

