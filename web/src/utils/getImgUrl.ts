import { isEnvBrowser } from "./misc";

export default function getImgUrl(img: string) {
  return isEnvBrowser() ? `/${img}` : `nui://clean_loading/web/assets/${img}`;
}