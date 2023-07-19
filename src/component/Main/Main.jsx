import React from "react";
import css from "./Main.module.scss";
import img1 from "../../assets/images/0_8374c_8a574331_xl-1.gif";
const Main = () => {
    return (
        <div>
            <div className={css.wrapperMain}>
                <img src={img1} alt="" className={css.line} />
                <p>ВЛАДЕЮ НАДЕЖНОЙ, СИЛЬНОЙ И ПРОФЕССИОНАЛЬНОЙ МАГИЕЙ.</p>
                <p>
                    ОБЛАДАЮ УНИКАЛЬНЫМИ ОБРЯДАМИ И РИТУАЛАМИ, <br /> А ТАКЖЕ МНОГОЛЕТНИМ ОПЫТОМ В ПОМОЩИ ЛЮДЯМ!
                </p>
            </div>
            <div className={css.warpperHelp}>
                <img src={img1} alt="" className={css.line} />
                <p>РЕАЛЬНАЯ ПОМОЩЬ В ЛЮБОЙ СИТУАЦИИ! </p>
                <p> Предсказания и ответы на любые вопросы!</p>
                <img src={img1} alt="" className={css.line} />
            </div>
            <div>
                <p>Я ПОМОГУ ВАМ</p>
                <p>БЕЗ ПОСЛЕДСТВИЙ И НЕГАТИВА. БЫСТРО, БЕЗОПАСНО, НА РАССТОЯНИИ</p>
                <p>ИЗМЕНИТЕ СВОЕ БУДУЩЕЕ!</p>
                <p>
                    Снятие порчи, негатива. Родового проклятия, венца безбрачия. ЛЮБОВНЫЙ ПРИВОРОТ. Верну любимого. Воссоединение семьи, ОТНОШЕНИЙ.
                    Защита от ссор, несчастий. Устранение соперницы. Обряды на прибыль и удачу
                </p>
            </div>
            <div className={css.warpperHelp}>
                <img src={img1} alt="" className={css.line} />
                <p>Я УВИЖУ ВСЕ ВАШИ ПРОБЛЕМЫ И ТРУДНОСТИ И ПОМОГУ ИХ РЕШИТЬ</p>
                <img src={img1} alt="" className={css.line} />
            </div>
        </div>
    );
};

export default Main;
