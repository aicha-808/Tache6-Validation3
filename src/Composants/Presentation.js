import { ComposantPresentation } from "./ComposantPresentation";
import { ComposantTitre } from './composantTitre';

export const Presentation = () => {
    return(
        <section className="container-fluid p-5 presentation" id="presentation">
        <ComposantTitre Titre = "Presentation" />
            <div className="row mt-5">
                
                <div className="col-sm-6 mb-3"> 
                    <ComposantPresentation
                        num1= "1" text1="Capacité d'apprentissage"
                        num2= "2" text2="Collaboration"
                        num3= "3" text3="Responsabilité"
                        num4= "4" text4="Prise de décision"
                        num5= "5" text5="Gestion du temps"
                    />
                </div>
                <div className="col-sm-6 mb-3">  
                    <div className="card border-0 "> 
                        <h4 className="card-title titre">Triforce !</h4> 
                        <div className=""><p className="textP card-title">À l'écoute, je suis FORCE de proposition, j'aime chercher des solutions et ainsi rendre services. Passionné par l'apprentissage et la découverte 
                                intellectuelle, j'ai développé une FORCE de travail afin de toujours 
                                progresser au quotidien. FORCE tranquille, j'ai toujours su collaborer et
                                pleinement m'intégrer au sein du collectif.</p></div> 
                        <div className=""><p className="textP card-title">
                            Besoin d'un collaborateur flexible et persévérant ?
                            Je vous propose mes services par le biais d'une ALTERNANCE. Avec 4 
                            jours dans votre société et 1 jour en formation, le tout modulable comme 
                            vous le souhaitez, je pourrais facilement répondre à vos besoins</p>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </section>
    )
}