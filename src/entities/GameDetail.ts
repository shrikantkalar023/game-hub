import { Game } from "./Game";
import { Publisher } from "./Publisher";

export interface GameDetail extends Game {
  description_raw: string;
  publishers: Publisher[];
}
