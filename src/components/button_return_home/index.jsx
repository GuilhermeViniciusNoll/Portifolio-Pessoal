import img from "../../assets/icon_return.png"
import style from "./style.module.css"
import { useNavigate } from "react-router-dom"

export const Button_return = () => {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate("/")} id={style.button_return__unique}>
            <img src={img} />
        </button>
    )
}