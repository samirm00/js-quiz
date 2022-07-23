'use strict';


/**
 * 
 * @param {element }  remove correct and wrong classes styles 
 * ----------------------------------------------------------
 * function use to remove the class style correct {green color} and wrong {red color} from an element  
 */

export function clearStatusClass (element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

};