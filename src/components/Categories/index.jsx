import style from "./Categories.module.scss";

import camisetas from "assets/images/CategoriaCamiseta.png";
import bolsas from "assets/images/CategoriaBolsa.png";
import calcados from "assets/images/CategoriaCalçados.png";
import calcas from "assets/images/CategoriaCalça.png";
import casaco from "assets/images/CategoriaCasacos.png";
import oculos from "assets/images/CategoriaÓculos.png";

const Categories = () => {
    return (
        <section className={style.categories__section}>
            <h3>Busque por categoria:</h3>

            <ul className={style.categories__container}>
                <li className={style.categories__card}>
                    <img src={camisetas} alt="Camisetas" />
                    <span>Camisetas</span>
                </li>
                <li className={style.categories__card}>
                    <img src={bolsas} alt="Bolsas" />
                    <span>Bolsas</span>
                </li>
                <li className={style.categories__card}>
                    <img src={calcados} alt="Calçados" />
                    <span>Calçados</span>
                </li>
                <li className={style.categories__card}>
                    <img src={calcas} alt="Calças" />
                    <span>Calsas</span>
                </li>
                <li className={style.categories__card}>
                    <img src={casaco} alt="Casaco" />
                    <span>Casaco</span>
                </li>
                <li className={style.categories__card}>
                    <img src={oculos} alt="Óculos" />
                    <span>Óculos</span>
                </li>
            </ul>
        </section>
    );
}

export default Categories;