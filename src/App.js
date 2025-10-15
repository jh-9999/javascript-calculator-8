import { Console } from "@woowacourse/mission-utils";

const PLACEHOLDER = "덧셈할 문자열을 입력해 주세요.\n";
const ERROR_MESSAGE = "[ERROR]";

class App {
  async run() {
    const input = await userInput();
    const checkedtext = checkError(input);
    if (!checkedtext) errorMessage();
    Console.print(checkedtext);
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

export default App;
