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

//Creating an event listener for copy to clipboard

clipboardEl.addEventListener('click',()=>{
    const textarea = document.createElement('textarea')
    
})
//Creating an event listener of click for generateEl

generateEl.addEventListener('click',()=>{
    const length = +lengthEl.value //to generate the password of length as specified. Add +sign before length to make it a number
    const hasLowerCase = lowercaseEl.checked
    const hasUpperCase = uppercaseEl.checked
    const hasNumbers = numbersEl.checked
    const hasSymbols = symbolsEl.checked
    

    resultEl.innerText= generatePassword (hasLowerCase,hasUpperCase,hasNumbers,hasSymbols,length) //to generate password


})
function generatePassword(lower,upper,numbers,symbol,length){
    let generatedPassowrd = ''
    const typesCount = lower + upper + numbers + symbol 
    const typeArr = [{lower},{upper},{numbers},{symbol}].filter(item=>Object.values(item)[0]) //filter is used to filter out the items which are not checked
    //console.log(typeArr)

    if(typesCount=== 0){
        return '' //return empty string if no checkbox is ticked
    }
    for (let i=0; i<length; i+=typesCount){
        typeArr.forEach(type=>{
            const funcName = Object.keys(type)[0]
            generatedPassowrd +=randomFunc[funcName]() 
        })
    }
    const finalPassword = generatedPassowrd.slice(0,length) //the 2nd parameter tells the final length selected for the password
    return finalPassword
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