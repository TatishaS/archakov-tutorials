import React from 'react';
import Phrase from './components/Phrase';
import EmptyBlock from './components/EmptyBlock';

function App() {
  const adjectivesArr = [
    'абсолютный',
    'адский',
    'азартный',
    'активный',
    'ангельский',
    'астрономический',
    'баснословный',
    'безбожный',
    'безбрежный',
    'безвозвратный',
    'безграничный',
    'бездонный',
    'бездушный',
    'безжалостный',
    'замечательно',
    'замечательный',
    'записной',
    'запредельный',
    'заядлый',
    'звериный',
    'зверский',
    'зеленый',
    'злой',
    'злостный',
    'значительный',
    'неоспоримый',
    'неотразимый',
    'неоценимый',
    'непередаваемый',
  ];

  const nounsArr = [
    'лгун',
    'день',
    'конь',
    'олень',
    'человек',
    'программист',
    'ребёнок',
    'конец',
    'город',
    'дурак',
  ];

  //При нажатии на кнопку "Сгенерировать" в начало массива (с помощью useState), нужно добавить случайную фразу (текстовую фразу).

  //Когда человек нажмёт на "Очистить", нужно заменять стейт на пустой массив.

  //Когда нет фраз в массиве, выводить компонент <EmptyBlock />, когда фразы появились, рендерить список из компонентов <Phrase />.

  //Стейт с массивом фраз хранить в App. Рендерить список фраз тоже внутри App.

  const [phrasesList, setPhrasesList] = React.useState([]);

  const newWord = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const phraseTemplate = () => {
    return `${newWord(adjectivesArr)} ${newWord(adjectivesArr)} ${newWord(
      nounsArr
    )}`;
  };

  const handleGenerate = e => {
    const newPhrase = phraseTemplate();
    console.log(newPhrase);

    setPhrasesList([newPhrase, ...phrasesList]);
  };

  const handleClearList = e => {
    setPhrasesList([]);
  };

  return (
    <div className="wrapper">
      {phrasesList.length !== 0 ? (
        <ul className="list">
          {phrasesList.map((phrase, index) => (
            <Phrase text={phrase} key={index} />
          ))}
        </ul>
      ) : (
        <EmptyBlock />
      )}
      <button className="btn btn_generate" onClick={handleGenerate}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={handleClearList}>
        Очистить
      </button>
    </div>
  );
}

export default App;
