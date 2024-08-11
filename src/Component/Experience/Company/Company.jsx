import style from './Company.module.css';

function Company({ work }){
    return(
        <div className="box">
            <div className={style.left}>
                <h2>{work.company}</h2>
                <h3>{work.role}</h3>
                <p>{work.skill_required}</p>
            </div>
            <div className={style.right}>
                <h2>{work.responsibilty}</h2>
                <p>{work.description}</p>
            </div>

        </div>
    )
}

export default Company;