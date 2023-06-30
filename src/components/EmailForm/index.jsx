import React from "react";
import style from "./EmailForm.module.scss";

const EmailFrom = ({openModal}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
      };

    return (
        <section className={style.newsletter}>
            <form className={style.newsletter__form} onSubmit={handleSubmit}>
                <p>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>
                <div className={style.newsletter__email__container}>
                    <input type="email" placeholder="Digite seu Email..." />
                    <button className={style.submit} onClick={openModal}>Enviar</button>
                </div>
            </form>
        </section>
    );
}

export default EmailFrom;