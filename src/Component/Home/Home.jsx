import style from './Home.module.css';
import logo from '../../assets/background.jpg';

function Home(){
    return(
        <div className={style.box}>
            <img src = {logo} alt ="backgroundimg" className={style.backgroundimage}/>
            <h2 className={style.heading}>Pushkar Dayal</h2>
            <p className={style.tagline}>
            Full Stack Developer with expertise in Java Spring and React, passionate about building dynamic and scalable web applications. Strong foundation in Data Structures and Algorithms, with a focus on delivering efficient, high-quality code. Committed to continuous learning and solving complex problems through innovative solutions.
            </p>
        </div>
    )
}

export default Home;