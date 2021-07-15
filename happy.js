const inputCalc = document.querySelector('.accont'),
      resultCalc = document.querySelector('.result');
function input(nam){
	inputCalc.value = inputCalc.value + nam;
}
function result() {
	if( eval(inputCalc.value) == undefined ){
		resultCalc.value = '0,00' ;
	   inputCalc.value = '0,00' ;
	}
	if ( eval(inputCalc.value) === 16 && inputCalc.value === "3+5+7+1"){
        resultCalc.value = '20'; document.location.href="file:///C:/Users/User/Desktop/cite_for_company/present.html";
    }
	if ( eval(inputCalc.value) == Infinity){
		resultCalc.value = '0,00' ;
	   inputCalc.value = 'Поздравляю!!! Вы сломали калькулятор.' ; //На ноль не делиться!!! 
	}
  if ( eval(inputCalc.value) === 0.08571428571428572 && inputCalc.value === "3/5/7/1"){
     //resultCalc.value = '540' ;
     inputCalc.value = 'получен навык: #ты звезданутый' ; //На ноль не делиться!!! 
  }
  if ( eval(inputCalc.value) === -10 && inputCalc.value === "3-5-7-1"){
     //resultCalc.value = '540' ;
     inputCalc.value = 'навык: #ты ж моя орегинальность' ; //На ноль не делиться!!! 
  }
  if ( eval(inputCalc.value) === 105 && inputCalc.value === "3*5*7*1"){
     //resultCalc.value = '540' ;
     inputCalc.value = 'Секрет: #высокоактивный социопат' ; //На ноль не делиться!!! 
  }
  if ( eval(inputCalc.value) === 3571 && inputCalc.value === "3571"){
     //resultCalc.value = '540' ;
     inputCalc.value = 'поставь между ними знак' ; //На ноль не делиться!!! 
  }
	resultCalc.value = eval(inputCalc.value);
	inputCalc.value = eval(inputCalc.value);
}

function backspace() {
	inputCalc.value = inputCalc.value.substring( 0, inputCalc.value.length-1)
}

function reset() {
	resultCalc.value = '0,00' ;
	inputCalc.value = '' ;
}



