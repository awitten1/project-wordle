import Game from '../Game';
import Header from '../Header';
import Footer from '../Footer/Footer';
import { NUM_LETTERS, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { useState } from 'react';

function App() {
  const [guesses, setGuesses] = useState([])
  return (
    <div className="wrapper">
      <div className="game-wrapper">
        <Header />
        <Game num_cols={NUM_LETTERS} num_rows={NUM_OF_GUESSES_ALLOWED}
          guesses={guesses}
        />
        <Footer guesses={guesses} updateGuessState={(newGuess) => {
          setGuesses([...guesses, newGuess])
        }}/>
      </div>
    </div>
  );
}

export default App;
