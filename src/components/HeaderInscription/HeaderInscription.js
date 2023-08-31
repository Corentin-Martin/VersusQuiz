import './HeaderInscription.scss';
import HeaderInscriptionInfo from './HeaderInscriptionInfo/HeaderInscriptionInfo';

function HeaderInscription() {
  return (
    <div className="HeaderInscription">
      <h1 className="HeaderInscription-h1">Versus Quiz</h1>
      <HeaderInscriptionInfo />
    </div>
  );
}

export default HeaderInscription;
