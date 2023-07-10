import style from "./Loading.module.scss";

const Loading = () => {
  return (
    <section className={style.loading__container}>
      <div className={style.honeycomb}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loading;
