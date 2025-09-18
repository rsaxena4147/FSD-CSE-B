function register() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Register Ends");
      resolve();
    }, 2000);
  });
}

function sendEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("send Email Ends");
      resolve();
    }, 2000);
  });
}

function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login Ends");
      resolve();
    }, 2000);
  });
}

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("getData Ends");
      resolve();
    }, 2000);
  });
}

function displayData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("displayData Ends");
      resolve();
    }, 2000);
  });
}

// Chaining with Promises
// Chaining with Promises
register()
  .then(sendEmail)
  .then(login)
  .then(getData)
  .then(displayData);