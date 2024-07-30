const outputBox = document.getElementById('output');
const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');


const numeralsUnits = (num) => {
    switch (parseInt(num)) {
        case 1: return 'I';
        case 2: return 'II';
        case 3: return 'III';
        case 4: return 'IV';
        case 5: return 'V';
        case 6: return 'VI';
        case 7: return 'VII';
        case 8: return 'VIII';
        case 9: return 'IX';
        case 0: return '';
        default: return '';
    }
};

const numeralsTens = (num) => {
    switch (parseInt(num)) {
        case 1: return 'X';
        case 2: return 'XX';
        case 3: return 'XXX';
        case 4: return 'XL';
        case 5: return 'L';
        case 6: return 'LX';
        case 7: return 'LXX';
        case 8: return 'LXXX';
        case 9: return 'XC';
        case 0: return '';
        default: return '';
    }
};

const numeralsHundreds = (num) => {
    switch (parseInt(num)) {
        case 1: return 'C';
        case 2: return 'CC';
        case 3: return 'CCC';
        case 4: return 'CD';
        case 5: return 'D';
        case 6: return 'DC';
        case 7: return 'DCC';
        case 8: return 'DCCC';
        case 9: return 'CM';
        case 0: return '';
        default: return '';
    }
};

const numeralsThousands = (num) => {
    switch (parseInt(num)) {
        case 1: return 'M';
        case 2: return 'MM';
        case 3: return 'MMM';
        default: return '';
    }
};
const converter = (num) => {
    const result = [];
    const numArray = num.split("");


    if (numArray.length === 4){
        result.push(numeralsThousands(numArray[0]));
        result.push(numeralsHundreds(numArray[1]));
        result.push(numeralsTens(numArray[2]));
        result.push(numeralsUnits(numArray[3]));
    } else if (numArray.length === 3){
        result.push(numeralsHundreds(numArray[0]));
        result.push(numeralsTens(numArray[1]));
        result.push(numeralsUnits(numArray[2]));
    } else if (numArray.length === 2){
        result.push(numeralsTens(numArray[0]));
        result.push(numeralsUnits(numArray[1]));
    } else {
        result.push(numeralsUnits(numArray[0]));
    }
    const romanString = result.join(""); 
    return romanString;

};

const checkUserInput = () => {
    const parseUserInput = parseInt(userInput.value.trim());
    if (isNaN(parseUserInput)) {
        outputBox.classList.remove("hide");
        outputBox.classList.remove("boxes");
        outputBox.classList.add("error-message");
        outputBox.innerHTML = `Please enter a valid number`
        console.log(parseUserInput)
    } else if (parseUserInput < 1) {
        outputBox.classList.remove("hide");
        outputBox.classList.remove("boxes");
        outputBox.classList.add("error-message");
        outputBox.innerHTML = `Please enter a number greater than or equal to 1`;
        
    } else if (parseUserInput >= 4000) {
        outputBox.classList.remove("hide");
        outputBox.classList.remove("boxes");
        outputBox.classList.add("error-message");
        outputBox.innerHTML = `Please enter a number less than or equal to 3999`;
    } else {
        const romanNumeral = converter(userInput.value);
        outputBox.classList.remove("boxes");
        outputBox.classList.remove("hide");
        outputBox.classList.remove("error-message");
        outputBox.classList.add("boxes");
        outputBox.innerHTML = `${romanNumeral}`;    
    }


}

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkUserInput();
})

userInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        checkUserInput();
    }
    
})