import { Console } from "@woowacourse/mission-utils";

const PLACEHOLDER = "덧셈할 문자열을 입력해 주세요.\n";
const ERROR_MESSAGE = "[ERROR]";
let DELIMITER = [",",":"]

class App {
  async run() {
    const text = await userInput();
    const checkedtext = checkError(text);
    if (!checkedtext) errorMessage();
    findCustomDelimiter(text)
  }
}

async function userInput() {
  return await Console.readLineAsync(PLACEHOLDER);
}

function checkError(text) {
  const checkedtext =text.replace(/[^\d]/g, "");
  return checkedtext ? true : false;
}

function errorMessage() {
  throw new Error(ERROR_MESSAGE);
}

function calculate(text) {

}

function findCustomDelimiter(text) {
  while (true) {
    let startIndex = text.indexOf("//");
    if (startIndex == -1) break;
    let endIndex = text.indexOf("\\n", startIndex);
    
    if (endIndex - startIndex == 3 ) {
      DELIMITER.push(text[startIndex + 2]);
      text = text.slice(endIndex + 1);
    } else {
      text = text.slice(startIndex + 2);
      continue;
    }
  }
  DELIMITER = [...new Set(DELIMITER)];
  Console.print(DELIMITER);
}

export default App;
