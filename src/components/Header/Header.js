import { useSelector } from 'react-redux';
import './Header.scss';

function Header() {
  const playerOne = useSelector((state) => state.playerOne);
  const playerTwo = useSelector((state) => state.playerTwo);
  const scorePlayerOne = useSelector((state) => state.scorePlayerOne);
  const scorePlayerTwo = useSelector((state) => state.scorePlayerTwo);
  const countdownPlayerOne = useSelector((state) => state.countdownPlayerOne);
  const countdownPlayerTwo = useSelector((state) => state.countdownPlayerTwo);

  const object = [
    { pseudo: playerOne, score: scorePlayerOne, countdown: countdownPlayerOne },
    { pseudo: playerTwo, score: scorePlayerTwo, countdown: countdownPlayerTwo },
  ];

  return (
    <div className="Header">
      <h1 className="Header-h1">Versus Quiz</h1>
      <div className="Header-players">
        {object.map((player) => (
          <div className="Header-col" key={player.pseudo}>
            <p className="Header-pseudo">{player.pseudo}</p>
            <p className="Header-points">{player.score} point{player.score > 1 ? 's' : ''}</p>
            <div className="Header-time"><p>Temps restant :</p> <span className="Header-time-count">{player.countdown} seconde{player.countdown > 1 ? 's' : ''}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
