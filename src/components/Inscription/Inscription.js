/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setChoice,
  setCountdownPlayerOne, setCountdownPlayerTwo, setEndGame,
  setPlayers, setReady, setTurn, updateScorePlayerOne, updateScorePlayerTwo,
} from '../../actions/actions';
import './Inscription.scss';

function Inscription() {
  const dispatch = useDispatch();
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');
  const [nameOk, setNameOk] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (playerOne === '' || playerTwo === '') {
      setNameOk(false);
    }
    else {
      dispatch(setPlayers(playerOne.replace(/([-'`~!@#$§%^&*(){}_|+=?;:'",.<>\\[\]\\/0-9])/gi, ''), playerTwo.replace(/([-'`~!@#$§%^&*(){}_|+=?;:'",.<>\\[\]\\/0-9])/gi, '')));
      dispatch(setEndGame(false));
      dispatch(setCountdownPlayerOne(60));
      dispatch(setCountdownPlayerTwo(60));
      dispatch(updateScorePlayerOne(0));
      dispatch(updateScorePlayerTwo(0));
      dispatch(setReady(false));
      setPlayerOne('');
      setPlayerTwo('');
      navigate('/game');
      dispatch(setTurn(1));
      dispatch(setChoice(''));
    }
  };

  return (
    <form className="Inscription" onSubmit={handleSubmit}>
      <label className="Inscription-label" htmlFor="playerOne">Joueur 1</label>
      <input
        className="Inscription-control"
        type="text"
        id="playerOne"
        aria-describedby="playerOneText"
        onChange={(event) => (setPlayerOne(event.currentTarget.value))}
        placeholder="Qui es-tu ?"
      />

      <label className="Inscription-label" htmlFor="playerTwo">Joueur 2</label>
      <input
        className="Inscription-control"
        type="text"
        id="playerTwo"
        aria-describedby="playerTwoText"
        onChange={(event) => (setPlayerTwo(event.currentTarget.value))}
        placeholder="Qui es-tu ?"
      />
      {!nameOk && <p className="Inscription-alert">Attention, vous devez renseigner le nom de chaque joueur avant de débuter la partie !</p>}
      <button type="submit" className="Inscription-button">Jouer</button>
    </form>
  );
}

export default Inscription;
