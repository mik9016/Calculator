//variables
const buttons = document.querySelectorAll('button');   
const operators = document.querySelectorAll('.operator');
const operatorAdd = document.getElementById('+');
const operatorSubstr = document.getElementById('-');
const operatorMultiply = document.getElementById('*');
const operatorDivide = document.getElementById('/');
const operatorEqual = document.getElementById('=');
const clearBtn = document.getElementById('clear');



const dispText = document.getElementById('display');
const display = document.createElement('h2');
const resDisplay = document.createElement('h1');
const defaultValueToHide = document.createElement('h2');
defaultValueToHide.id = 'defVal';
let def = document.getElementById('defVal');
let displayedValueToHide = dispText.append(defaultValueToHide.innerText='');
console.log(defaultValueToHide);


//let defaultValueDisplay = dispText.append(display.innerText='');
let defaulText = display.innerText;
let firstValueArr;
let secondValueArr; 
let displayResult;
let operatorSign;
let result;
let arr = [];
let arrToParse;
let joinedArr;
let joinedArr2;
let allValuesArr = [];

//////////////////////////////////
//listening to every button on page
buttons.forEach(btn => {
 btn.addEventListener('click', () => {
   
   let text = btn.getAttribute('data-value'); // getting num value from each button
   arr.push(text);
  
     console.log(arr);

 
    dispText.append(display.innerText=text); //  print clicked calues on screen
    
    
    
   
 });
});


//Get first Value after clicking + sign
operators.forEach(ops => {
    ops.addEventListener('click', ()=>{
            operatorSign = ops.getAttribute('data-value');
            console.log(operatorSign);
            
            arrToParse = [...arr];
            arr.splice(0, arr.length) 
            firstValueArr = parseInt(arrToParse.join(''));
            allValuesArr.push(firstValueArr);

            console.log(firstValueArr);
            console.log(allValuesArr);
        
    })
});


//Get second Value && Equal Btn
   
operatorEqual.addEventListener('click',() =>{
    secondValueArr = [...arr];

    parsedArr2  = parseInt(secondValueArr.join(''));
    allValuesArr.push(parsedArr2);
    console.log(parsedArr2);
    console.log(allValuesArr);


    //perform operation
    if (operatorSign == '+') {
        console.log(operatorSign);
        dispText.append(resDisplay.innerText=`${add(allValuesArr)}`);
    }else if (operatorSign == '-') {
        dispText.append(resDisplay.innerText=`${substract(allValuesArr)}`);
    }else if (operatorSign == '*') {
        dispText.append(resDisplay.innerText=`${multiply(allValuesArr)}`);
    }else if (operatorSign == '/') {
        dispText.append(resDisplay.innerText=`${divide(allValuesArr)}`);
    }
    
   


});



//Clear BUTTON
clearBtn.addEventListener('click',() => {
    
    arr.splice(0, arr.length);
    arrToParse.splice(0,arrToParse.length);
    secondValueArr.splice(0,secondValueArr.length);
    allValuesArr.splice(0,allValuesArr.length);
    dispText.innerText='';


});

//Operation Functions

// function add(firstVal,SecVal){
//         let result = firstVal + SecVal;
//        return result;        
// };

function add(valArr){
    let result = valArr.reduce((a, b) => a + b, 0);
   return result;        
};

function substract(valArr) {
    let result = valArr[0];

    for (let index = 1; index < valArr.length; index++) {
        let element = valArr[index];
         result -= element;
        
    }
    return result;
};

function multiply(valArr){
        let result = 1;

    for (let index = 0; index < valArr.length; index++) {
        let element = valArr[index];
         result *= element;
        
    }
    return result;
    
}

function divide(valArr){
    let result = ;

    for (let index = 0; index < valArr.length; index++) {
        let element = valArr[index];
         result *= element;
        
    }
    return result;









