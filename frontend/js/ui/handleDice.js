import Store from "../Store";

export default function handleDice() {
  const $diceButton = document.querySelector(".dice__button");
  $diceButton.addEventListener("click", () => {
    Store.movesDice = [];

    $diceButton.querySelectorAll("img").forEach((img, i) => {
      const number = Math.floor(Math.random() * 6) + 1;
      Store.movesDice[i] = number;
      if (i == 1 && Store.movesDice[0] == number) {
        Store.movesDice.push(number, number);
      }
      img.src = `/dice/${number}.svg`;
    });
  });
}
