import './HeaderInscriptionInfo.scss';

function HeaderInscriptionInfo() {
  return (
    <div className="HeaderInscriptionInfo">
      <h3 className="HeaderInscriptionInfo-h3">Le jeu de culture générale en duel !</h3>
      <p className="HeaderInscriptionInfo-text">Qui sera le plus fort ?</p>
      <p className="HeaderInscriptionInfo-text">Les règles sont simples :</p>
      <ul>
        <li className="HeaderInscriptionInfo-text">60 secondes chacun pour répondre à un maximum de questions !</li>
        <li className="HeaderInscriptionInfo-text">Trois options à chaque question :
          duo (2 propositions, 1 point),
          carré (4 propositions, 3 points), cash (0 proposition, 5 points) !
        </li>
      </ul>
      <p className="HeaderInscriptionInfo-text">Bonne chance !</p>
    </div>
  );
}

export default HeaderInscriptionInfo;
