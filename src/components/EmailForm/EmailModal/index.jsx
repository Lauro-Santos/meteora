import React from "react";
import style from "./EmailModal.module.scss";

const EmailModal = ({ onClose }) => {

    return (
        <>
            <div className={style.EmailModal__box}>
                <header className={style.box__header}>
                    <div className={style.title__container}>
                        <span></span>
                        <h2>E-mail cadastrado com sucesso!</h2>
                    </div>
                    <button
                        className={style.box__close}
                        onClick={onClose}
                    >
                        <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0001 1.50003C14.4479 0.947724 13.5524 0.947671 13.0001 1.49991L7.99929 6.5L2.99982 1.50009C2.44755 0.947769 1.55209 0.947769 0.999823 1.50009C0.447622 2.05234 0.447622 2.94766 0.999823 3.49991L5.99947 8.5L0.999823 13.5001C0.447622 14.0523 0.447622 14.9477 0.999823 15.4999C1.55209 16.0522 2.44755 16.0522 2.99982 15.4999L7.99929 10.5L13.0001 15.5001C13.5524 16.0523 14.4479 16.0523 15.0001 15.5C15.5524 14.9477 15.5524 14.0523 15.0001 13.5L10.0005 8.5L15.0001 3.49997C15.5524 2.94769 15.5524 2.05231 15.0001 1.50003Z" />
                        </svg>
                    </button>
                </header>
                <main className={style.box__main}>
                    <p className={style.box__mansage}>Em breve você receberá novidades exclusivas da Meteora.</p>
                </main>
            </div>
            <div className={style.box__fade} onClick={onClose}></div>
        </>
    );
}

export default EmailModal;