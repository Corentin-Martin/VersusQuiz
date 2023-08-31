import { useSelector } from 'react-redux';
import './PlayerTurn.scss';

function PlayerTurn() {
  const turn = useSelector((state) => state.turn);
  const playerOne = useSelector((state) => state.playerOne);
  const playerTwo = useSelector((state) => state.playerTwo);
  return (
    <div className="PlayerTurn">
      {turn > 0 && (
      <>
        <h4 className="PlayerTurn-intro">C'est au tour de :</h4>
        <p className="PlayerTurn-badge"> {turn === 1 ? playerOne : playerTwo}</p>
      </>
      )}

    </div>
  );
}

export default PlayerTurn;
