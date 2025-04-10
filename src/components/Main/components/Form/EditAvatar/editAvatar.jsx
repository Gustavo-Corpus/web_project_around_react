import { useState, useContext, useEffect } from 'react';
import CurrentUserContext from '../../../../../contexts/CurrentUserContext';

export default function EditAvatar() {
  const [avatarLink, setAvatarLink] = useState('');
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const [isFormValid, setIsFormValid] = useState(false);
  const { onUpdateAvatar } = useContext(CurrentUserContext); 

  useEffect(() => {  
    setIsFormValid(avatarLink.trim().length > 0);  
  }, [avatarLink]);

  const handleAvatarChange = (event) => {  
    setAvatarLink(event.target.value);  
  };
  
  const handleSubmit = (event) => {  
    event.preventDefault();  
    if (isFormValid) {  
      handleUpdateAvatar(avatarLink);  
    }  
  };

    return (
        <form
        id="avatar_form"
        className="popup__form"
        name="update-avatar"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          type="url"
          name="avatar"
          className="popup__input popup__input_avatar"
          placeholder="Enlace a la imagen"
          required
          value={avatarLink}  
          onChange={handleAvatarChange}
        />
        <span className="popup__error avatar-error"></span>
        <button 
        type="submit" 
        className="popup__button" 
        disabled={!isFormValid}>
          Guardar
        </button>
      </form>
    );
}