export const NUM_OF_GUESSES_ALLOWED = 6;
export const NUM_LETTERS = 5;
export const CORRECT = 2;
export const MISPLACED = 1;
export const INCORRECT = 0;
export const STRING_TO_INT = {
  incorrect: INCORRECT,
  correct: CORRECT,
  misplaced: MISPLACED
}
export const INT_TO_STRING = {
  [INCORRECT]: 'incorrect',
  [CORRECT]: 'correct',
  [MISPLACED]: 'misplaced'
}