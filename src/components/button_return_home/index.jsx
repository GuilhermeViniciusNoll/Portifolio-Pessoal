import img from "../../assets/icon_return.png"
import style from "./style.module.css"

export const Button_return = () => {

    return (
        <button onClick={() => window.location.reload()} id={style.button_return__unique}>
            <img src={img} />
        </button>
    )
}