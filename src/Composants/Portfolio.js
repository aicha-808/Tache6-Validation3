import { ComposantTitre } from './composantTitre';
import { ComposantPortfolio } from './ComposantPortfolio';
import portfolio1 from "../images/portfolio1.png";
import portfolio2 from "../images/portfolio2.png";
import portfolio3 from "../images/portfolio3.png";
import portfolio4 from "../images/portfolio4.png";
import portfolio5 from "../images/portfolio5.png";
import portfolio6 from "../images/portfolio6.png";

export const Portfolio = () => {
    return(
        <section className="container-fluid p-5 portfolio " id="portfolio">
            <div className="row ">
                <ComposantTitre Titre = "Mon Portfolio" />
                <div className="col-sm-4  mb-2"> 
                <ComposantPortfolio 
                    imgUrl={portfolio1}
                    titre="Volkeno"
                    text="Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant
                     la création de Disney+. #React #API #Redux"
                     bouton="Voir le projet github"
                />
                </div>  
                <div className="col-sm-4  mb-2"> 
                <ComposantPortfolio 
                    imgUrl={portfolio2}
                    titre="Volkeno"
                    text="Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant
                     la création de Disney+. #React #API #Redux"
                     bouton="Voir le projet github"
                />
                </div>  
                <div className="col-sm-4  mb-2"> 
                <ComposantPortfolio 
                    imgUrl={portfolio3}
                    titre="Volkeno"
                    text="Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant
                     la création de Disney+. #React #API #Redux"
                     bouton="Voir le projet github"
                />
                </div> 
                <div className="col-sm-4  mb-2"> 
                <ComposantPortfolio 
                    imgUrl={portfolio4}
                    titre="Volkeno"
                    text="Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant
                     la création de Disney+. #React #API #Redux"
                     bouton="Voir le projet github"
                />
                </div> 
                <div className="col-sm-4  mb-2"> 
                <ComposantPortfolio 
                    imgUrl={portfolio5}
                    titre="Volkeno"
                    text="Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant
                     la création de Disney+. #React #API #Redux"
                     bouton="Voir le projet github"
                />
                </div> 
                <div className="col-sm-4 mb-2"> 
                <ComposantPortfolio 
                    imgUrl={portfolio6}
                    titre="Volkeno"
                    text="Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant
                     la création de Disney+. #React #API #Redux"
                     bouton="Voir le projet github"
                />
                </div> 
            </div> 
        </section>   
    )
}