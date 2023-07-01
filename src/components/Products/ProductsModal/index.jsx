import style from "./ProductsModal.module.scss";

const ProductsModal = ({ onClose, selectedItem }) => {

    return (
        <>
            <div className={style.productModal__box}>
                <header className={style.box__header}>
                    <div className={style.title__container}>
                        <span></span>
                        <h2>Confira detalhes sobre o produto</h2>
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
                    <img src={selectedItem.imgaPath} alt={selectedItem.title} />
                    <div className={style.box__product}>
                        <h5>{selectedItem.title}</h5>
                        <p className={style.containerInfo__text}>{selectedItem.text}</p>
                        <p className={style.containerInfo__price}>R$ {selectedItem.price}</p>
                        <div className={style.box__product__options}>
                            <p className={style.options__seller}>Vendido e entregue por Riachuelo</p>
                            <div className={style.options__colors}>
                                <p className={style.label__colors}>Cores:</p>
                                <div className={style.colors__radio}>
                                    <div className={style.radio__container}>
                                        <input type="radio" name="color" id="color1" />
                                        <label htmlFor="color1">Azul claro</label>
                                    </div>
                                    <div className={style.radio__container}>
                                        <input type="radio" name="color" id="color2" />
                                        <label htmlFor="color2">Offwhite</label>
                                    </div>
                                    <div className={style.radio__container}>
                                        <input type="radio" name="color" id="color3" />
                                        <label htmlFor="color3">Preto</label>
                                    </div>
                                </div>
                            </div>
                            <div className={style.options__sizes}>
                                <p className={style.label__sizes}>Tamanho:</p>
                                <div className={style.sizes__radio}>
                                    <div className={style.radio__container}>
                                        <input type="radio" name="size" id="size1" />
                                        <label htmlFor="size1">P</label>
                                    </div>
                                    <div className={style.radio__container}>
                                        <input type="radio" name="size" id="size2" />
                                        <label htmlFor="size2">PP</label>
                                    </div>
                                    <div className={style.radio__container}>
                                        <input type="radio" name="size" id="size3" />
                                        <label htmlFor="size3">M</label>
                                    </div>
                                    <div className={style.radio__container}>
                                        <input type="radio" name="size" id="size4" />
                                        <label htmlFor="size4">G</label>
                                    </div>
                                    <div className={style.radio__container}>
                                        <input type="radio" name="size" id="size5" />
                                        <label htmlFor="size5">GG</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button>Adicionar à sacola</button>
                    </div>
                </main>
            </div>
            <div className={style.box__fade} onClick={onClose}></div>
        </>
    )
}

export default ProductsModal;