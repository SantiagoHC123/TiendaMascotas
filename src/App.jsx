import {PetCard} from "./components/PetCard"
import './App.css'

const pets = [
{id:1 ,name : 'Zeus', age : '2', kind : 'Cat', breed : 'Orange' ,isfeatured : true},
{id:2 ,name : 'Poseidon', age : '1', kind : 'Cat', breed : 'Orange', isfeatured : true},
{id:3 ,name : 'Hades' ,age : '2', kind : 'Dog', breed : 'Orange' ,isfeatured : true},
{id:4 ,name : 'Afrodita', age : '3' ,kind : 'Dog', breed : 'Orange', isfeatured : false},
{id:5 ,name : 'Hermes', age : '2', kind : 'Cat', breed : 'Orange' ,isfeatured : true},
{id:6 ,name : 'Atena', age : '5', kind : 'Cat', breed : 'Orange', isfeatured : true},
{id:7 ,name : 'Cronos', age : '0', kind : 'Turtle', breed : 'Orange', isfeatured : false}
]



export const App  = () =>{

  
  return (
 <>
 <div className="titulo">
      <h1>
      My pets Apps
      </h1>
  </div>
  <div className="container">
      {pets.map(pet => <PetCard key={pet.id} {...pet} />)}
      </div> 

 </>
  )  
}
