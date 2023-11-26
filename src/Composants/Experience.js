import { ComposantTitre } from './composantTitre';
import { ComposantExperience } from './ComposantExperience';
//import { ExperienceProjet } from './ExperienceProjet';

export const Experience = () => {
    return(
        <section className="container-fluid p-5 experience" id="experiences">
            <ComposantTitre Titre = "mes experiences" />
            <div className="row mt-5">
                <div className="col-sm-12 mb-5"> 
                <ComposantExperience formation = "Développeur Front-End, Bakeli"
                    date='Février 2022' desc="Formation à raison de 35h/s à distance. Ce cursus comprend HTML, CSS, Bootstrap, Algorithmie, Javascript, React JS, Redux, LESS/SAAS, 
                        Git, Github enseigné par un expert toujours en activité. Cette formation m'a permis de valider ces enseignements par la pratique de plus 
                        d'une douzaine de projets."
                 />
                </div>
                <div className="col-sm-12  mb-5">  
                <ComposantExperience formation = "marketing commercial, Eight 8 Technology"
                    date='Septembre-Novembre 2021' desc="Installation et redynamisation des pdv de orange money, mobile money, E-recharge,
                    moove. Rédaction des rapports d'activités semestriels."
                 />
                </div> 
                <div className="col-sm-12  mb-1">  
                <ComposantExperience formation = "CS50, Global Success Training Center"
                    date='Février-Juillet 2021' desc="Formation à raison de 35h/s à distance. Ce cursus comprend HTML, CSS, Bootstrap, Algorithmie, Javascript, React JS, Redux, LESS/SAAS, 
                        Git, Github enseigné par un expert toujours en activité. Cette formation m'a permis de valider ces enseignements par la pratique de plus 
                        d'une douzaine de projets."
                 />  
                </div> 
            </div> 
            {/* <div className="container section-projet">
                <div className="row">
                    <div className="col-sm-3 mb-3">
                    <ExperienceProjet 
                        imgProjet={phone}
                        projet='18 projets'
                    />
                    </div> 
                    <div className="col-sm-3 mb-3">
                    <ExperienceProjet imgProjet={imgUrl2}
                        projet='30 algorithmes'
                    />
                    </div>
                    <div className="col-sm-3 mb-3">
                    <ExperienceProjet imgProjet={imgUrl3}
                        projet='10 console.log( );'
                    />
                    </div>
                    <div className="col-sm-3 mb-3">
                    <ExperienceProjet imgProjet={imgUrl4}
                        projet='16 border: solid red 1px;'
                    />
                    </div>
                </div> 
            </div>   */}
        </section>
    )
}
