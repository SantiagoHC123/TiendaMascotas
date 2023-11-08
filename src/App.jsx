import {PetCard} from "./components/PetCard"
import './App.css'

const pets = [
{id:1 ,name : 'Zeus', age : '2', kind : 'Cat', breed : 'Orange' ,isfeatured : true},
{id:2 ,name : 'Poseidon', age : '2', kind : 'Cat', breed : 'Orange', isfeatured : true},
{id:3 ,name : 'Hades' ,age : '2', kind : 'Dog', breed : 'Orange' ,isfeatured : true},
{id:4 ,name : 'Afrodita', age : '2' ,kind : 'Dog', breed : 'Orange', isfeatured : true},
{id:5 ,name : 'Hermes', age : '2', kind : 'Cat', breed : 'Orange' ,isfeatured : true},
{id:6 ,name : 'Atena', age : '2', kind : 'Cat', breed : 'Orange', isfeatured : true},
{id:7 ,name : 'Cronos', age : '2', kind : 'Turtle', breed : 'Orange', isfeatured : true}
]



export const App  = () =>{

  
  return (
 <>
      <h1>
      My pets Apps
      </h1>

      {pets.map(pet => <PetCard key={pet.id} {...pet} />)}
   
<div className = "card" >  Otra tarjeta </div>
 </>
  )  
}
