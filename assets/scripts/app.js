const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
// Gets input from input field
function getInputNumber(numStr) {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCacl, caclNumber) {
  const calcDesc = `${currentResult} ${operator} ${caclNumber}`;
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    operand: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getInputNumber();
  const prevResult = currentResult;
  if (
    (calculationType != "+" &&
      calculationType != "-" &&
      calculationType != "*" &&
      calculationType != "/") ||
    !enteredNumber
  ) {
    return;
  }
  if (calculationType == "+") {
    currentResult += enteredNumber;
  } else if (calculationType == "-") {
    currentResult -= enteredNumber;
  } else if (calculationType == "*") {
    currentResult *= enteredNumber;
  } else if (calculationType == "/" || calculationType == "DIVIDE") {
    currentResult *= enteredNumber;
  }

  calcDesc = createAndWriteOutput(calculationType, prevResult, enteredNumber);
  outputResult(currentResult, calcDesc);
  writeToLog(calculationType, prevResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("+");
  // const enteredNumber = getInputNumber();
  // const prevResult = currentResult;
  // currentResult += enteredNumber;
  // calcDesc = createAndWriteOutput('+', prevResult, enteredNumber)
  // outputResult(currentResult, calcDesc)
  // writeToLog('+', prevResult, enteredNumber, currentResult)
  // typeof(logEntries)
  // console.log(logEntry.operation);
}
// function subtract() {
//   calculateResult("-");
//   // const enteredNumber = getInputNumber();
//   // const prevResult = currentResult
//   // currentResult -= enteredNumber;
//   // calcDesc = createAndWriteOutput('-', prevResult, enteredNumber)
//   // outputResult(currentResult, calcDesc)
//   // writeToLog('-', prevResult, enteredNumber, currentResult)
// }

// function multiply() {
//   calculateResult("*");
//   // const enteredNumber = getInputNumber();
//   // const prevResult = currentResult
//   // currentResult *= enteredNumber;
//   // calcDesc = createAndWriteOutput('*', prevResult, enteredNumber)
//   // outputResult(currentResult, calcDesc)
//   // writeToLog('*', prevResult, enteredNumber, currentResult)
// }

// function divide() {
//   calculateResult("/");
//   // const enteredNumber = getInputNumber();
//   // const prevResult = currentResult
//   // currentResult /= enteredNumber;
//   // calcDesc = createAndWriteOutput('/', prevResult, enteredNumber)
//   // outputResult(currentResult, calcDesc)
//   // writeToLog('/', prevResult, enteredNumber, currentResult)
// }

addBtn.addEventListener("click", calculateResult.bind(this, "+"));
subtractBtn.addEventListener("click", calculateResult.bind(this, "-"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "*"));
divideBtn.addEventListener("click", calculateResult.bind(this, "/"));
outputResult(currentResult, "");

/* This is a comment!
This is also a comment!
*/
/* Other shorthand operators
currentResult++; returns previous value then increments
++currentResult; returns new value after increment
currentResult--;

*/
