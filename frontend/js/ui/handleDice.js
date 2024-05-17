import Store from "../Store";

export default function handleDice() {
  const $diceButton = document.querySelector(".dice__button");
  $diceButton.addEventListener("click", () => {
    Store.moves = [];

    $diceButton.querySelectorAll("img").forEach((img, i) => {
      const number = Math.floor(Math.random() * 6) + 1;
      Store.moves[i] = number;
      if (i == 1 && Store.moves[0] == number) {
        Store.moves.push(number, number);
      }
      img.src = `/dice/${number}.svg`;
    });
  });
}
