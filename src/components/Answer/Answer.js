/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAskedQuestion,
  setChoice, setCorrection, setCountdownPlayerOne, setCountdownPlayerTwo, setEndGame, setGoodAnswer,
  setPausedCountdownPlayerOne,
  setPausedCountdownPlayerTwo,
  setQuestionOnGame, setQuestions, setReady, setShowModal, setTurn,
  updateScorePlayerOne, updateScorePlayerTwo,
} from '../../actions/actions';
import './Answer.scss';

function Answer() {
  const choice = useSelector((state) => state.choice);
  const questionOnGame = useSelector((state) => state.questionOnGame);
  const question = useSelector((state) => state.questions[questionOnGame]);
  const questions = useSelector((state) => state.questions);
  const turn = useSelector((state) => state.turn);
  const pointsRepartition = [
    { choice: 'duo', points: 1 },
    { choice: 'square', points: 3 },
    { choice: 'cash', points: 5 },
  ];

  const [answer, setAnswer] = useState('');
  const [next, setNext] = useState(true);
  const [radioValue, setRadioValue] = useState('');

  const pausedCountdownPlayerOne = useSelector((state) => state.pausedCountdownPlayerOne);
  const pausedCountdownPlayerTwo = useSelector((state) => state.pausedCountdownPlayerTwo);
  const [countOne, setCountOne] = useState(useSelector((state) => state.countdownPlayerOne));
  const [countTwo, setCountTwo] = useState(useSelector((state) => state.countdownPlayerTwo));

  const dispatch = useDispatch();

  const nextQuestion = () => {
    const index = questions.indexOf(question);
    questions.splice(index, 1);

    dispatch(setQuestions(questions));

    const random = Math.floor(Math.random() * questions.length);

    dispatch(setQuestionOnGame(random));
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      if (answer === '') {
        setNext(false);
        return;
      }
    }

    if (answer.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() === question.good_answer.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()) {
      const { points } = pointsRepartition.find((element) => (element.choice === choice));

      dispatch(
        (turn === 1) ? updateScorePlayerOne(points) : updateScorePlayerTwo(points),
      );
      dispatch(setGoodAnswer(true));
    }
    else {
      dispatch(setGoodAnswer(false));
      dispatch(setCorrection(question.good_answer));
    }

    setAnswer('');
    dispatch(setTurn((turn === 1 || countOne === 0) ? 2 : 1));
    dispatch(setChoice(''));
    dispatch(setAskedQuestion(question.id));
    setRadioValue('');
    dispatch(setShowModal(true));
    dispatch(setReady(false));
    dispatch((turn === 1)
      ? setPausedCountdownPlayerOne(true)
      : setPausedCountdownPlayerTwo(true));
    nextQuestion();
  };

  useEffect(() => {
    dispatch(setCountdownPlayerOne(countOne));

    if (countOne === 0 && !pausedCountdownPlayerOne) {
      if (countTwo === 0) {
        dispatch(setEndGame(true));
        dispatch(setPausedCountdownPlayerOne(true));
      }
      else {
        handleSubmit();
      }
    }
  }, [countOne]);

  useEffect(() => {
    dispatch(setCountdownPlayerTwo(countTwo));

    if (countTwo === 0 && !pausedCountdownPlayerTwo) {
      if (countOne === 0) {
        dispatch(setEndGame(true));
        dispatch(setPausedCountdownPlayerTwo(true));
      }
      else {
        handleSubmit();
      }
    }
  }, [countTwo]);

  useEffect(() => {
    let timer;
    if (turn === 1 && !pausedCountdownPlayerOne) {
      timer = setInterval(() => {
        setCountOne((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [pausedCountdownPlayerOne]);

  useEffect(() => {
    let timer;
    if (turn === 2 && !pausedCountdownPlayerTwo) {
      timer = setInterval(() => {
        setCountTwo((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [pausedCountdownPlayerTwo]);

  return (
    <div className="Answer">
      <form onSubmit={handleSubmit} className="Answer-form">
        {choice === 'cash' && (
        <div className="Answer-form-cash">
          <label htmlFor="answer-cash" className="Answer-form-cash-label">Votre réponse</label>
          <input
            type="text"
            id="answer-cash"
            className="Answer-form-cash-input"
            onChange={(event) => setAnswer(event.currentTarget.value)}
            placeholder="Entrez votre réponse ici..."
          />
        </div>
        )}
        {choice === 'duo' && (
        <div className="Answer-form-duo">
            {question.duo_options.map((option) => (
              <label className="Answer-form-duo-label" htmlFor={option}>
                <input
                  className="Answer-form-duo-input"
                  key={option}
                  id={option}
                  type="radio"
                  value={option}
                  checked={radioValue === option}
                  onChange={(e) => {
                    setRadioValue(e.currentTarget.value);
                    setAnswer(option);
                  }}
                />
                {option}
              </label>
            ))}
        </div>
        )}
        {choice === 'square' && (
          <div className="Answer-form-square">
            {question.square_options.map((option) => (
              <label htmlFor={option} className="Answer-form-square-label">
                <input
                  className="Answer-form-square-input"
                  key={option}
                  id={option}
                  type="radio"
                  value={option}
                  checked={radioValue === option}
                  onChange={(e) => {
                    setRadioValue(e.currentTarget.value);
                    setAnswer(option);
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        )}
        {choice !== '' && (
        <>
          {!next && <p className="Answer-alert">Vous ne pouvez pas envoyer de réponse vide !</p>}
          <button className="Answer-form-button" type="submit">Envoyer</button>
        </>
        )}

      </form>
    </div>
  );
}

export default Answer;
