export default function EditProfile() {
    return (
        <form
        id="edit_form"
        className="popup__form"
        name="edit-profile"
        noValidate
      >
        <input
          type="text"
          name="name"
          className="popup__input popup__input_name"
          placeholder="Nombre"
          required
          minLength="2"
          maxLength="40"
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
        />
        <span className="popup__error job-error"></span>
        <button type="submit" className="popup__button" disabled>
          Guardar
        </button>
      </form>
    );
}