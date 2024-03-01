import { useGeneralContext } from "../../providers/general-context"
import { projectsFront } from "../../database/projects_list.js"
import { FragmentTheme } from "./style.component.js"
import { Visible_verify } from "../../components/visible_verify/index.jsx"
import { Button_return } from "../../components/button_return_home/index.jsx"
import { useEffect, useRef } from "react"
import style from "./style.module.css"

export const Front_end = () => {
    
    const elementMain = useRef(null);
    const { setCurrentRender } = useGeneralContext();
    const scrolling = useRef(false); 

    function handleWheel(event) {
        if (!scrolling.current) { 
            scrolling.current = true;
            if (elementMain.current && elementMain.current.scrollHeight - elementMain.current.scrollTop - 1 < elementMain.current.clientHeight && event.deltaY > 0) {
                setTimeout(() => {
                    setCurrentRender("Projetos BackEnd")
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
                <h2 className={`${style.title} entryAnima`}> Projetos Front</h2>
                <ul className={`${style.list}`}>
                    {projectsFront.map((project) => {
                    return <Visible_verify animaClass="focus-in">
                        <li key={project.name} className={`${style.item} item`}>
                            <img className={`${style.image}`} src={project.logo} alt={project.name} />
                            <div className={`${style.container_data}`}>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                            <nav className={`${style.nav_item}`}>
                                <a href={project.repositorio}>Repositório</a>
                                <a href={project.link}>Link</a>
                            </nav>
                        </li>
                    </Visible_verify>
                    })}
                </ul>
                <h4 className={`${style.main_refer} fade-in`}>Veja meus projetos: <a className="button" href="https://github.com/GuilhermeViniciusNoll" target="_blank">GitHub</a></h4>
            </main>
        </FragmentTheme>
    );
};
