import Store from "../../Store";
import getCheckerZPos from "./getCheckerZPos";

export default function handleCheckerMove(target) {
  const parent = target.parent;
  const { x } = parent.position;
  Store.selectedChecker.position.x = x;
  Store.selectedChecker.position.z = getCheckerZPos(parent);
  Store.selectedChecker.userData.segment = parent.userData.index;
}
