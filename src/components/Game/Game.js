import React from 'react';

import { range } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';

function Game({num_cols, num_rows, guesses, answer}) {
  return (
    <>
      <div className="guess-results">
        {
          range(num_rows).map((_, r) =>  {
            let results;
            if (r < guesses.length) {
              results = checkGuess(guesses[r], answer)
            }

            return (
              <p className="guess" key={r}>
                {range(num_cols).map((_, c) =>
                  {
                    let className = "cell";
                    if (r < guesses.length) {
                      let status = results[c].status
                      className += " " + status
                    }
                    return (
                      <span key={c} className={className}>
                        {r < guesses.length ? guesses[r][c] : ''}
                      </span>
                    )
                  }
                )}
              </p>
            )
            }
          )
        }

      </div>
    </>
  );
}

export default Game;
