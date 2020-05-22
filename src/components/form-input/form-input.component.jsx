import React from 'react';


const FormInput = ({handleChange,...props}) => (
    <input {...props} onChange = {handleChange}/>
)

export default FormInput;