import {ComposantAccueil} from './ComposantAccueil';
import phone from '../images/phone.png'
import vector from '../images/Vector.png'
import place from '../images/place.png'
import account from '../images/account.png'
import banner from '../images/Rectangle 1.png'
import aicha from '../images/aicha1.png';

export const Accueil = () => {
    return(
        <header>
            <section className="container pt-5 px-5 border sect-accueil" id="accueil">
                <div className="row ">
                    <div className="col-sm-8 accueilText"> 
                        <h1 className="text-light ">Hello ! je suis <span className="text-warning text-uppercase"
                        >Aissatou Barry</span><br /> Développeuse  backend à Bakeli</h1>
                        <ComposantAccueil
                        icon1={phone} text1='77 808 85 35'
                        icon2={vector} text2='aichatimbi74@gmail.com'
                        icon3={place} text3='Hanne Maristes'
                        icon4={account} text4='Bakeli'
                        /> 
                    </div>
                    <div className="col-sm-4">  
                    <div className="contImg text-start pb-0"> 
                        <img src={aicha} class="img-fluid profil1 w-100" alt="..." />
                    </div>
                    </div> 
                </div> 
                <img src={banner} alt=""/>
            </section>
        </header>
    )
}