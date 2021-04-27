const randomFunc={
    lower:getLowerCase,
    upper:getUpperCase,
    numbers:getRandomNumber,
    symbol:getRandomSymbol

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