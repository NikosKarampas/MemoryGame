import './SingleCard.css';

const SingleCard = ({ card, handleChoice, flipped }) => {
    return ( 
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front" />
                <img 
                    className="back" 
                    src="/img/cover.png" 
                    alt="card back" 
                    onClick={() => handleChoice(card)} 
                />
            </div>
        </div>
    );
}
 
export default SingleCard;