import { useEffect, useState } from 'react';
import Footer from './Footer/footer.jsx';
import Header from '../components/Header/Header';
import Main from './Main/main.jsx';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  useEffect(() => {  
    api.getUserInfo().then((data) => {  
      setCurrentUser(data);  
    });  
  
    api.getCardList().then((data) => {  
      setCards(data); // No necesitamos modificar los datos  
    });  
}, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  async function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya les has dado like
    const isLiked = card.isLiked;
    
    try {
        // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
        const newCard = await api.changeLikeCardStatus(card._id, isLiked);
        setCards((state) => state.map((currentCard) => 
            currentCard._id === card._id ? newCard : currentCard
        ));
    } catch (error) {
        console.error(error);
    }
}

  const handleAddPlaceSubmit = (data) => {    
    api.addCard(data)    
      .then((newCard) => {    
        setCards([newCard, ...cards]); // La nueva tarjeta ya viene con la estructura correcta  
        handleClosePopup();    
      })    
      .catch((error) => console.error(error));    
};

  const handleOpenPopup = (popupData) => {
    setPopup(popupData);
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className='page__content'>
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
          onCardLike={handleCardLike}
          onAddPlace={handleAddPlaceSubmit}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;