export const ComposantPresentation = (props) => {
    return(
        <div className=""> 
           <div className="mb-2"><span className="numbre">{props.num1}</span> <span className="ms-2"> {props.text1}</span></div> 
           <div className="mb-2"><span className="numbre">{props.num2}</span> <span className="ms-2"> {props.text2}</span></div> 
           <div className="mb-2"><span className="numbre">{props.num3}</span> <span className="ms-2"> {props.text3}</span></div> 
           <div className="mb-2"><span className="numbre">{props.num4}</span> <span className="ms-2"> {props.text4}</span></div> 
           <div className="mb-2"><span className="numbre">{props.num5}</span> <span className="ms-2"> {props.text5}</span></div> 
        </div> 
    )
}