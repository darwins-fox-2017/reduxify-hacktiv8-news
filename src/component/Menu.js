import React from 'react'
import {Link} from 'react-router-dom'
const Menu = () => (
  <nav>
    <ul>
      <li><Link to="/">News</Link></li>
      <li><Link to="/people">Peoples</Link></li>
    </ul>
  </nav>
)

export default Menu
