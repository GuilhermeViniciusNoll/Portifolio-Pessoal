import { useGeneralContext } from "../../providers/general-context.jsx"
import { listImagens } from "../../database/list_tecnologies.js"
import { FragmentTheme } from "./style.component.js"
import { Modal_contact } from "../../components/modal_contact/index.jsx"
import { Button_return } from "../../components/button_return_home/index.jsx"
import { Visible_verify } from "../../components/visible_verify/index.jsx"
import { useEffect, useRef } from "react"
import cartoonLight from "../../assets/cartoonPc.svg"
import style from "./style.module.css"
import data from "../../database/db_about_me.json"
import img from "../../assets/Iam.svg"

export const About_me = () => {
    
    const { modalContact, setModalContact } = useGeneralContext();
    const elementMain = useRef(null);
    const { setCurrentRender } = useGeneralContext();
    const scrolling = useRef(false); 

    function handleWheel(event) {
        if (!scrolling.current) { 
            scrolling.current = true;
            if (elementMain.current && elementMain.current.scrollHeight - elementMain.current.scrollTop - 1 < elementMain.current.clientHeight && event.deltaY > 0) {
                setTimeout(() => {
                    setCurrentRender("Projetos FrontEnd")
                }, 1000);
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

    return (
        <FragmentTheme>
            <Button_return/>
            <main ref={elementMain} className={style.main}>
                
                <section  className={style.first_section}>
                    <Visible_verify classChoice={style.history_fragment} animaClass='fade-in'>
                        <article className={style.history_article}>
                            <h2 className={`${style.history_title} AnimaLeft  text`}>História</h2>
                            <p className={`${style.history_text} AnimaRight text`}>{data.Historia}</p>
                        </article>
                    </Visible_verify>

                    <div  className={`${style.fs_risk} risk_about`} />
                    
                    <Visible_verify classChoice={style.about_fragment} animaClass='fade-in'>
                        <img className={`${style.about_image} fade-in`} src={img}/>
                        <article className={style.about_article}>
                            <h2 className={`${style.about_title} AnimaRight text `}>Sobre Mim</h2>
                            <p className={`${style.about_text} AnimaLeft text `}>{data["Sobre Mim"]}</p>
                        </article>
                    </Visible_verify>
                </section>
                
                <section  className={style.second_section}>
                    <Visible_verify classChoice={style.know_fragment} animaClass='fade-in'>
                        <article className={style.know_article}>
                            <h2 className={`${style.know_title} text`}>Conhecimento</h2>
                            <p className={`${style.know_text} text`}>{data.Conhecimento}</p>
                        </article>   
                        <img className={`${style.know_image} animation`} src={cartoonLight}/>
                    </Visible_verify>       
                </section>
                
                <section className={style.third_section}>
                    <Visible_verify classChoice={style.technology_fragment} animaClass="fade-in">
                        <ul className={`containerTec ${style.technology_list}`}>
                            {listImagens.map((image) => {
                                return <figure className={`containerTec ${style.technology_item}`}>
                                            <img className={style.technology_image} src={image}/>
                                            {/* <span className={style.technology_name}></span> */}
                                        </figure>
                            })}
                        </ul>
                        <article className={style.technology_article}>
                            <h3 className={`${style.technology_title} text`}>Tecnologias</h3>
                            <p className={`${style.technology_text} text`}>{data.Tecnologias}</p>
                        </article>
                    </Visible_verify>
                </section>

                <section className={style.four_section}>
                    <p className="text">Entre em Contato!</p>
                    <button className="button" onClick={() => setModalContact(true)}>Contato</button>
                </section>

                {modalContact ? <Modal_contact /> : null}
            
            </main>
        </FragmentTheme>
    )
}

