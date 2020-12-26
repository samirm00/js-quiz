'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!
    your handlers will query the DOM each time they need to make a change

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners

*/

// this is example data for the starter demo
//  delete this data when you begin and use the own quiz data instead
/**
 * data that is saved and used between user interactions
 * @property {number} @shuffledQuestion make sure , that the questions have random order 
 * @property {number} @currentQuestionIndex  the index of the current question 
 */
export const data = {
  shuffledQuestions: 0,
  currentQuestionIndex :0
}

// here's a suggestion for your game's state, see if this works for your team
//  there are many ways to represent your game as data!
/**
 * Questions array 
 * ---------------
 * @property {object} each object contains @question {string} and @answers {array} of objects {{} string}
 */

 export const questions = [
  {
    question: 'JS stands for ?',
    answers: [
      { text: 'Java', correct: false },
      { text: 'JavaScript', correct: true },
      { text: 'Python', correct: false},
      { text: 'C++', correct: false}
    ]
  },
  {
    question: 'JavaScript was created by Brendan Eich in?',
    answers: [
      { text: '1994', correct: false },
      { text: '1995', correct: true },
      { text: '1998', correct: false },
      { text: '1992', correct: false }
    ]
  },
  {
    question: 'What is an IIFE in JavaScript ?',
    answers: [
      { text: 'normal function', correct: false },
      { text: 'Immediately Invoked Function Expression', correct: true },
      { text: 'IIFE does not exist in JavaScript', correct: false },
      { text: 'type of classes in JavaScript', correct: false }
    ]
  },
  {
    question: 'the most popular programing language in 2020 is ?',
    answers: [
      { text: 'JavaScript', correct: false },
      { text: 'Python', correct: true },
      { text: 'Java', correct: false },
      { text: 'C++', correct: false }
    ]
  },
  {
    question: 'JavaScript was originally called  ?',
    answers: [
      { text: 'Java', correct: false },
      { text: 'Mocha', correct: true },
      { text: 'JSON', correct: false },
      { text: 'C++', correct: false }
    ]
  },
  {
    question: 'Th best way to learn JavaScript is?',
    answers: [
      { text: 'books', correct: true},
      { text: 'tutorials', correct: true },
      { text: 'practising', correct: true },
      { text: 'coding', correct: true}
    ]
  }
];
 


 