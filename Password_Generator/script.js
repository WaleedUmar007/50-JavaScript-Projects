const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc={
    lower:getLowerCase,
    upper:getUpperCase,
    numbers:getRandomNumber,
    symbol:getRandomSymbol

}
//Creating an event listener of click for generateEl

generateEl.addEventListener('click',()=>{
    const length = +lengthEl.value //to generate the password of length as specified. Add +sign before length to make it a number
    const hasLowerCase = lowercaseEl.checked
    const hasUpperCase = uppercaseEl.checked
    const hasNumbers = numbersEl.checked
    const hasSymbols = symbolsEl.checked
    console.log (hasLowerCase)

    resultEl.innerText= generatePassword (hasSymbols,hasLowerCase,hasUpperCase,hasNumbers,length) //to generate password


})
function generatePassword(lower,upper,numbers,symbol,length){
    let generatedPassowrd = ''
    const typesCount = lower + upper + numbers + symbol 
    console.log(typesCount)
}

function getLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97) //97 is ascii code for lowercase alphabets
}

function getUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65) //65 is ascii code for uppercase alphabets
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48) //48 is ascii code for 0
}
function getRandomSymbol(){
    const symbols = '@!#$%^&*{}[]<>/?'
    return symbols[Math.floor(Math.random()* symbols.length)]
}