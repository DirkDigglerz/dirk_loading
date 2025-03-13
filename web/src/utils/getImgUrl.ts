import { isEnvBrowser } from "./misc";

export default function getImgUrl(img: string) {
  return isEnvBrowser() ? `./assets/${img}` : `nui://dirk_loading/web/assets/${img}`;
}