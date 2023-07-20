import React from "react";
import css from "./Header.module.scss";

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <p className={css.text1}>ясновидящая</p>
                <p className={css.text2}>Лучший специалист магии и эзотерики</p>
                <p className={css.text3}>Маргарита</p>
                <p className={css.text4}>БУДУЩЕЕ. НАСТОЯЩЕЕ. ПРОШЛОЕ</p>
                <p className={css.text5}>
                    Помогу изменить жизнь к лучшему, <br /> исправить проблемы настоящего!
                </p>
                <a className={css.text6} href="https://api.whatsapp.com/send?phone=79612249798">
                    +7 961 224-97-98
                </a>
                <p className={css.text7}>только качественная помощь - без пустых обещаний!</p>
            </div>
        </div>
    );
};

export default Header;
