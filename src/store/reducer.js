import {
  SET_ASKED_QUESTION,
  SET_CHOICE, SET_CORRECTION, SET_COUNTDOWN_PLAYER_ONE,
  SET_COUNTDOWN_PLAYER_TWO, SET_END_GAME, SET_GOOD_ANSWER, SET_PAUSED_COUNTDOWN_PLAYER_ONE,
  SET_PAUSED_COUNTDOWN_PLAYER_TWO, SET_PLAYERS,
  SET_QUESTIONS,
  SET_QUESTION_ON_GAME, SET_READY, SET_SHOW_MODAL, SET_TURN,
  UPDATE_SCORE_PLAYER_ONE, UPDATE_SCORE_PLAYER_TWO,
} from '../actions/actions';
import data from '../data/data';

const initialState = {
  choice: '',
  playerOne: '',
  playerTwo: '',
  scorePlayerOne: 0,
  scorePlayerTwo: 0,
  turn: 0,
  countdownPlayerOne: 60,
  countdownPlayerTwo: 60,
  pausedCountdownPlayerOne: true,
  pausedCountdownPlayerTwo: true,
  questionOnGame: Math.floor(Math.random() * data.length),
  askedQuestions: [],
  showModal: false,
  endGame: false,
  goodAnswer: null,
  correction: '',
  ready: null,
  questions: data,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CHOICE:
      return {
        ...state,
        choice: action.payload.choice,
      };

    case UPDATE_SCORE_PLAYER_ONE:
      return {
        ...state,
        scorePlayerOne: state.scorePlayerOne + action.payload.newScore,

      };

    case UPDATE_SCORE_PLAYER_TWO:
      return {
        ...state,
        scorePlayerTwo: state.scorePlayerTwo + action.payload.newScore,

      };

    case SET_TURN:
      return {
        ...state,
        turn: action.payload.turn,
      };

    case SET_QUESTION_ON_GAME:
      return {
        ...state,
        questionOnGame: action.payload.questionOnGame,
      };

    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload.showModal,
      };

    case SET_GOOD_ANSWER:
      return {
        ...state,
        goodAnswer: action.payload.goodAnswer,
      };

    case SET_CORRECTION:
      return {
        ...state,
        correction: action.payload.correction,
      };

    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload.questions,
      };

    case SET_PLAYERS:
      return {
        ...state,
        playerOne: action.payload.playerOne,
        playerTwo: action.payload.playerTwo,
      };

    case SET_COUNTDOWN_PLAYER_ONE:
      return {
        ...state,
        countdownPlayerOne: action.payload.countdownPlayerOne,

      };

    case SET_COUNTDOWN_PLAYER_TWO:
      return {
        ...state,
        countdownPlayerTwo: action.payload.countdownPlayerTwo,

      };

    case SET_PAUSED_COUNTDOWN_PLAYER_ONE:
      return {
        ...state,
        pausedCountdownPlayerOne: action.payload.pausedCountdownPlayerOne,

      };

    case SET_PAUSED_COUNTDOWN_PLAYER_TWO:
      return {
        ...state,
        pausedCountdownPlayerTwo: action.payload.pausedCountdownPlayerTwo,

      };

    case SET_READY:
      return {
        ...state,
        ready: action.payload.ready,

      };

    case SET_END_GAME:
      return {
        ...state,
        endGame: action.payload.endGame,

      };

    case SET_ASKED_QUESTION:
      return {
        ...state,
        askedQuestions: [...state.askedQuestions, action.payload.askedQuestion],
      };

    default:
      return state;
  }
}

export default reducer;
