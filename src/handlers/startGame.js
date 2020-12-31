'use strict';


import { logger } from '/lib/logger.js';
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
    const message = `Welcome to JS quiz \n Here are the rules:\n 1- Don't select the same answer twice. \n 2- If all your answers are wrong , you will not get a feedback back about how many question(s) you answered.\n 3- If you answer is correct, you will see green color.\n 4- if you answer is wrong, you will see red color.` ;
    alert(message);
    document.getElementById('start-btn').classList.add('hide') ;
    document.getElementById('exit').classList.add('hide');
    document.getElementById('question-correct').classList.add('hide');
    data.shuffledQuestions = questions.sort(() => Math.random() - .5) ; 
    const initialQuestionIndex = data.currentQuestionIndex = 0  ;
    const initialNumberOfQuestion = data.questionNumber = 1 ;
    const initialCorrectQuestion = data.questionCorrect = 1;
    document.getElementById('question-container').classList.remove('hide');
    setNextQuestion();
  
    logger.add({
        handler: 'startGame',
        initialQuestionIndex,
        initialNumberOfQuestion,
        initialCorrectQuestion,
     
      });



};

  

