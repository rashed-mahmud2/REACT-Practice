// function checkAge(name, age) {
//   // your code here
//   if (age >= 18) {
//     // let result = ;
//     console.log("hellow", name, ". You're an adult.");
//   } else {
//     // let result = ;
//     // console.log(`Hi {name}. You're still a minor`);
//     console.log("hi", name, "you are still minor");
//   }
// }

// // test the function
// checkAge("Rashed", 22);
// checkAge("selina", 17);

let name = prompt("Enter Your name: ");
let age = parseInt(prompt("Enter your age: "));

function checkAge(name, age) {
  let message;
  if (age >= 18) {
    // console.log(`Hellow ${name}. You're an adult.`);
    message = `Hellow ${name}. You're an adult.`;
  } else {
    // console.log(`Hi ${name}. You're still minor`);
    message = `Hi ${name}. You're still minor`;
  }

  return message;
}

console.log(checkAge(name, age));
