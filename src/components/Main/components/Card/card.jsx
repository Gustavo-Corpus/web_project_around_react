import { useContext } from "react";
import likeIcon from "../../../../images/like.svg";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function Card({ card, handleOpenPopup, onCardLike, onCardDelete, isLiked }) {
  const { currentUser } = useContext(CurrentUserContext);
  const { name, link } = card;
  const cardLikeButtonClassName = `elements__item-like ${  
    isLiked ? 'elements__item-like_active' : ''  
  }`;

  function handleLikeClick() {  
    onCardLike(card);  
  }  
  
  function handleDeleteClick() {  
    onCardDelete(card);  
  }

  const imageComponent = {
    children: (
      <>
        <img src={link} alt={name} className="popup__image" />
        <h3 className="popup__description">{name}</h3>
      </>
    )
  };

  return (
    <div className="elements__item">
      <button type="button" className="elements__delete"></button>
      <img 
        className="elements__item-image" 
        src={link} 
        alt={name} 
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <div className="elements__item-content">
        <h2 className="elements__item-title">{name}</h2>
        <button 
          type="button" 
          className="elements__item-button"
          onClick={handleLikeClick}
        >
          <img
            src={likeIcon}
            alt="Botón de like"
            className={cardLikeButtonClassName}
          />
        </button>
      </div>
    </div>
  );
}