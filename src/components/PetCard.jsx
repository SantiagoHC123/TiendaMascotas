import classes from './PetCard.module.css'



export const PetCard  =  ({name,age,breed,kind,isfeatured}) => {


return (


<div className = {classes.card}> 
 
 <h3> {name} - {age} years</h3>
 <p> {kind} </p>
 <p> {breed}</p>
{isfeatured ? <p> Pet of the month! </p>: null}

</div>
)
}


