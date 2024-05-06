import Game from "./Game";
import Publisher from "./Publisher";

export default interface GameDetail extends Game {
  description_raw: string;
  publishers: Publisher[];
}
