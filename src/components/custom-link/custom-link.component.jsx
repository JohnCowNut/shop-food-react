import React from 'react';
import {CustomLinkStyleContainer} from './custom-link.styles';
const ButtonLink = ({children , ...props}) => {
    return (
         <CustomLinkStyleContainer {...props}>{children}</CustomLinkStyleContainer>
    )
}
export default ButtonLink;