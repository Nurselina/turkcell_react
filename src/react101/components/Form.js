import React, { useState } from 'react'

export default function Form() {
    const [form, setform] = useState({name:"", surname:"", gender:"0" })

    const handleChange =(e) =>{
        setform((prev) =>({...prev, [e.target.name] :[e.target.value] } ))
    }
   /* const [name, setName] = useState("")
   const [surname, setSurname] =useState("")
   const [gender, setGender] = useState("1") */
  return (
    <div>
        <div>İsim</div>
        <input placeholder='İsim' name='name' value={form.name} onChange={handleChange}/>
        <input placeholder='Soyisim' name='surname' value={form.surname} onChange={handleChange} />

       <br />
       <br />
        <div>
        <div>Cinsiyet</div>
         <select value={form.gender} onChange={handleChange} name='gender'>
            <option value={1}>Kadın</option>
            <option value={0}>Erkek</option>
         </select>
         </div>
         <br />
         <hr />
         <div>
          İsim : <strong> {form.name} {form.surname}</strong>
        </div>
        <div>Cinsiyet : <strong>{form.gender === "0" ? "Erkek" : "Kadın"}</strong> </div>

    </div>

  )
}
