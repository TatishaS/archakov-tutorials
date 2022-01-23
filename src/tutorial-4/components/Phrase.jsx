import React from 'react';

function Phrase({ text }) {
  console.log(text);
  //<Phrase /> не должен получать массив фраз и генерировать внутри себя фразы. Он получает только проп text и рендерит одну фразу.
  return (
    <div className="block">
      <h3>{text}</h3>
    </div>
  );
}

export default Phrase;
