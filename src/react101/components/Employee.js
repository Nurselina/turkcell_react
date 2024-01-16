import React, { useState } from 'react'

export default function Employee() {
    const [employee, setEmployee] = useState({name:'Nursel', surname:'Özcan'})

  return (
       <div>
        <h3>Employee</h3>
        {employee.name} {employee.surname}
        <br />
        <br />
        <div>
            <button onClick={() => setEmployee({...employee, name:'Selin'}) }>Adı Değiştir</button>
            <button onClick={() => setEmployee({...employee, surname:'Genç'})}>Soyadı Değiştir</button>
        </div>
       </div>
  )
}
