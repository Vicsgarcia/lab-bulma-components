import React from 'react';



const FormField = ({label, placeholder, type}) => {
  return (
    
    <div className="card is-one-quarter">
  <div className="card-content">
  <div className="message-header" isInfo>
    <button className="delete" aria-label="delete"></button>
  </div>
  <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder}/>
      </div>
    </div>
    
  </div>
</div>
    
    
    
  )
}


export default FormField 