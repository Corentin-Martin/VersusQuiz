import { useDispatch, useSelector } from 'react-redux';
import {
  setChoice,
  setCorrection, setGoodAnswer, setReady, setShowModal,
} from '../../actions/actions';
import './Modal.scss';

function Modal() {
  const turn = useSelector((state) => state.turn);
  const countOne = useSelector((state) => state.countdownPlayerOne);
  const playerOne = useSelector((state) => state.playerOne);
  const playerTwo = useSelector((state) => state.playerTwo);
  const scorePlayerOne = useSelector((state) => state.scorePlayerOne);
  const scorePlayerTwo = useSelector((state) => state.scorePlayerTwo);

  const showModal = useSelector((state) => state.showModal);
  const goodAnswer = useSelector((state) => state.goodAnswer);
  const correction = useSelector((state) => state.correction);

  const dispatch = useDispatch();

  if (showModal) {
    setTimeout(() => {
      dispatch(setShowModal(false));
      dispatch(setCorrection(''));
      dispatch(setGoodAnswer(null));
      dispatch(setReady(null));
      dispatch(setChoice(''));
    }, 2500);
  }

  return (
    <div className={goodAnswer ? 'Modal Modal-true' : 'Modal Modal-false'}>
      {goodAnswer
        ? (
          <div className="Modal-box">
            <div className="Modal-head">Bonne réponse !</div>
            {(turn === 2 && countOne > 0)
              ? <p className="Modal-text">{playerOne} a maintenant {scorePlayerOne} point{scorePlayerOne > 1 ? 's' : ''} !</p>
              : <p className="Modal-text">{playerTwo} a maintenant {scorePlayerTwo} point{scorePlayerTwo > 1 ? 's' : ''} !</p>}
          </div>
        )
        : (
          <div className="Modal-box">
            <div className="Modal-head">Aïe, mauvaise réponse !</div>
            <p className="Modal-text">Il fallait répondre : {correction}. </p>
            {turn === 2
              ? <p className="Modal-text">{playerOne} reste à {scorePlayerOne} point{scorePlayerOne > 1 ? 's' : ''} !</p>
              : <p className="Modal-text">{playerTwo} reste à {scorePlayerTwo} point{scorePlayerTwo > 1 ? 's' : ''} !</p>}
          </div>
        )}
    </div>

  );
}

export default Modal;
