import React, { useState } from 'react';
import style from "./Products.module.scss";

const Products = ({ openModal }) => {
    // Array de objetos que representam os itens de produtos
    const [items, setItems] = useState([
        {
            title: "Camiseta Conforto",
            text: "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
            price: "70,00",
            imgaPath: require("assets/images/products/Camiseta.png")
        },
        {
            title: "Calça Alfaiataria",
            text: "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
            price: "180,00",
            imgaPath: require("assets/images/products/Calça.png")
        },
        {
            title: "Tênis Chunky",
            text: "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
            price: "250,00",
            imgaPath: require("assets/images/products/Tenis.png")
        },
        {
            title: "Jaqueta Jeans",
            text: "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
            price: "150,00",
            imgaPath: require("assets/images/products/Jaqueta.png")
        },
        {
            title: "Óculos Redondo",
            text: "Armação metálica em grafite com lentes arredondadas. Sem erro!",
            price: "120,00",
            imgaPath: require("assets/images/products/óculos.png")
        },
        {
            title: "Bolsa coringa",
            text: "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
            price: "120,00",
            imgaPath: require("assets/images/products/Bolsa.png")
        },
    ]);
    return (
        <section className={style.products__section}>
            <ul className={style.products__container}>
                {items.map((item, index) => {
                    return (
                        <li key={index} className={style.product}>
                            <img src={item.imgaPath} alt={item.title} />
                            <div className={style.product__info__container}>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                                <span>R$ {item.price}</span>
                                <button onClick={() => openModal(item)}>Ver mais</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

export default Products;