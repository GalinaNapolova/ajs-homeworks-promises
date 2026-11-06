import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then((saving) => {
  console.log('Сохранение успешно загружено:', saving);
}).catch((error) => {
  console.error('Ошибка загрузки сохранения:', error);
});

