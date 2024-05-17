import Store from "./Store.js";
import Base from "./addBoard/Base.js";
import Segment from "./addBoard/Segment.js";
import { BENCH_WIDTH, SEGMENT_WIDTH } from "./addBoard/consts.js";

export default function addBoard() {
  Store.scene.add(new Base());

  for (const z of [-1, 1]) {
    for (let x = -6; x <= 6; x++) {
      const xPosition =
        SEGMENT_WIDTH * x +
        ((BENCH_WIDTH / 2 - SEGMENT_WIDTH / 2) * x) / Math.abs(x);

      const zPosition = 0;

      Store.scene.add(new Segment(xPosition, zPosition, z == 1));
    }
  }
}
