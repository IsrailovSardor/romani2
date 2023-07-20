import React from "react";
import css from "./Main.module.scss";
import img1 from "../../assets/images/0_8374c_8a574331_xl-1.gif";
import img2 from "../../assets/images/13479203.gif";
import line2 from "../../assets/images/w.png";

import a1 from "../../assets/icons/1.jpg";
import a2 from "../../assets/icons/2.jpg";
import a3 from "../../assets/icons/3.avif";
import a4 from "../../assets/icons/4.jpg";
import a5 from "../../assets/icons/5.jpg";
import a6 from "../../assets/icons/7.jpg";

const arr = [
    {title: "ВСТРЕТИТЬ НАСТОЯЩУЮ ЛЮБОВЬ"},
    {title: "РАСКЛАДЫ НА ТАРО ВСЕ СЛУЧАИ ЖИЗНИ"},
    {title: "ГАРАНТИРОВАННО ВЕРНУ"},
    {title: "ЧУВСТВА И ЛЮБОВЬ , СОЗДАТЬ И СОХРАНИТЬ СЕМЬЮ"},
    {title: "СОХРАНЕНИЕ И ВОССОЕДИНЕНИЕ СЕМЬИ, ЗАЩИТА ОТ РАЗВОДА"},
    {title: "ПОЛУЧИТЬ ПРИБЫЛЬ"},
    {title: "ОТВОРОТ СОПЕРНИЦ И РАЗЛУЧНИЦ"},
    {title: "СНЯТИЕ ПОРЧИ, СГЛАЗА, УСТАНОВКА ЗАЩИТЫ"},
];

const servicesArr = [
    {
        img: a2,
        title: "Cнятие порчи",
        descr: "Избавление от пьянства, Избавление от зависимостей, Снятие порчи, сглаза, проклятия, Избавление от одиночества, Снятие венца безбрачия, Защита от завистников, Защита детей, Помощь бездетным парам, Очищение ауры и энергетики",
    },
    {
        img: a6,
        title: "Без греха",
        descr: "Помощь в самых безвыходных ситуациях без вреда и греха. Исправлю работу недобросовестных лже магов и шарлатанов.",
    },
    {
        img: a3,
        title: "Предсказание судьбы",
        descr: "Ответы на любые вопросы, Гадание на любовь, Гадание на будущее, Гадание на ТАРО, Литье судьбы воском, Корректировка судьбы, Предсказание близкого будущего",
    },
    {
        img: a5,
        title: "Магическая защита ",
        descr: "Специальное воздействие любовной магии. Это ритуал или обряд, который можно выполнять разными способами и силами (белая магия, черная магия), но цель влияния — защитить имеющиеся между людьми взаимосвязи и отношения от внешних опасностей и угроз.",
    },
    {
        img: a4,
        title: "Обряды на прибыль",
        descr: "Совет в принятии решения, Защита от недоброжелателей, Обряд на карьерный рост, Обряд на успех в любом деле, Притяжение благополучия, Обряд на финансовый успех",
    },
    {
        img: a1,
        title: "Любовная магия, привороты",
        descr: "Обряд на скорый брак, Привлечение жениха, Возвращение любимого человека, Спасение семьи от развода, Воссоединение семьи, Отворот разлучницы, Обряд на верность",
    },
];

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
            <div className={css.wrapperHelpMe}>
                <p className={css.wtapperHelpMe1}>Я ПОМОГУ ВАМ</p>
                <p className={css.wtapperHelpMe2}>БЕЗ ПОСЛЕДСТВИЙ И НЕГАТИВА. БЫСТРО, БЕЗОПАСНО, НА РАССТОЯНИИ</p>
                <div className={css.mapArr}>
                    {arr.map((item) => (
                        <div key={item.title} className={css.mapArrBlock}>
                            <img src={img2} alt="" className={css.mapArrBlockIMg} />
                            <p className={css.mapArrTitle}>{item.title}</p>
                        </div>
                    ))}
                </div>
                <p className={css.wtapperHelpMe3}>ИЗМЕНИТЕ СВОЕ БУДУЩЕЕ!</p>
                <p className={css.wtapperHelpMe4}>
                    Снятие порчи, негатива. Родового проклятия, венца безбрачия. ЛЮБОВНЫЙ ПРИВОРОТ. Верну любимого. Воссоединение семьи, ОТНОШЕНИЙ.
                    Защита от ссор, несчастий. Устранение соперницы. Обряды на прибыль и удачу
                </p>
            </div>
            <div className={css.warpperHelp}>
                <img src={img1} alt="" className={css.line} />
                <p>Я УВИЖУ ВСЕ ВАШИ ПРОБЛЕМЫ И ТРУДНОСТИ И ПОМОГУ ИХ РЕШИТЬ</p>
                <img src={img1} alt="" className={css.line} />
            </div>
            <div className={css.wrapperGoldText}>
                <p className={css.wrapperGoldText1}>ДОВЕРЬТЕ МНЕ ВАШУ СУДЬБУ!</p>
                <p className={css.wrapperGoldText2}>Я ИЗБАВЛЮ ВАС ОТ ПРОБЛЕМ</p>
            </div>
            <img className={css.usltextIg} src={line2} alt="" />
            <div className={css.wrapperUslugi}>
                <p className={css.usltext}>Мои услуги</p>
            </div>
            <img src={line2} alt="" className={css.usltextIg} />
            <>
                <div className={css.services} id="service">
                    <div className={css.container}>
                        <div className={css.blocks}>
                            {servicesArr.map((item, index) => (
                                <p className={css.block} key={index}>
                                    <div className={css.anim}>
                                        <img src={item.img} alt="img" className={css.img} />
                                    </div>

                                    <p className={css.titleText}>{item.title}</p>
                                    <p className={css.descr}>{item.descr}</p>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </>
            <img src={line2} alt="" className={css.usltextIg1} />
            <div className={css.wrapperUslugi}>
                <p className={css.usltext2}>ГАРАНТИРУЮ ПОЛНУЮ КОНФИДЕНЦИАЛЬНОСТЬ</p>
            </div>
            <img src={line2} alt="" className={css.usltextIg1} />
        </div>
    );
};

export default Main;
