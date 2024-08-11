import style from './Navbar.module.css';

function Navbar(){
    return(
        <nav>
            <ul className={style.listcontainer}>
                <li className={style.listitem}><button className={style.btn}>Home</button></li>
                <li className={style.listitem}><button className={style.btn}>Experience</button></li>
                <li className={style.listitem}><button className={style.btn}>Skill</button></li>
                <li className={style.listitem}><button className={style.btn}>Projects</button></li>
                <li className={style.listitem}><button className={style.pribtn}>Contact</button></li>
            </ul>
        </nav>
    )
}

export default Navbar;