import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { THEME_TILES_MAP, MINERAL_HEALTH } from "../helpers/consts";

export class TopsoilPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.health = MINERAL_HEALTH.TOPSOIL;
  }

  isSolidForBody(_body) {
    return true;
  }

  isMinable() {
    return true;
  }

  renderComponent() {
    const TopsoilTileCoord = THEME_TILES_MAP[this.level.theme].TOP;
    return <Sprite frameCoord={TopsoilTileCoord} />;
  }
}