import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Speech from 'react-text-to-speech';
import { setChoice } from '../../actions/actions';
import './Choice.scss';

function Choice() {
  const dispatch = useDispatch();
  const choice = useSelector((state) => state.choice);
  const ready = useSelector((state) => state.ready);

  const [make, setMake] = useState(false);

  const questionOnGame = useSelector((state) => state.questionOnGame);
  const question = useSelector((state) => state.questions[questionOnGame]);

  useEffect(() => {
    setMake(false);
  }, [ready]);

  const duoOptions = question.duo_options.toString();
  const squareOptions = question.square_options.toString();

  const duoButton = (
    <button
      type="button"
      className="Choice-button Choice-button-duo"
      onClick={() => {
        dispatch(setChoice('duo'));
        setMake(true);
      }}
    >Duo
    </button>
  );

  const squareButton = (
    <button
      type="button"
      className="Choice-button Choice-button-square"
      onClick={() => {
        dispatch(setChoice('square'));
        setMake(true);
      }}
    >Carré
    </button>
  );

  return (
    <div className={!ready ? 'Choice Choice--d-none' : 'Choice'}>

      {!make && (
      <>
        <Speech
          style={{ width: '100%' }}
          text={duoOptions}
          lang="fr"
          startBtn={duoButton}
          pitch={5}
          rate={5}
        />
        <Speech
          style={{ width: '100%' }}
          text={squareOptions}
          lang="fr"
          startBtn={squareButton}
          pitch={5}
          rate={5}
        />

        <button
          style={{ width: '100%' }}
          type="button"
          className="Choice-button Choice-button-cash"
          onClick={() => {
            dispatch(setChoice('cash'));
            setMake(true);
          }}
        >Cash
        </button>
      </>
      )}
      {choice === 'duo' && <button type="button" className="Choice-button Choice-button-duo">Duo (1 point)</button>}
      {choice === 'square' && <button type="button" className="Choice-button Choice-button-square">Carré (3 points)</button>}
      {choice === 'cash' && <button type="button" className="Choice-button Choice-button-cash">Cash (5 points)</button>}

    </div>
  );
}

export default Choice;
