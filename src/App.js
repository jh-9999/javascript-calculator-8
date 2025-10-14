import { Console } from "@woowacourse/mission-utils";

const PLACEHOLDER = "덧셈할 문자열을 입력해 주세요.\n";

class App {
  async run() {
    const input = await userInput();
    
  }
}

async function userInput() {
  return await Console.readLineAsync(PLACEHOLDER);
}

export default App;
