import React from "react";
import {FormInputContainer, FormInputLabel, FormInputWrapper} from "./form-input.styles";

const FormInput = ({handleChange, label, ...props}) => {
    return <FormInputWrapper>
        <FormInputLabel>{label}</FormInputLabel>
        <FormInputContainer onChange = {handleChange} {...props}/>
    </FormInputWrapper>
}

export default FormInput