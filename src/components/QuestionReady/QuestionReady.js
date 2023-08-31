import { useSelector } from 'react-redux';
import './QuestionReady.scss';

function QuestionReady() {
  const questionOnGame = useSelector((state) => state.questionOnGame);
  const question = useSelector((state) => state.questions[questionOnGame]);

  return (
    <div className="QuestionReady">

      <h3 className="QuestionReady-title">Question :</h3>
      <p className="QuestionReady-text">{question.question}</p>

    </div>
  );
}

export default QuestionReady;
