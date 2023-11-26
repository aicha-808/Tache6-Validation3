export const ComposantExperience = (props) => {
    return(
        <div class="card border-0 shadow-sm">
            <div class="card-body">
                <h6 className="">{props.formation}</h6> 
                <h6 className="text-warning">{props.date}</h6>
                <p>{props.desc}</p>
            </div>
      </div>
    )
}