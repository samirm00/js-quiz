'use strict';
import {logger} from '../../lib/logger.js'

import {selectAnswer} from './selectAnswer.js'
import { data } from '../data.js';

/**
 *  function with one parameter creates a button for each question text and if the answer is correct add correct class {green color}
 * @param {question}  {array of objects}
 * 
 * 1- select each question text from the object
 * 2- for each question answer create a button and add the answer text to button inner text
 * 3- add class 'btn' for each button 
 * 4- if the answer click is correct then add correct class to that button {green color}
 * 5- add event listener to {selectAnswer ()} and append the buttons created to answer-buttons 'DIV'
 */

export function showQuestion (question) {
  document.getElementById('question-number').classList.remove('hide');
  const numberOfQuestion = data.questionNumber ;  
  document.getElementById('question-number').innerText = `${data.questionNumber} / 8`;
  const theQuestion = question.question ;
  document.getElementById('question').innerText = question.question;
  const allAnswer = question.answers ;
  question.answers.forEach( answer => {
    const button = document.createElement('button');
    button.innerText = answer.text ;
    button.classList.add('btn') ;

    if(answer.correct){
      button.dataset.correct = answer.correct ;
      
     
    }
  
  button.addEventListener('click' , selectAnswer) ;
  document.getElementById('answer-buttons').appendChild(button) ;
  })
 
  logger.add({
    handler: 'showQuestion',
    numberOfQuestion,
    theQuestion,
    allAnswer ,
    
 
  });
 
}

