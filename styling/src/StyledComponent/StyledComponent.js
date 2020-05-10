import React from 'react'
import styled from 'styled-components';


const Div = styled.div`
  margin: 10px;
  border: 5px Solid darkblue;
  &:hover {
   background-color: lightblue;
 }
`;

const Paragraph = styled.p`
  font-size: 30px;
  text-align: center;
`;

const StyledComponent=()=> {
    return (
        <Div>
            <Paragraph>
                This is how we use Styled components
            </Paragraph>
            
        </Div>
    )
}

export default StyledComponent
