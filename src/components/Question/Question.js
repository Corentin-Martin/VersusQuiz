import { useDispatch, useSelector } from 'react-redux';
import Speech from 'react-text-to-speech';
import {
  setPausedCountdownPlayerOne, setPausedCountdownPlayerTwo, setReady,
} from '../../actions/actions';
import './Question.scss';

function Question() {
  const questionOnGame = useSelector((state) => state.questionOnGame);
  const question = useSelector((state) => state.questions[questionOnGame]);
  const turn = useSelector((state) => state.turn);
  const showModal = useSelector((state) => state.showModal);

  const dispatch = useDispatch();

  const handleReady = () => {
    dispatch((turn === 1)
      ? setPausedCountdownPlayerOne(false)
      : setPausedCountdownPlayerTwo(false));
    dispatch(setReady(true));
  };

  const startBtn = (
    <button
      className="Question-button"
      onClick={handleReady}
      type="button"
    >Go !
    </button>
  );

  return (
    <div className="Question">
      {!showModal && (
      <>
        <p className="Question-text">Prêt à jouer ?</p>

        <Speech style={{ width: '60%' }} text={question.question} lang="fr" startBtn={startBtn} pitch={5} rate={5} />
      </>
      )}

    </div>
  );
}

export default Question;
