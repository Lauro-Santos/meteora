import React, { useState, useEffect } from 'react';
import style from "./Products.module.scss";

const Products = ({ openModal, items, loading }) => {
    

    return (
        <section className={style.products__section}>
            {loading ? (
                <div className={style.loading}>Carregando...</div>
            ) : (
                <ul className={style.products__container}>
                    {items && items.length > 0 ? (
                        items.map((item) => (
                            <li key={item.id} className={style.product}>
                                <img src={item.imgPath} alt={item.title} />
                                <div className={style.product__info__container}>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                    <span>R$ {item.price}</span>
                                    <button onClick={() => openModal(item)}>Ver mais</button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <div className={style.noItems}>Nenhum item encontrado.</div>
                    )}
                </ul>
            )}
        </section>
    );
}

export default Products;