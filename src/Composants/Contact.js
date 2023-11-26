import { ComposantTitre } from './composantTitre';
import { Bouton } from './Bouton';
import aicha from '../images/aicha1.png';

export const Contact = () => {
    return(
        <section className="container-fluid p-5 contact">
            <ComposantTitre Titre = "Restons en Contact" />
            <div className="row mt-5">
                <div className="col-sm-6 ">
                <form className='text-end'>
                    <div class="mb-3">
                        <input type="email" class="form-control border-0 border-bottom rounded-0 px-0" placeholder='Prénom' required />
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control border-0 border-bottom rounded-0 px-0" placeholder='Nom' required />
                    </div>
                    <div class="mb-3 ">
                    <textarea class="form-control px-1 rounded-0 border-2 border-secondary" placeholder="Votre message" rows={10}></textarea>
                    </div>
                    <Bouton nomClass="btn bsumit border-0 text-light px-4 py-1 fw-semibold " nom = "ENVOYEZ" />
                </form> 
                 </div>
                <div className="col-sm-6 "> 
                    <div className="contImg text-center back"> 
                        <img src={aicha} class="img-fluid profil" alt="..." />
                    </div>
                </div>
            </div>
        </section>
    )
}