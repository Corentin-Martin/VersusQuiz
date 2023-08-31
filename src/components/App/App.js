import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Answer from '../Answer/Answer';
import Choice from '../Choice/Choice';
import PlayerTurn from '../PlayerTurn/PlayerTurn';
import Question from '../Question/Question';
import Header from '../Header/Header';
import './App.scss';
import Modal from '../Modal/Modal';
import Inscription from '../Inscription/Inscription';
import EndModal from '../EndModal/EndModal';
import QuestionReady from '../QuestionReady/QuestionReady';
import HeaderInscription from '../HeaderInscription/HeaderInscription';

function App() {
  const ready = useSelector((state) => state.ready);
  const showModal = useSelector((state) => state.showModal);
  const endGame = useSelector((state) => state.endGame);
  return (
    <div className="App">

      <Routes>
        <Route
          path="/"
          element={(
            <>
              <HeaderInscription />
              <Inscription />
            </>
      )}
        />
        <Route
          path="/game"
          element={(
            <>
              {showModal && <Modal />}
              {endGame && <EndModal />}
              <Header />
              {!endGame && (
              <><PlayerTurn />
                {!ready && <Question />}
                {ready && <QuestionReady />}
                <Choice />
                {ready && <Answer />}
              </>
              )}

            </>
)}
        />
      </Routes>

    </div>
  );
}

export default App;
