import Store from "./Store.js";
import Base from "./addBoard/Base.js";
import Segment from "./addBoard/Segment.js";

export default function addBoard() {
  Store.scene.add(new Base());
  Store.scene.add(new Segment(0, 0));
}
