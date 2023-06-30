import style from "./Facilities.module.scss";
import pix from "assets/icons/x-diamond.png";
import troca from "assets/icons/arrow-repeat.png";
import flor from "assets/icons/flower.png"

const Facilities = () => {
    return (
        <section className={style.facilities}>
            <h3>Conheça todas as nossas facilidades</h3>
            <ul className={style.facilities__conteiner}>
                <li className={style.ease}>
                    <img src={pix} alt="Icone do pix" />
                    <div className={style.ease__text__container}>
                        <h4>Pague pelo pix</h4>
                        <p>Ganhe 5% OFF em pagamentos via PIX</p>
                    </div>
                </li>
                <li className={style.ease}>
                    <img src={troca} alt="Icone de troca" />
                    <div className={style.ease__text__container}>
                        <h4>Troca grátis</h4>
                        <p>Fique livre para trocar em até 30 dias.</p>
                    </div>
                </li>
                <li className={style.ease}>
                    <img src={flor} alt="Icone de flor" />
                    <div className={style.ease__text__container}>
                        <h4>Sustentabilidade</h4>
                        <p>Moda responsável, que respeita o meio ambiente.</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Facilities;