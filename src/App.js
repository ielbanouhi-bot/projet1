import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Prod from './Prod.js';

function App (){

  const [produit,setProduit]=useState([ {id:1 , nom :'kiko',prix:300}])
  const[newproduit,setNewproduit]=useState({nom:'',prix:''})
  const supprimer =(id)=>{
   setProduit(produit.filter((produit)=> produit.id !== id))
  }
const buttonajoutter=(e)=>{
const{name,value}=e.target
setNewproduit({...newproduit,[name]:value})
}
const inputajt=(e)=>{
e.preventDefault()
if(!newproduit.nom || !newproduit.prix) return
const id = produit.length > 0 ? produit[produit.length-1].id+1 : 1;
setProduit([...produit,{id,...newproduit}])
setNewproduit({nom:'',prix:'' })
}




return (

<div>
  <form>
    <h1>ajoutter votre produit</h1>
    <input type='text' name='nom' placeholder='nom de produit' onChange={buttonajoutter} />
    <input type='text' name='prix' placeholder='prix de produit' onChange={buttonajoutter} />
    <input type='submit' value='ajoutter' onClick={inputajt}/>
  </form>
  <h1>liste des produit :</h1>
  {produit.map((produi)=>(
    <Prod
     key={produi.id}
    id={produi.id}
    nom={produi.nom}
    prix={produi.prix}
    ondelete={supprimer}
    />
  ))}
</div>

)
}

   export default App;
