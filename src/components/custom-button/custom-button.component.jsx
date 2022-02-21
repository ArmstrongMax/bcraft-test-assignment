import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

export const CustomButton = ({onClick, type, children}) => (
    <CustomButtonContainer type={type} onClick={onClick}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;