import { useState } from 'react'
import classes from './PetCard.module.css'



export const PetCard  =  ({name,age,breed,kind,isfeatured}) => {

    const [like, setLike] = useState(0);

    const likeClick = () => {
        setLike(like+1)
    }

return (


<div className = {classes.card}> 
 
 <h3> {name} - {age} years</h3>
 <p> {kind} </p>
 <p> {breed}</p>
{isfeatured ? <p> Pet of the month! </p>: null}
<p>Like: {like}</p>
      <button onClick={likeClick}>Like</button>

</div>
)
}


