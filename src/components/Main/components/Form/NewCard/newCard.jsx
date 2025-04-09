import { useState } from 'react';

export default function NewCard({ onAddPlace }) {
  const [name, setName] = useState('');  
  const [link, setLink] = useState('');  
  
  const handleSubmit = (e) => {  
      e.preventDefault();  
      onAddPlace({  
          name,  
          link  
      });  
  };

    return (
    <form 
      id="add_form" 
      className="popup__form" 
      name="add-card" 
      noValidate
      onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          className="popup__input popup__input_title"
          placeholder="Título"
          required
          minLength="2"
          maxLength="30"
          value={name}  
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__error title-error"></span>
        <input
          type="url"
          name="link"
          className="popup__input popup__input_link"
          placeholder="Enlace a la imagen"
          required
          value={link}  
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="popup__error link-error"></span>
        <button type="submit" className="popup__button" disabled>
          Crear
        </button>
    </form>
    );
}