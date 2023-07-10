import React, { useState } from "react";
import style from "./EmailForm.module.scss";

const EmailFrom = ({ openModal }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isEmailValid = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      setError("Opa! Preencha o campo de email antes de enviar.");
    } else if (!isEmailValid(email)) {
      setError("Opa! Digite um email válido, exemple@email.com");
    } else {
      setError("");
      // Chamar a função openModal para enviar o email
      openModal();
      setEmail('');
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  return (
    <section className={style.newsletter}>
      <form
        className={style.newsletter__form}
        onSubmit={handleSubmit}
        noValidate
      >
        <p>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </p>
        <div className={style.newsletter__email__container}>
          <input
            type="email"
            placeholder="Digite seu Email..."
            value={email}
            onChange={handleChange}
          />
          <button className={style.submit} type="submit">
            Enviar
          </button>
        </div>
        {error && (
          <p className={style.error}>
            <svg viewBox="0 0 512 512">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
            {error}
          </p>
        )}
      </form>
    </section>
  );
};

export default EmailFrom;
