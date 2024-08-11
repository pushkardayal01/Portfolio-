import style from "./Title.module.css";

function Title({ title }){
    return(
        <div className={style.heading}>
            <h2>{title}</h2>
        </div>
    )
}


export default Title;