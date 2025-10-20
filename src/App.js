import { Console } from "@woowacourse/mission-utils";

const PLACEHOLDER = "덧셈할 문자열을 입력해 주세요.\n";
const RESULT_MESSAGE = "결과 : ";
const ERROR_MESSAGE = "[ERROR]";

let answer = 0;
let delimiter = new Set([",",":"]);

class App {
  async run() {
    const text = await userInput();
    const checkedtext = checkError(text);
    if (!checkedtext) errorMessage();
    findCustomDelimiter(text)
    calculate(text)
    Console.print(RESULT_MESSAGE + answer);
  }
}

async function userInput() {
  return await Console.readLineAsync(PLACEHOLDER);
}

function checkError(text) {
  const checkedtext = text.match(/-/g);
  return checkedtext ? false : true;
}

function errorMessage() {
  throw new Error(ERROR_MESSAGE);
}

function findCustomDelimiter(text) {
  while (true) {
    let startIndex = text.indexOf("//");
    if (startIndex == -1) break;
    let endIndex = text.indexOf("\\n", startIndex);
    
    if (endIndex - startIndex == 3 ) {
      delimiter.add(text[startIndex + 2]);
      text = text.slice(endIndex + 1);
    } else {
      text = text.slice(startIndex + 2);
      continue;
    }

    Console.print(delimiter);
  }
}

function getDelimiterIndex(text) {
  for (let i = 0; i < text.length; i++) {
    if (delimiter.has(text[i])) return i;
  }
  return -1;
}

function getNumber(text) {
  const number = text.match(/\d+/);
  if (number) answer += Number(number);
}

function calculate(text) {
  while (true) {
    let delimiterIndex = getDelimiterIndex(text);
    if (delimiterIndex == -1) {
      getNumber(text);
      break;
    }
    let slicedText = text.slice(0, delimiterIndex + 1);
    text = text.slice(delimiterIndex + 1);
    getNumber(slicedText);
  }
}

export default App;
