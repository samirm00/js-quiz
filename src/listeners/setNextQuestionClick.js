'use strict';

import { logger } from '/lib/logger.js';
import {data } from '../data.js'
import { setNextQuestion } from '../handlers/setNextQuestion.js';

/**
 * @name setNextQuestionClick call the handler {setNextQuestion()} to prepare the next question 
 * 
 */


 
document.getElementById('next-btn').addEventListener('click' ,() => {
  const questionIndex = data.currentQuestionIndex++ ;
  const numberOfQuestion = data.questionNumber++ ;
  setNextQuestion();


  logger.add({
    handler: 'setNextQuestions',
    questionIndex,
    numberOfQuestion,

    
  });

})
