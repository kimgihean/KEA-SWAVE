import React from 'react'
import Navbar from './Navbar'
import White from './Images/white.png'
import Black from './Images/black.jpg'


export default function Home() {
  
  return (
    <div>
      <Navbar/>
      <tr>
      <th width="30%" scope="col"><img className='Image' alt="White" src={White}/></th>
      <th width="30%" scope="col"><img className='Image2' alt="Black" src={Black}/></th>
      
      </tr>
      <tr>
        <th width="50%" scope="col">Hello SWAVE!</th>
      </tr>
      
      </div>
  )
}
