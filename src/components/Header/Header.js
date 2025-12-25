import React, {useState} from 'react';

import '../../reset.css';
import '../../styles.css';

function Header({setAnswer, clearState}) {
  return (
    <>
    <header>
      <h1>Word Game</h1>
      <button id="start-over" onClick={() => {
        clearState();
        setAnswer();
      }}>
        Start Over
      </button>
    </header>
    </>
  );
}


export default Header;
