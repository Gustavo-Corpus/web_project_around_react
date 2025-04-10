import { useState, useEffect } from 'react';

export default function NewCard({ handleAddPlaceSubmit }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isNameValid = name.trim().length > 0;
    const isLinkValid = link.trim().length > 0;
    setIsFormValid(isNameValid && isLinkValid);
  }, [name, link]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      handleAddPlaceSubmit({
        name,
        link
      });
    }
  };

  return (
    <form
      id="add-form"
      className="popup__form"
      name="add-card"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        className="popup__input popup__input_title"
        placeholder="Título"
        required
        minLength="2"
        maxLength="30"
        value={name}
        onChange={handleNameChange}
      />
      <span className="popup__error title-error"></span>
      <input
        type="url"
        name="link"
        className="popup__input popup__input_link"
        placeholder="Enlace a la imagen"
        required
        value={link}
        onChange={handleLinkChange}
      />
      <span className="popup__error link-error"></span>
      <button
        type="submit"
        className="popup__button"
        disabled={!isFormValid}
      >
        Crear
      </button>
    </form>
  );
}