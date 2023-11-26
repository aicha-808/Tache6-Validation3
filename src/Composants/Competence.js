import { ComposantTitre } from './composantTitre';
import { ProgressBar } from "./ProgressBar";

export const Competence = () => {
    
    return(
        <section className="container-fluid p-5 competences" id="competences">
            <ComposantTitre Titre = "mes competences" />
            <div className="row ">
                <div className="col-sm-6 me-end"> 
                <Designation classes="cont-desig py-2 px-3 mt-3 text-lg-end text-sm-end" designation = "outils" />
                </div>
                <div className="col-sm-6">  
                <Designation classes="cont-desig py-2 px-3 mt-3" designation = "Language" />   
                </div> 
                <div className="col-sm-6 mt-5"> 
                    <div className="row mb-3">
                        <div className="col-sm-3 mx-auto">  
                            <ProgressBar bgColor='couleur' progress='100' height={10}  /> 
                        </div>
                        <div className="col-sm-3 "> <span className="text-uppercase text-lg-center mt-3">bootstrap</span></div>
                    </div> 
                    <div className="row mb-3 ">
                        <div className="col-sm-3 mx-auto">  
                            <ProgressBar bgColor='couleur' progress='70' height={10}  /> 
                        </div>
                        <div className="col-sm-3">  <span className="text-uppercase text-center mt-3 px-4">react </span></div>
                    </div> 
                    <div className="row mb-3">
                        <div className="col-sm-3 mx-auto">  
                            <ProgressBar bgColor='couleur' progress='50' height={10}  /> 
                        </div>
                        <div className="col-sm-3"><span className="text-uppercase text-center  mt-3">my sql</span></div>
                    </div>
                </div> 
                <div className="col-sm-6 mt-5 ">  
                <div className="row mb-3 ">
                        <div className="col-sm-3 ms-5">  <span className="text-uppercase ">html</span></div>
                        <div className="col-sm-3">  
                            <ProgressBar bgColor='couleur' progress='100' height={10}  /> 
                        </div>
                    </div> 
                    <div className="row mb-3">
                        <div className="col-sm-3 ms-5">  <span className="text-uppercase">css</span></div>
                        <div className="col-sm-3 "> 
                            <ProgressBar bgColor='couleur' progress='90' height={10}  /> 
                        </div>
                    </div>
                    <div className="row mb-3">
                     <div className="col-sm-3 ms-5">  <span className="text-uppercase">javascript</span></div>
                        <div className="col-sm-3">  
                            <ProgressBar bgColor='couleur' progress='80' height={10}  /> 
                        </div>
                    </div>
                
                </div> 
                <div className="col-sm-6">  
                    <Designation classes=" py-2 mt-3 text-lg-end px-3 mt-3 text-md-start" designation = "Langues" />
                    <div className='contenu px-5 mt-3 text-lg-end text-md-start'> 
                        <p className="text-uppercase">francais</p> 
                        <p className="text-uppercase">anglais</p>
                        <p className="text-uppercase">Poulaar</p>
                    </div>   
                </div> 
                <div className="col-sm-6">  
                    <Designation classes=" py-2  mt-3 px-3" designation = "hobbies" /> 
                    <div className='contenu ms-5 mt-3'> 
                        <p className="">Créatrice du blog « Mon job de dev »</p> 
                        <p className="">Le développement web en général</p>
                        <p className="">PWA</p>
                        <p className="">Calculs distribués</p>
                    </div>     
                </div> 
            </div> 
        </section>
    )
}
const Designation = (props) => {
    return(
        <div className={props.classes}>  
            <h6 className="designation text-uppercase">
            <a href='#g' className='text-decoration-none'>{props.designation}</a></h6>        
        </div> 
    )
}