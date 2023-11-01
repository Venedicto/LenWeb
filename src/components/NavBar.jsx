import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
  return(
    <ul>
      <li><Link to="/home">Home</Link></li> 
      <li><Link to="/Tarot">Tarot</Link></li> 
      <li><Link to="/Spells">Spells</Link></li> 
    </ul>

  )

}
