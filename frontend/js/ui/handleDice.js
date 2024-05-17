import Store from "../Store";

export default function handleDice() {
  const $diceButton = document.querySelector(".dice__button");
  $diceButton.addEventListener("click", () => {
    $diceButton.querySelectorAll("img").forEach((img, i) => {
      const number = Math.floor(Math.random() * 6) + 1;
      Store.dice[i] = number;
      img.src = `/dice/${number}.svg`;
    });
  });
}
