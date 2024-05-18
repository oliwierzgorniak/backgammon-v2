import Store from "./Store.js";
import Base from "./addBoard/Base.js";
import Segment from "./addBoard/Segment.js";
import { BENCH_WIDTH, SEGMENT_WIDTH } from "./addBoard/consts.js";
import positionDict from "./addBoard/positionDict.js";

export default function addBoard() {
  Store.scene.add(new Base());

  for (const z of [-1, 1]) {
    for (const x of [-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6]) {
      const xPosition =
        SEGMENT_WIDTH * x +
        ((BENCH_WIDTH / 2 - SEGMENT_WIDTH / 2) * x) / Math.abs(x);

      const index = positionDict[z][x];
      Store.scene.add(new Segment(xPosition, 0, index, z == 1));
    }
  }
}
