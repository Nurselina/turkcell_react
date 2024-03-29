import React from 'react'
import PropTypes from 'prop-types'



export default function User({title, data,friends}) {
   
  return (
    <div>
        <strong>{title}</strong>
        <div>İsim :{data.name}</div>
        <div>Yaş : {data.age}</div>
        <div>Şehir : {data.city}</div>

         <h3>Arkadaşları</h3>
        {
          friends.map((friend , i) =>(
            <div key={i}>{friend}</div>
          ))
        } 
        <hr />
    </div>
  )
}
User.propTypes ={
    title: PropTypes.string,
    data: PropTypes.exact ({
    name: PropTypes.string,
    city: PropTypes.string,
    age: PropTypes.number

  }),
  friends: PropTypes.array,

};
User.defaultProps={
    title:'Kişi',
};
