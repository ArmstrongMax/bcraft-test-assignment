import React from "react";
import {ValidationErrorContainer} from "./validation-error.styles";

const ValidationError = ({message}) => {
    return <ValidationErrorContainer>
        {message}
    </ValidationErrorContainer>
}

export default ValidationError