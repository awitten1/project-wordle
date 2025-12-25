import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({num_cols, num_rows, guesses}) {
  console.log(guesses)
  return (
    <>
      <div className="guess-results">
        {
          range(num_rows).map((_, r) =>
            (
              <p className="guess" key={r}>
                {range(num_cols).map((_, c) =>
                  (
                  <span key={c} className="cell">
                    {r < guesses.length ? guesses[r][c] : ''}
                  </span>
                  )
                )}
              </p>
            )
          )
        }

      </div>
    </>
  );
}

export default Game;
