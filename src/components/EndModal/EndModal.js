import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './EndModal.scss';

function EndModal() {
  const playerOne = useSelector((state) => state.playerOne);
  const playerTwo = useSelector((state) => state.playerTwo);
  const scorePlayerOne = useSelector((state) => state.scorePlayerOne);
  const scorePlayerTwo = useSelector((state) => state.scorePlayerTwo);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (

    <div className="EndModal">
      <div className="EndModal-head">Fin de la partie !</div>
      {scorePlayerOne > scorePlayerTwo
        ? <p className="EndModal-text">Félicitations à {playerOne}, vainqueur avec {scorePlayerOne} point{scorePlayerOne > 1 ? 's' : ''} !</p>
        : <p className="EndModal-text">Félicitations à {playerTwo}, vainqueur avec {scorePlayerTwo} point{scorePlayerTwo > 1 ? 's' : ''} !</p> }
      <button type="button" className="EndModal-button" onClick={handleClick}>Rejouer ?</button>
    </div>

  );
}

export default EndModal;
