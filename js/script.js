"use strict";
//! 1 //

// for (let x = 5 ; x < 100 ; x++){
//   console.log(x);
// }

// 2 //

// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

// for (let x = 0 ; x < array1.length ; x++){
//   const element = array1[x];
//  if (element > 0 && element < 10){
//   console.log(element);
//  }
// }

//!

// for ( let y of array1){
//   if (y > 0 && y < 10){
//     console.log(y);
//   }
// }

//! 3 //
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let xy = 0 ; xy < array2.length ; xy++){
//   if (array2[xy]===5){
//     console.log("არის");
//   }
// }

//!

// for ( let xy of array2){
//   if (xy === 5){
//     console.log("არის");
//   }
// }

//! 4 //

// let array3= [1, 2, 3, 4, 5];
// let sum = 0;

// for (let yx = 0 ; yx < array3.length ; yx++){
//  sum += array3[yx];
// }
// console.log(sum);

//!
// for (let z of array3){
//   sum += z;
// }
// console.log(sum);

//! 5 //
// let array4 = [1, 2, 3, 4, 5];
// let sum = 0 ;

// for (let x =0 ; x < array4.length ; x ++){
//  sum += array4[x];
// }
// let y = sum / array4.length ;
// console.log(y);

//!
// for (let x of array4){
//   sum += x ;
// }
// let j =  sum / array4.length;
// console.log(j);

//! 6
// let array5 = [1, 2, 3, 7 , 6, 9];

// for (let x = 0 ; x < array5.length ; x++){
//   const element = array5[x];
//   if ( element ===7 ){
//     continue;
//   }
//   console.log(element);
// }

//!
// for (let x of array5){
//   if (x ===7){
//     continue;
//   }
//   console.log(x);
// }

//! 7
// let user = {
//   firstname: "giorgi",
//   lastname: "smith",
//   age: 25,
//   studentstatus: "active"
// }

// delete user.studentstatus;
// console.log(user.studentstatus);
// console.log(user["age"]);

//! 8
// let user2 = {
//   name: "anna",
//   age: 20,
//   studentstatus: "active",
// };
// if (user2.age < 18 && user2.studentstatus === "active") {
//   console.log("hello user");}
//   else if (user2.name === "levani") {
//     console.log("hello levan");
//   } else if (user2.studentstatus === "active" || user2.age < 25) {
//     console.log("hello anna");
//   } else {
//     console.log("error");
//   }

//!
// let x =
//   user2.age < 18 && user2.studentstatus === "active"
//     ? "hello user"
//     : user2.name === "levani"
//     ? "hello levan"
//     : user2.studentstatus === "active" || user2.age < 25
//     ? "hello anna"
//     : "error";
//     console.log(x);

//!9
// let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
// for ( let x = 0; x < array6.length ;x++){
//   const y = array6[x];
//   if (y % 2 == 0){
//     console.log(y);
//   }
// }

// for (let y of array6){
//   if (y % 2 == 0){
//     console.log(y);
//   }
// }

//!10
// let users = [
//   {username: 'giorgi', status: false},
//   {username: 'levani', status: false},
//   {username: 'anna', status: true}
// ]
// for (let x = 0 ; x < users.length ; x++ ){
//   const element = users[x];
//  if (element.status === true){
//   console.log(element.username);
//  }
// }

//!
// for (let y of users){
//   if (y.status === true){
//     console.log(y.username);
//   }
// }

//! 11
// ვერ გავიგე და ლექციის და ლექციაზე ეს საკითხი რომ გამიხსნა
// let array7 = [32, 14, 10, "hello", null, "40", 50];
// for (let x = 0 ; x < array7.length ; x++){
//   const y = array7[x];
//   if (y%5=== 0 && y !=null && y!=-0){
//     console.log(y)
//   }
// }

//! 12
// let array8 = [
//   [2, -3, 5, 11],
//   [1, -35, -11],
//   [12, -36, -24],
// ];
// for (let x = 0; x < array8.length; x++) {
//   const y = array8[x];
//   for (let z =0 ; z < y.length ; z ++){
//     const b = y[z];
//     if (b > 0){
//       console.log(b);
//     }
//   }
// }
//!

// for (let z of array8) {
//   for (const x of z) {
//     if (x > 0){
//       console.log(x);
//     }  
//   }
// }
