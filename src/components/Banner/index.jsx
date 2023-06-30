import React, { useState, useEffect } from "react";

import style from "./Banner.module.scss";
import BannerItem from "./BannerItem";
import logo from "assets/images/Meteora-logo-branco-slogan.svg";

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [items, setItems] = useState([
        {
            img: require("assets/images/banner_carousel/Banner-carousel-desktop-1.png"),
            logo: logo,
            title: "",
            subtitle: "",
            color: "#8b5cb1"
        },
        {
            img: require("assets/images/banner_carousel/Banner-carousel-desktop-2.png"),
            logo: null,
            title: "Coleção temporal",
            subtitle: "Estilo e qualidade para durar. ",
            color: "#F58D90"
        },
        {
            img: require("assets/images/banner_carousel/Banner-carousel-desktop-3.png"),
            logo: null,
            title: "Coleção atemporal",
            subtitle: "Alto impacto visual, baixo impacto ambiental!",
            color: "#f87b44"
        },
    ]);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) { // Verifica se o novo índice é menor que zero
            newIndex = items.length - 1; // Define o novo índice como o último item do array
        } else if (newIndex >= items.length) { // Verifica se o novo índice é maior ou igual ao tamanho do array
            newIndex = 0; // Define o novo índice como o primeiro item do array
        }
    
        setActiveIndex(newIndex); // Atualiza o estado do índice ativo com o novo índice
    };

    useEffect(() => {
        // Configura o autoplay para alternar o índice a cada 3 segundos
        const autoplayTimer = setInterval(() => {
          updateIndex(activeIndex + 1);
        }, 5000);
    
        // Limpa o timer do autoplay quando o componente é desmontado
        return () => {
          clearInterval(autoplayTimer);
        };
      }, [activeIndex]);

    return (
        <section className={style.banner}>
            <div
                className={style.banner__wrapper}
                style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                {items.map((item, index) => {
                    return <BannerItem
                        key={index}
                        imageUrl={item.img}
                        logo={item.logo}
                        title={item.title}
                        subtitle={item.subtitle}
                        color={item.color}
                    />;
                })}

            </div>
            <div className={style.banner__pagination}>
                {items.map((item, index) => {
                    return (
                        <span key={index} className={`${index === activeIndex ? style.active : ''}`}></span>
                    )
                })}
            </div>
            <div className={style.banner__button__prev}
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}></div>
            <div className={style.banner__button__next}
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}></div>
        </section>
    )
}

export default Banner;