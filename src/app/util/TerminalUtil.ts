import { terminal } from "terminal-kit";

export default class TerminalUtil {
  static titulo(text: string) {
    terminal.clear();
    terminal.magenta(`${text}\n`);
    terminal.magenta(`-`.repeat(text.length) + `\n`);
  }
}
