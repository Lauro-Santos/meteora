import style from "./BannerItem.module.scss"

const BannerItem = ({ imageUrl, logo, title, subtitle, color }) => {
    return (
        <div className={style.banner__slide} style={{ backgroundColor: color }}>
            {logo != null ?
                (
                    <>
                        <div className={style.banner__model__withLogo} style={{ backgroundImage: `url(${imageUrl})` }} />
                        <img className={style.banner__contentImage} src={logo} alt="Logo com slogan da meteora" />
                    </>
                ) : (
                    <>
                        <div className={style.banner__model} style={{ backgroundImage: `url(${imageUrl})` }} />
                        <div className={style.banner__content}>
                            <div className={style.banner__content__container}>
                                <h5>{title}</h5>
                                <p>{subtitle}</p>
                            </div>
                        </div>
                    </>
                )}
        </div>
    )
}

export default BannerItem;