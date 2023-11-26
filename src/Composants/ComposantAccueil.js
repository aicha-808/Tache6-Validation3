export const ComposantAccueil = (props) => {
    return(
        
            <div className="d-flex icone mt-5"> 
                <p className="text-light ms-2"><img src={props.icon1} alt=""/> {props.text1}</p> 
                <p className="text-light  ms-2"><img src={props.icon2} alt=""/> {props.text2}</p> 
                <p className="text-light ms-2"><img src={props.icon3} alt=""/> {props.text3}</p> 
                <p className="text-light ms-2"><img src={props.icon4} alt=""/> {props.text4}</p> 
            </div> 
    )
}