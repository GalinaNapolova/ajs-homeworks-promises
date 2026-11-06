import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((buffer) => json(buffer))
      .then((stringData) => JSON.parse(stringData));
  }
}
