import { useState } from 'react';
import { NUM_LETTERS, NUM_OF_GUESSES_ALLOWED, STRING_TO_INT, INT_TO_STRING } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Footer({guesses, updateGuessState, answer}) {
  return (
    <Form guesses={guesses} answer={answer} updateGuessState={updateGuessState}/>
  )
}

function Form({guesses, updateGuessState, answer}) {
  const [guess, setGuess] = useState('')

  let input;
  let won = answer === guesses.at(-1)
  if (won) {
    input = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong>
          {' '}
          <strong>{guesses.length} guesses</strong>.
        </p>
      </div>
    )
  }
  else if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
    input = (
      <input minLength={NUM_LETTERS} maxLength={NUM_LETTERS}
          required id="guess-input" type="text" value={guess}
        onChange={(event) => {
          setGuess(event.target.value);
        } }
      />
    )
  } else {
    input = (
      <div class="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  }

  const letterStatus = new Map()
  for (let guess of guesses) {
    const res = checkGuess(guess, answer)
    for (let {letter, status} of res) {
      status = STRING_TO_INT[status];
      if (letterStatus.has(letter)) {
        if (status > letterStatus.get(letter)) {
          letterStatus.set(letter, status)
        }
      } else {
        letterStatus.set(letter, status)
      }
    }
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={(event) => {
          event.preventDefault();
          updateGuessState(guess)
        }
        }>
        <label htmlFor="guess-input">Enter guess:</label>
        {input}
      </form>
      <KeyBoard letterStatus={letterStatus}/>
      <PastGuesses guesses={guesses}/>
    </>
  )
}

function KeyBoard({ letterStatus }) {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()];
  const krange = (start,end) => {
    return (
      <p className='keyboard-row'>
        {
        range(start,end).map((i) => {
          let status = letterStatus.get(alphabet[i])
          status = INT_TO_STRING[status] || 'unguessed';
          return (
            <span key={alphabet[i]} className={"keyboard letter " +  status}>
              {alphabet[i]}
            </span>
          )
        })
      }
      </p>
    )
  };
  return (
    <div>
      {(() => {
        return (
          <>
          {krange(0,9)}
          {krange(9,17)}
          {krange(17,26)}
          </>
        )
      })()}
    </div>
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


export default Footer;