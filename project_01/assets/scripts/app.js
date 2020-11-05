const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input fields
function getNumberInput() {
    return parseFloat(userInput.value);
}


// Generates and Writes calculation log
function createAndWriteOutput(operator, resultBefore, calcNum) {
    const description = `${resultBefore} ${operator} ${calcNum} = ${currentResult}`;
    outputResult(currentResult, description); // From venders file
}
// Check entrys
function logEntryProcess(operator,prev,entry,result) {
    const logEntry = {
        operator: operator,
        prevResult: prev,
        entryNumber: entry,
        result: result

    }
    logEntries.push(logEntry);
    console.log(logEntry.operator);
    console.log(logEntry['result']);
    console.log(logEntries);
}

function add() {
    const userInputValue = getNumberInput();
    let reserv = currentResult;
    currentResult += userInputValue;
    createAndWriteOutput('+', reserv, userInputValue);
    logEntryProcess("ADD",reserv,userInputValue,currentResult);
}

function multiply() {
    const userInputValue = getNumberInput();
    let reserv = currentResult;
    currentResult *= userInputValue;
    createAndWriteOutput('*', reserv, userInputValue);
    logEntryProcess("MULTIPLY",reserv,userInputValue,currentResult);
}

function subtract() {
    const userInputValue = getNumberInput();
    let reserv = currentResult;
    currentResult -= userInputValue;
    createAndWriteOutput('-', reserv, userInputValue);
    logEntryProcess("SUBTRACT",reserv,userInputValue,currentResult);
}

function divide() {
    const userInputValue = getNumberInput();
    let reserv = currentResult;
    currentResult /= userInputValue;
    createAndWriteOutput('/', reserv, userInputValue);
    logEntryProcess("DIVIDE",reserv,userInputValue,currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


