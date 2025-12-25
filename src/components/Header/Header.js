import React, {useState} from 'react';
import { NUM_LETTERS } from '../../constants';

function Header({guesses, updateGuessState}) {
  return (
    <>
    <header>
      <h1>Word Game</h1>
    </header>
    <Form guesses={guesses} updateGuessState={updateGuessState}/>
    </>
  );
}

function Form({guesses, updateGuessState}) {
  const [guess, setGuess] = useState('')

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={(event) => {
          event.preventDefault();
          updateGuessState(guess)
        }
        }>
        <label htmlFor="guess-input">Enter guess:</label>
        <input minLength={NUM_LETTERS} maxLength={NUM_LETTERS}
           required id="guess-input" type="text" value={guess}
          onChange={(event) => {
            setGuess(event.target.value);
          } } />
      </form>
      <PastGuesses guesses={guesses}/>
    </>
  )
}

function PastGuesses({ guesses }) {

  return (
    <div className="guess-results">
      {guesses.map((guess,i) => (
        <p key={i} className="guess">
          {guess}
        </p>
        )
    )}
    </div>
  )
}

export default Header;
