'use strict';



import { data , questions} from '../data.js';

import {setNextQuestion} from './setNextQuestion.js'



/**
 * a higher order function (handler)
 * ---------------------------------
 * 1- hide the start button 
 * 2- shuffle the question so they appear in a different order 
 * 3- show the question 
 * call {setNextQuestion()}
 *
 */
export function startGame (){ 
  
    document.getElementById('start-btn').classList.add('hide') ;
    data.shuffledQuestions = questions.sort(() => Math.random() - .5) ; 
    data.currentQuestionIndex = 0  ;
    document.getElementById('question-container').classList.remove('hide');
    setNextQuestion();
  
  



};

  

