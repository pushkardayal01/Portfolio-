import style from './Experience.module.css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Company from './Company/Company';

function Experience(){

    const experience = [
        {
            company: "Hevo Data",
            role: "Solution Engineer Intern",
            responsibility: "Managing Database and API and Solving Customer Issues",
            description: "",
            skill_required: ["database", "sql", "mongodb", "Python"],
        },
        {
            company: "RedBeryl Labs",
            role: "Full Stack Developer",
            responsibility: "",
            description: "",
            skill_required: [
                "Core Java",
                "Spring Boot",
                "Spring Framework",
                "Algorithm",
                "Python",
                "React.js",
                "HTML",
                "CSS",
                "Google Cloud",
                "Microservices"
            ],
        },
    ];
    
    return(
        <div className={style.box}>
            
            <Company work ={experience[0]}/>
            <FaArrowLeft/>
            <FaArrowRight/>
        </div>
    )
}

export default Experience;