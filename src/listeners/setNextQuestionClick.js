'use strict';

import {data } from '../data.js'
import { setNextQuestion } from '../handlers/setNextQuestion.js';

/**
 * @name setNextQuestionClick call the handler {setNextQuestion()} to prepare the next question 
 * 
 */


 
document.getElementById('next-btn').addEventListener('click' ,() => {
  data.currentQuestionIndex++ ;
  data.questionNumber++ ;
  setNextQuestion();




}
