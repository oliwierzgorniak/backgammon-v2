import Store from "./Store.js";
import Base from "./addBoard/Base.js";

export default function addBoard() {
  Store.scene.add(new Base());
}
