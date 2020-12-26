
import {setStatusClass} from '../views/setStatusClass.js'
import { data } from '../data.js';

/**
 * function has one parameter  if the clicked answer button is correct then add correct class {green color} to the body and to the selected button
 * @param {event} 
 * 
 * 1- if the clicked button is correct then add correct class to the body
 * 2- if the clicked button is correct then add correct class to the button clicked
 * 3- if the question numbers are more than the question index + 1 (we still have question left) then show the next button
 * 4- if there is no question left then change the start button inner text to restart and show the button
 */

export function selectAnswer(e){
  const selectButton = e.target ;
  const correct = selectButton.dataset.correct ;
  setStatusClass(document.body, correct);
  Array.from(document.getElementById('answer-buttons').children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
  })
  if(data.shuffledQuestions.length >  data.currentQuestionIndex + 1){
  document.getElementById('next-btn').classList.remove('hide');
} else {
  document.getElementById('start-btn').innerText = 'Restart' ;
  document.getElementById('start-btn').classList.remove('hide');
}
};