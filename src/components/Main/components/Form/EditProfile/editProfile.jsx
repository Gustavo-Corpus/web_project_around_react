import { useState, useContext, useEffect } from 'react';  
import CurrentUserContext from '../../../../../contexts/CurrentUserContext';

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;  
  
  const [name, setName] = useState(currentUser.name);  
  const [description, setDescription] = useState(currentUser.about);  
  const [isFormValid, setIsFormValid] = useState(false);
  
  useEffect(() => {
    // Validación: los campos no pueden estar vacíos y debe haber algún cambio
    const isNameValid = name.trim().length > 0;
    const isDescriptionValid = description.trim().length > 0;
    const hasChanges = 
      name !== currentUser.name || 
      description !== currentUser.about;

    setIsFormValid(isNameValid && isDescriptionValid && hasChanges);
  }, [name, description, currentUser]);

  const handleNameChange = (event) => {  
    setName(event.target.value);  
  };  
  
  const handleDescriptionChange = (event) => {  
    setDescription(event.target.value);  
  };  
  
  const handleSubmit = (event) => {    
    event.preventDefault();    
    if (isFormValid) {  
      handleUpdateUser({ name, about: description });  
    }  
  };

  return (
    <form
      id="edit_form"
      className="popup__form"
      name="edit-profile"
      noValidate  
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        className="popup__input popup__input_name"
        placeholder="Nombre"
        required
        minLength="2"
        maxLength="40"
        value={name}  
        onChange={handleNameChange}
      />
      <span className="popup__error name-error"></span>
      <input
        type="text"
        name="job"
        className="popup__input popup__input_job"
        placeholder="Acerca de mí"
        required
        minLength="2"
        maxLength="200"
        value={description}  
        onChange={handleDescriptionChange}
      />
      <span className="popup__error job-error"></span>
      <button 
        type="submit" 
        className="popup__button" 
        disabled={!isFormValid}
      >
        Guardar
      </button>
    </form>
  );
}