import { useEffect, useRef } from "react";
import { Home_nav } from "../../components/home_nav/index.jsx";
import { useGeneralContext } from "../../providers/general-context";
import { FragmentTheme } from "./style.component.js";
import { useThemeContext } from "../../styles/theme/provider/theme-context.jsx";
import style from "./style.module.css";
import imgSun from "../../assets/sunCode.png";

export const Home = () => {
    const elementMain = useRef(null);
    const { setCurrentRender } = useGeneralContext();
    const scrolling = useRef(false); 

    function handleWheel(event) {
        if (!scrolling.current) { 
            scrolling.current = true; 
            if (elementMain.current && elementMain.current.scrollHeight - elementMain.current.scrollTop - 1 < elementMain.current.clientHeight && event.deltaY > 0) {
                const img = document.querySelector(".exitImage");
                const section = document.querySelector(".exitSection");
                const nav = document.querySelector(".exitNav");
                if (img && section && nav) {
                    img.classList.remove("exitImage");
                    img.classList.add("exitImage-On");
                    section.classList.remove("exitSection");
                    section.classList.add("exitSection-On");
                    nav.classList.remove("exitNav");
                    nav.classList.add("exitNav-On");
                    setTimeout(() => {
                        setCurrentRender("Sobre Mim");
                    }, 1000);
                }
            }
            setTimeout(() => {
                scrolling.current = false;
            }, 100);
        }
    }

    useEffect(() => {
        const main = elementMain.current;
        if (main) {
            main.addEventListener('wheel', handleWheel);

            return () => {
                main.removeEventListener('wheel', handleWheel);
            };
        }
    }, []);

    const { themeName } = useThemeContext();

    return (
        <FragmentTheme ref={elementMain} className={`exitAnimation ${style.main}`}>
            <section className={`exitSection ${style.main_section}`}>
                <div className={style.main_section__container}>
                    <h1 className={style.main_section__name}>Guilherme Vinicius</h1>
                    <h2 className={style.main_section__subtitle}>Developer Web Full Stack</h2>
                </div>
                {themeName === "dark" ?
                    <img className={`exitImage ${style.main_section__storm}`} src={imgStorm} alt="stormCode" /> :
                    <img className={`exitImage ${style.main_section__sun}`} src={imgSun} alt="sunCode" />}
            </section>
            <Home_nav />
        </FragmentTheme>
    );
};
