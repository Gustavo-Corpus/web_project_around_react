export default function EditAvatar() {
    return (
        <form
        id="avatar_form"
        className="popup__form"
        name="update-avatar"
        noValidate
      >
        <input
          type="url"
          name="avatar"
          className="popup__input popup__input_avatar"
          placeholder="Enlace a la imagen"
          required
        />
        <span className="popup__error avatar-error"></span>
        <button type="submit" className="popup__button" disabled>
          Guardar
        </button>
      </form>
    );
}