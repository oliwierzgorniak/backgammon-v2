interface Game {}

interface IStore {
  games: [];
  playerSearching: null | number;
}

const Store: IStore = {
  games: [],
  playerSearching: null,
};

export default Store;
