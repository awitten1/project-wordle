import Game from '../Game';
import Header from '../Header';
import Footer from '../Footer/Footer';
import { NUM_LETTERS, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { useState } from 'react';
import { sample } from '../../utils.js'
import { WORDS } from '../../data.js'
function App() {
  const [guesses, setGuesses] = useState([])
  const [answer, setAnswer] = useState(sample(WORDS))

  console.info({ answer });
  return (
    <div className="wrapper">
      <div className="game-wrapper">
        <Header setAnswer={() => { setAnswer(sample(WORDS)); } } clearState={() => {
          setGuesses([])
        }}/>
        <Game num_cols={NUM_LETTERS} num_rows={NUM_OF_GUESSES_ALLOWED}
          guesses={guesses} answer={answer}
        />
        <Footer guesses={guesses} answer={answer} updateGuessState={(newGuess) => {
          setGuesses([...guesses, newGuess])
        }}/>
      </div>
    </div>
  );
}

export default App;
