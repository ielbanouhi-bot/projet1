function Prod (props){

    return(
        <div>
            <p>id: {props.id} </p>
             <p>nom: {props.nom} </p>
              <p>prix: {props.prix} </p>
              <button onClick={()=>props.ondelete(props.id)}>supprimer</button>
        </div>
    )
}
export default Prod;