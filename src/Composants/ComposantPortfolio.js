export const ComposantPortfolio = (props)  => {
    return(
        <div className="card text-center mt-5 border-0 shadow">
            <img src={props.imgUrl} className="img-fluid imgUrl mx-auto pt-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title vert">{props.titre}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#g" className="btn btn-transparent vert1">{props.bouton}</a>
            </div>
        </div>
    )
}