
// js

// EPISODE 1

// Prediction. Below code will print 'The murderer is Miss Scarlet',
// Javascript object is written clearly using constant method.
// Constant delcareMurderer has a function which returns MURDERER key from object.
// FUNCTIOn is then stored in  CONST VERDICT so it can be called easily to terminal.
// Everything seems syntactically sound.

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// Printed to terminalsuccessfully.


// EPISODE 2

// Prediction: the episode will error because murderer is assigned to a const variable.
// const murderer is being reassigned in the changeMurderer constant function which is not allowed. 

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Prediction correct.

// #Episode 3

// will error because let variable being declared twice, once outside function, once inside.

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// incorrect prediction - printed to terminal successfully, first verdict calls function
// second verdict calls the LET value outside of function using interpolation.


// #Episode 4
// Prediction - This will successfully print to terminal as follows:
// 'The suspects are 'Miss Scarlet', 'Professor Plum', 'Colonel Mustard'
// 'Suspect three is 'Mrs.Peacock

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Prediction was correct - same logic as previous Episode3
// first console.log calls the function block, where suspect 3 is Colonel Mustard
// second consol.log calls the LET suspectThree outside of the function so Mrs.Peacock populates the string.


// # Episode 5
// Prediction: This function will error because changeWeapon constant has not been properly called on line 110
// Should be const changeWeapon('Revolver') or declare a LET variable calling function.

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

// Incorrect prediction, changeWeapon did not need to be called in a LET variable in this instance.
// With this in mind, the weapon is changed to revolver due to changeWeapon constant being called
// before declare weapon constant.

// # Episode 6
// Prediction: Episode will print successfully to terminal with
// 'The murderer is Mr.Green'.

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Prediction wrong. Failed to properly notice const plotTwist is inside
// the changerMurderer constant function.
// when ever changeMurderer is called plotTwist will also run aswell.

// Episode 7

// Prediction: 
// 'The murderer is Miss Scarlet'

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// prediction wrong - murderer was Mr Green.



// #Episode 8

//Prediction : The weapon is candlestick

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

// Prediction correct  - Because unexpectedOutcome is called which alters the key 'weapon',
// This changes value to candle stick.

// #Episode 9

// prediction : The murderer is Professor Plum

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// Prediction correct LET MURDERER is already declared, 
// LET variable in IF statement can't be read.



