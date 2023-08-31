export const SET_PLAYERS = 'SET_PLAYERS';
export const setPlayers = (playerOne, playerTwo) => ({
  type: SET_PLAYERS,
  payload: {
    playerOne: playerOne,
    playerTwo: playerTwo,
  },
});

export const SET_CHOICE = 'SET_CHOICE';
export const setChoice = (choice) => ({
  type: SET_CHOICE,
  payload: {
    choice: choice,
  },
});

export const SET_ANSWER = 'SET_ANSWER';
export const setAnswer = (answer) => ({
  type: SET_ANSWER,
  payload: {
    answer: answer,
  },
});

export const UPDATE_SCORE_PLAYER_ONE = 'UPDATE_SCORE_PLAYER_ONE';
export const updateScorePlayerOne = (newScore) => ({
  type: UPDATE_SCORE_PLAYER_ONE,
  payload: {
    newScore: newScore,
  },
});

export const UPDATE_SCORE_PLAYER_TWO = 'UPDATE_SCORE_PLAYER_TWO';
export const updateScorePlayerTwo = (newScore) => ({
  type: UPDATE_SCORE_PLAYER_TWO,
  payload: {
    newScore: newScore,
  },
});

export const SET_TURN = 'SET_TURN';
export const setTurn = (turn) => ({
  type: SET_TURN,
  payload: {
    turn: turn,
  },
});

export const SET_QUESTION_ON_GAME = 'SET_QUESTION_ON_GAME';
export const setQuestionOnGame = (question) => ({
  type: SET_QUESTION_ON_GAME,
  payload: {
    questionOnGame: question,
  },
});

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  payload: {
    questions: questions,
  },
});

export const SET_SHOW_MODAL = 'SET_SHOW_MODAL';
export const setShowModal = (modal) => ({
  type: SET_SHOW_MODAL,
  payload: {
    showModal: modal,
  },
});

export const SET_GOOD_ANSWER = 'SET_GOOD_ANSWER';
export const setGoodAnswer = (good) => ({
  type: SET_GOOD_ANSWER,
  payload: {
    goodAnswer: good,
  },
});

export const SET_CORRECTION = 'SET_CORRECTION';
export const setCorrection = (correction) => ({
  type: SET_CORRECTION,
  payload: {
    correction: correction,
  },
});

export const SET_COUNTDOWN_PLAYER_ONE = 'SET_COUNTDOWN_PLAYER_ONE';
export const setCountdownPlayerOne = (time) => ({
  type: SET_COUNTDOWN_PLAYER_ONE,
  payload: {
    countdownPlayerOne: time,
  },
});

export const SET_COUNTDOWN_PLAYER_TWO = 'SET_COUNTDOWN_PLAYER_TWO';
export const setCountdownPlayerTwo = (time) => ({
  type: SET_COUNTDOWN_PLAYER_TWO,
  payload: {
    countdownPlayerTwo: time,
  },
});

export const SET_PAUSED_COUNTDOWN_PLAYER_TWO = 'SET_PAUSED_COUNTDOWN_PLAYER_TWO';
export const setPausedCountdownPlayerTwo = (bool) => ({
  type: SET_PAUSED_COUNTDOWN_PLAYER_TWO,
  payload: {
    pausedCountdownPlayerTwo: bool,
  },
});

export const SET_PAUSED_COUNTDOWN_PLAYER_ONE = 'SET_PAUSED_COUNTDOWN_PLAYER_ONE';
export const setPausedCountdownPlayerOne = (bool) => ({
  type: SET_PAUSED_COUNTDOWN_PLAYER_ONE,
  payload: {
    pausedCountdownPlayerOne: bool,
  },
});

export const SET_READY = 'SET_READY';
export const setReady = (ready) => ({
  type: SET_READY,
  payload: {
    ready: ready,
  },
});

export const SET_END_GAME = 'SET_END_GAME';
export const setEndGame = (bool) => ({
  type: SET_END_GAME,
  payload: {
    endGame: bool,
  },
});

export const SET_ASKED_QUESTION = 'SET_ASKED_QUESTION';
export const setAskedQuestion = (id) => ({
  type: SET_ASKED_QUESTION,
  payload: {
    askedQuestion: id,
  },
});
