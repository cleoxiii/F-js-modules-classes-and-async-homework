import getURL from "./utils";
import { ADDRESS, PATH, PORT, REGION } from "./constant";

const url = getURL(ADDRESS, PORT, PATH);
const region = REGION;

export { url, region };
