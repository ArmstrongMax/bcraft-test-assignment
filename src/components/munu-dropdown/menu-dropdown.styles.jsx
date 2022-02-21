import styled from 'styled-components'

export const MenuDropdownContainer = styled.div`
background-color: rgba(255, 255, 255, 0.5);
border-radius: 5px;
box-shadow: 0 0 5px black;
width: fit-content;
height: 100px;
position: absolute;
top: 80px;
right: 0;
margin: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 15px 10px;

@media screen and (max-width: 800px) {
    top: 0;
    right: 70px;
  }

`

export const SpanContainer = styled.span`
cursor: pointer;
`