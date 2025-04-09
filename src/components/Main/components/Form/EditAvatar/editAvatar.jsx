import { useRef, useContext } from 'react';
import CurrentUserContext from '../../../../../contexts/CurrentUserContext';

export default function EditAvatar() {
  const avatarRef = useRef();
    const { onUpdateAvatar } = useContext(CurrentUserContext);  
  
    function handleSubmit(e) {  
        e.preventDefault();  
          
        onUpdateAvatar({  
            avatar: avatarRef.current.value,  
        });  
    }

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
          ref={avatarRef}
        />
        <span className="popup__error avatar-error"></span>
        <button type="submit" className="popup__button" disabled>
          Guardar
        </button>
      </form>
    );
}